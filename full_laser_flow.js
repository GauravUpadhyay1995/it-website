ecay; float tauMax=basePhase;
  float cx=clamp(uvc.x/(R_H*uHLenFactor),-1.0,1.0),tH=clamp(TWO_PI-acos(cx),tauMin,tauMax);
  for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
    float tu=tH+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
    float spd=max(abs(sin(tu)),0.02),u=clamp((basePhase-tu)/max(uDecay,EPS),0.0,1.0),env=pow(1.0-abs(u*2.0-1.0),0.8);
    vec2 p=vec2((R_H*uHLenFactor)*cos(tu),0.0);
    a+=wt*bs(uvc,p,env*spd);
  }
  float yPix=uvc.y,cy=clamp(-yPix/(R_V*uVLenFactor),-1.0,1.0),tV=clamp(TWO_PI-acos(cy),tauMin,tauMax);
  for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
    float tu=tV+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
    float yb=(-R_V)*cos(tu),s=clamp(yb/R_V,0.0,1.0),spd=max(abs(sin(tu)),0.02);
    float env=pow(1.0-s,0.6)*spd;
    float cap=1.0-smoothstep(TOP_FADE_START,1.0,s); cap=pow(cap,TOP_FADE_EXP); env*=cap;
    float ph=s/max(FLOW_PERIOD,EPS)+uFlowTime*uFlowSpeed;
    float fl=pow(tri01(ph),FLOW_SHARPNESS);
    env*=mix(1.0-uFlowStrength,1.0,fl);
    float yp=(-R_V*uVLenFactor)*cos(tu),m=pow(smoothstep(FLARE_HEIGHT,0.0,yp),FLARE_EXP),wx=1.0+FLARE_AMOUNT*m;
    vec2 sig=vec2(wx,1.0),p=vec2(0.0,yp);
    float mask=step(0.0,yp);
    b+=wt*bsa(uvc,p,mask*env,sig);
  }
  float sPix=clamp(yPix/R_V,0.0,1.0),topA=pow(1.0-smoothstep(TOP_FADE_START,1.0,sPix),TOP_FADE_EXP);
  float L=a+b*topA;
  float w=vWisps(vec2(uvc.x,yPix),topA);
  float fog=0.0;
#if FOG_ON
  vec2 fuv=uvc*uFogScale;
  float mAct=step(1.0,length(iMouse.xy)),nx=((iMouse.x-C.x)*invW)*mAct;
  float ax = abs(nx);
  float stMag = mix(ax, pow(ax, FOG_TILT_SHAPE), 0.35);
  float st = sign(nx) * stMag * uTiltScale;
  st = clamp(st, -FOG_TILT_MAX_X, FOG_TILT_MAX_X);
  vec2 dir=normalize(vec2(st,1.0));
  fuv+=uFogTime*uFogFallSpeed*dir;
  vec2 prp=vec2(-dir.y,dir.x);
  fuv+=prp*(0.08*sin(dot(uvc,prp)*0.08+uFogTime*0.9));
  float n=fbm2(fuv+vec2(fbm2(fuv+vec2(7.3,2.1)),fbm2(fuv+vec2(-3.7,5.9)))*0.6);
  n=pow(clamp(n,0.0,1.0),FOG_CONTRAST);
  float pixW = 1.0 / max(iResolution.y, 1.0);
#ifdef GL_OES_standard_derivatives
  float wL = max(fwidth(L), pixW);
#else
  float wL = pixW;
#endif
  float m0=pow(smoothstep(FOG_BEAM_MIN - wL, FOG_BEAM_MAX + wL, L),FOG_MASK_GAMMA);
  float bm=1.0-pow(1.0-m0,FOG_EXPAND_SHAPE); bm=mix(bm*m0,bm,FOG_EDGE_MIX);
  float yP=1.0-smoothstep(HFOG_Y_RADIUS,HFOG_Y_RADIUS+HFOG_Y_SOFT,abs(yPix));
  float nxF=abs((frag.x-C.x)*invW),hE=1.0-smoothstep(HFOG_EDGE_START,HFOG_EDGE_END,nxF); hE=pow(clamp(hE,0.0,1.0),HFOG_EDGE_GAMMA);
  float hW=mix(1.0,hE,clamp(yP,0.0,1.0));
  float bBias=mix(1.0,1.0-sPix,FOG_BOTTOM_BIAS);
  float browserFogIntensity = uFogIntensity;
  browserFogIntensity *= 1.8;
  float radialFade = 1.0 - smoothstep(0.0, 0.7, length(uvc) / 120.0);
  float safariFog = n * browserFogIntensity * bBias * bm * hW * radialFade;
  fog = safariFog;
#endif
  float LF=L+fog;
  float dith=(h21(frag)-0.5)*(DITHER_STRENGTH/255.0);
  float tone=g(LF+w);
  vec3 col=tone*uColor+dith;
  float alpha=clamp(g(L+w*0.6)+dith*0.6,0.0,1.0);
  float nxE=abs((frag.x-C.x)*invW),xF=pow(clamp(1.0-smoothstep(EDGE_X0,EDGE_X1,nxE),0.0,1.0),EDGE_X_GAMMA);
  float scene=LF+max(0.0,w)*0.5,hi=smoothstep(EDGE_LUMA_T0,EDGE_LUMA_T1,scene);
  float eM=mix(xF,1.0,hi);
  col*=eM; alpha*=eM;
  col*=uFade; alpha*=uFade;
  fc=vec4(col,alpha);
}

void main(){
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}
`;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const toNumber = (v, def) => {
    if (v == null || v === "" || v === "auto") return def;
    const n = Number(v);
    return Number.isFinite(n) ? n : def;
  };
  const hexToRGB = (hex) => {
    if (!hex) return { r: 1, g: 1, b: 1 };
    let c = hex.trim();
    if (c[0] === "#") c = c.slice(1);
    if (c.length === 3)
      c = c.split("").map((x) => x + x).join("");
    const n = parseInt(c, 16);
    if (Number.isNaN(n)) return { r: 1, g: 1, b: 1 };
    return { r: (n >> 16 & 255) / 255, g: (n >> 8 & 255) / 255, b: (n & 255) / 255 };
  };
  function initLaserFlow(el) {
    const color = el.getAttribute("data-color") || "#FF79C6";
    const horizontalSizing = clamp(
      toNumber(el.getAttribute("data-horizontal-sizing"), 0.5),
      0.2,
      2.5
    );
    const verticalSizing = clamp(toNumber(el.getAttribute("data-vertical-sizing"), 2), 0.5, 3);
    const wispDensity = clamp(toNumber(el.getAttribute("data-wisp-density"), 1), 0, 2);
    const wispSpeed = clamp(toNumber(el.getAttribute("data-wisp-speed"), 15), 0, 40);
    const wispIntensity = clamp(toNumber(el.getAttribute("data-wisp-intensity"), 5), 0, 10);
    const flowSpeed = clamp(toNumber(el.getAttribute("data-flow-speed"), 0.35), 0, 1);
    const flowStrength = clamp(toNumber(el.getAttribute("data-flow-strength"), 0.25), 0, 1);
    const fogIntensity = clamp(toNumber(el.getAttribute("data-fog-intensity"), 0.45), 0, 1);
    const fogScale = clamp(toNumber(el.getAttribute("data-fog-scale"), 0.3), 0.05, 1.5);
    const fogFallSpeed = clamp(toNumber(el.getAttribute("data-fog-fall-speed"), 0.6), 0, 3);
    const decay = clamp(toNumber(el.getAttribute("data-decay"), 1.1), 0.3, 3);
    const falloffStart = clamp(toNumber(el.getAttribute("data-falloff-start"), 1.2), 0.2, 4);
    const beamX = clamp(toNumber(el.getAttribute("data-beam-x"), 0.1), -0.5, 0.5);
    const beamY = clamp(toNumber(el.getAttribute("data-beam-y"), 0), -0.5, 0.5);
    const mouseSmoothTime = clamp(toNumber(el.getAttribute("data-mouse-smooth"), 0), 0, 1);
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
    mouseHost.addEventListener("pointerm