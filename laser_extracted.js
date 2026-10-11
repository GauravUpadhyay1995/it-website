.getAttribute("data-mouse-smooth"), 0), 0, 1);
    const tiltStrength = clamp(toNumber(el.getAttribute("data-tilt-strength"), 0.01), 0, 0.2);
    const dprAttr = el.getAttribute("data-dpr");
    const pointerEvents = (el.getAttribute("data-pointer-events") || "auto").toLowerCase();
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const RM = prefersReduced ? 1e-4 : 1;
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      // transparent to show image under
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: false,
      logarithmicDepthBuffer: false
    });
    renderer.shadowMap.enabled = false;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0, 0);
    const canvas = renderer.domElement;
    canvas.className = "laser-flow-canvas";
    canvas.style.pointerEvents = pointerEvents === "none" ? "none" : "auto";
    el.appendChild(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
    );
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(1, 1, 1) },
      iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      uWispDensity: { value: wispDensity },
      uTiltScale: { value: tiltStrength },
      uFlowTime: { value: 0 },
      uFogTime: { value: 0 },
      uBeamXFrac: { value: beamX },
      uBeamYFrac: { value: beamY },
      uFlowSpeed: { value: flowSpeed * RM },
      uVLenFactor: { value: verticalSizing },
      uHLenFactor: { value: horizontalSizing },
      uFogIntensity: { value: fogIntensity * (prefersReduced ? 0.3 : 1) },
      uFogScale: { value: fogScale },
      uWSpeed: { value: wispSpeed * RM },
      uWIntensity: { value: wispIntensity * (prefersReduced ? 0.6 : 1) },
      uFlowStrength: { value: flowStrength },
      uDecay: { value: decay },
      uFalloffStart: { value: falloffStart },
      uFogFallSpeed: { value: fogFallSpeed * RM },
      uColor: { value: new THREE.Vector3(1, 1, 1) },
      uFade: { value: 0 }
    };
    const { r, g, b } = hexToRGB(color);
    uniforms.uColor.value.set(r, g, b);
    const material = new THREE.RawShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      // let the alpha from shader blend with image
      depthTest: false,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    scene.add(mesh);
    const baseDpr = (() => {
      if (dprAttr && dprAttr !== "auto") {
        return clamp(Number(dprAttr) || 1, 0.6, 2);
      }
      return Math.min(window.devicePixelRatio || 1, 2);
    })();
    let currentDpr = baseDpr;
    function setSize() {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setPixelRatio(currentDpr);
      renderer.setSize(w, h, false);
      uniforms.iResolution.value.set(w * currentDpr, h * currentDpr, currentDpr);
      rect = canvas.getBoundingClientRect();
    }
    let rect = null;
    const ro = new ResizeObserver(() => requestAnimationFrame(setSize));
    ro.observe(el);
    let inView = true;
    const io = new IntersectionObserver(
      (entries) => {
        var _a;
        inView = ((_a = entries[0]) == null ? void 0 : _a.isIntersecting) ?? true;
      },
      { root: null, threshold: 0 }
    );
    io.observe(el);
    let paused = document.hidden;
    const onVis = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis, { passive: true });
    const mouseTarget = new THREE.Vector2(0, 0);
    const mouseSmooth = new THREE.Vector2(0, 0);
    const updateMouse = (clientX, clientY) => {
      if (!rect) return;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const ratio = currentDpr;
      const hb = rect.height * ratio;
      mouseTarget.set(x * ratio, hb - y * ratio);
    };
    const onMove = (ev) => updateMouse(ev.clientX, ev.clientY);
    const onLeave = () => mouseTarget.set(0, 0);
    const mouseHost = pointerEvents === "none" ? el : canvas;
    mouseHost.addEventListener("pointermove", onMove, { passive: true });
    mouseHost.addEventListener("pointerdown", onMove, { passive: true });
    mouseHost.addEventListener("pointerenter", onMove, { passive: true });
    mouseHost.addEventListener("pointerleave", onLeave, { passive: true });
    const onCtxLost = (e) => {
      e.preventDefault();
      paused = true;
    };
    const onCtxRestored = () => {
      paused = false;
      requestAnimationFrame(setSize);
    };
    canvas.addEventListener("webglcontextlost", onCtxLost, false);
    canvas.addEventListener("webglcontextrestored", onCtxRestored, false);
    let emaDt = 16.7;
    let lastCheck = performance.now();
    let fpsSamples = [];
    const dprFloor = 0.6, lowerThresh = 50, upperThresh = 58;
    function adaptDpr(now) {
      const elapsed = now - lastCheck;
      if (elapsed < 750) return;
      if (!fpsSamples.length) {
        lastCheck = now;
        return;
      }
      const avg = fpsSamples.reduce((a, b2) => a + b2, 0) / fpsSamples.length;
      let next = currentDpr;
      if (avg < lowerThresh) next = clamp(currentDpr * 0.9, dprFloor, baseDpr);
      else if (avg > upperThresh && currentDpr < baseDpr)
        next = clamp(currentDpr * 1.05, dprFloor, baseDpr);
      if (Math.abs(next - currentDpr) > 0.01) {
        currentDpr = next;
        setSize();
      }
      fpsSamples = [];
      lastCheck = now;
    }
    const clock = new THREE.Clock();
    let prevTime = 0;
    let fade = 0;
    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      if (paused || !inView) return;
      const t = clock.getElapsedTime();
      const dt = Math.max(0, t - prevTime);
      prevTime = t;
      const dtMs = dt * 1e3;
      emaDt = emaDt * 0.9 + dtMs * 0.1;
      const instFps = 1e3 / Math.max(1, emaDt);
      fpsSamples.push(instFps);
      uniforms.iTime.value = t;
      const cdt = Math.min(0.033, Math.max(1e-3, dt));
      uniforms.uFlowTime.value += cdt;
      uniforms.uFogTime.value += cdt;
      if (fade < 1) {
        fade = Math.min(1, fade + cdt / 1);
        uniforms.uFade.value = fade;
      }
      const tau = Math.max(1e-3, mouseSmoothTime);
      const alpha = 1 - Math.exp(-cdt / tau);
      mouseSmooth.lerp(mouseTarget, alpha);
      uniforms.iMouse.value.set(mouseSmooth.x, mouseSmooth.y, 0, 0);
      renderer.render(scene, camera);
      adaptDpr(performance.now());
    }
    setSize();
    animate();
    function update(opts = {}) {
      if (opts.color) {
        const { r: r2, g: g2, b: b2 } = hexToRGB(opts.color);
        uniforms.uColor.value.set(r2, g2, b2);
      }
      if (opts.horizontalSizing != null) uniforms.uHLenFactor.value = +opts.horizontalSizing;
      if (opts.verticalSizing != null) uniforms.uVLenFactor.value = +opts.verticalSizing;
      if (opts.wispDensity != null) uniforms.uWispDensity.value = +opts.wispDensity;
      if (opts.wispSpeed != null)
        uniforms.uWSpeed.value = +opts.wispSpeed * (prefersReduced ? 1e-4 : 1);
      if (opts.wispIntensity != null) uniforms.uWIntensity.value = +opts.wispIntensity;
      if (opts.flowSpeed != null)
        uniforms.uFlowSpeed.value = +opts.flowSpeed * (prefersReduced ? 1e-4 : 1);
      if (opts.flowStrength != null) uniforms.uFlowStrength.value = +opts.flowStrength;
      if (opts.fogIntensity != null)
        uniforms.uFogIntensity.value = +opts.fogIntensity * (prefersReduced ? 0.3 : 1);
      if (opts.fogScale != null) uniforms.uFogScale.value = +opts.fogScale;
      if (opts.fogFallSpeed != null)
        uniforms.uFogFallSpeed.value = +opts.fogFallSpeed * (prefersReduced ? 1e-4 : 1);
      if (opts.decay != null) uniforms.uDecay.value = +opts.decay;
      if (opts.falloffStart != null) uniforms.uFalloffStart.value = +opts.falloffStart;
      if (opts.beamX != null) uniforms.uBeamXFrac.value = +opts.beamX;
      if (opts.beamY != null) uniforms.uBeamYFrac.value = +opts.beamY;
    }
    function destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      mouseHost.removeEventListener("pointermove", onMove);
      mouseHost.removeEventListener("pointerdown", onMove);
      mouseHost.removeEventListener("pointerenter", onMove);
      mouseHost.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("webglcontextlost", onCtxLost);
      canvas.removeEventListener("webglcontextrestored", onCtxRestored);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (el.contains(canvas)) el.removeChild(canvas);
    }
    el.__laserFlow = { update, destroy, renderer, uniforms };
    return el.__laserFlow;
  }
  function autoInit() {
    document.querySelectorAll(".laser-flow").forEach((el) => {
      if (el.__laserFlow) return;
      initLaserFlow(el);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
  window.LaserFlow = { init: initLaserFlow };
})();
const parseFloatDataset = (dataset, key, defaultValue) => {
  const value = dataset[key];
  return value === void 0 ? defaultValue : Number.parseFloat(value);
};
const revealElement = (elem) => {
  const { dataset } = elem;
  const wordDelay = parseFloatDataset(dataset, "wordDelay", 0);
  const duration = parseFloatDataset(dataset, "wordDuration", 0.6);
  const offsetY = parseFloatDataset(dataset, "wordOffsetY", 30);
  const rotationX = parseFloatDataset(dataset, "wordRotationX", 95);
  const instant = dataset.wordInstant !== void 0 && dataset.wordInstant !== "false";
  const start = dataset.wordStart || "top 85%";
  const end = dataset.wordEnd || "top 40%";
  const delay = parseFloatDataset(dataset, "delay", 0);
  if (typeof SplitText === "undefined") {
    console.warn("GSAP SplitText is not available");
    return;
  }
  const splitText = new SplitText(elem, {
    type: "words"
  });
  const wordSpans = splitText.words;
  if (!(wordSpans == null ? void 0 : wordSpans.length)) {
    return;
  }
  elem.style.opacity = 1;
  elem._splitTextInstance = splitText;
  gsap.set(elem, { overflow: "hidden" });
  gsap.set(wordSpans, {
    y: offsetY,
    rotationX,
    transformOrigin: "center center",
    transformStyle: "preserve-3d",
    perspective: "1000px"
  });
  const animationProps = {
    opacity: 1,
    y: 0,
    rotationX: 0,
    duration,
    delay,
    ease: "cubic