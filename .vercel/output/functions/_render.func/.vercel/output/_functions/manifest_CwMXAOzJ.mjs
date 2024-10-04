import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CA8OlyPp.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_DoqbvIE_.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/arditxhaferi/Sites/AveHR-Release-Notes/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"inline","content":"time[data-astro-cid-baakmyjh]{display:block}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"},{"type":"external","src":"/_astro/index.o8RnG3qM.css"}],"routeData":{"route":"/releases/[slug]","isIndex":false,"type":"page","pattern":"^\\/releases\\/([^/]+?)\\/?$","segments":[[{"content":"releases","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/releases/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fDDyMQpn.js"}],"styles":[{"type":"inline","content":"time[data-astro-cid-baakmyjh]{display:block}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"},{"type":"external","src":"/_astro/index.o8RnG3qM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/pages/releases/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/layouts/PostLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/releases/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/releases/[slug]@_@astro":"pages/releases/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_0_1.md?astroContentCollectionEntry=true":"chunks/1_0_1_CV69Ddkd.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_2_0.md?astroContentCollectionEntry=true":"chunks/1_2_0_IWVSaNZ1.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_0.md?astroContentCollectionEntry=true":"chunks/1_3_0_DngCD6vs.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_1.md?astroContentCollectionEntry=true":"chunks/1_3_1_B6wRk_sr.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_2.md?astroContentCollectionEntry=true":"chunks/1_3_2_D5885aoZ.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_3.md?astroContentCollectionEntry=true":"chunks/1_3_3_PHrCfOyf.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_4.md?astroContentCollectionEntry=true":"chunks/1_3_4_CrQ15L1V.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_5.md?astroContentCollectionEntry=true":"chunks/1_3_5_MmdKUPCX.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_0.md?astroContentCollectionEntry=true":"chunks/1_4_0_Dvax-fzP.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_1.md?astroContentCollectionEntry=true":"chunks/1_4_1_UfUopwYv.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_2.md?astroContentCollectionEntry=true":"chunks/1_4_2_CTZqjoNr.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_3.md?astroContentCollectionEntry=true":"chunks/1_4_3_C01uKk_A.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_5_0.md?astroContentCollectionEntry=true":"chunks/1_5_0_CWfxaeK3.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_6_0.md?astroContentCollectionEntry=true":"chunks/1_6_0_Cy2ygIi5.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_0.md?astroContentCollectionEntry=true":"chunks/1_7_0_Bx1nfnkg.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_1.md?astroContentCollectionEntry=true":"chunks/1_7_1_DhxNd7FC.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_2.md?astroContentCollectionEntry=true":"chunks/1_7_2_BpTHkNzp.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_0_1.md?astroPropagatedAssets":"chunks/1_0_1_sEx5g6Lm.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_2_0.md?astroPropagatedAssets":"chunks/1_2_0_lGJhljPl.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_0.md?astroPropagatedAssets":"chunks/1_3_0_Dwxb1D8C.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_1.md?astroPropagatedAssets":"chunks/1_3_1_uEwN0X6z.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_2.md?astroPropagatedAssets":"chunks/1_3_2_Br17047K.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_3.md?astroPropagatedAssets":"chunks/1_3_3_Bzzp9FyZ.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_4.md?astroPropagatedAssets":"chunks/1_3_4_C7zU9scb.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_5.md?astroPropagatedAssets":"chunks/1_3_5_d4zzc8k1.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_0.md?astroPropagatedAssets":"chunks/1_4_0_eeWV2o6g.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_1.md?astroPropagatedAssets":"chunks/1_4_1_DOidpb--.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_2.md?astroPropagatedAssets":"chunks/1_4_2_Dwv11o-N.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_3.md?astroPropagatedAssets":"chunks/1_4_3_DgXz1-Lq.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_5_0.md?astroPropagatedAssets":"chunks/1_5_0_CAvtApQ8.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_6_0.md?astroPropagatedAssets":"chunks/1_6_0_Bq5oL5FD.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_0.md?astroPropagatedAssets":"chunks/1_7_0_Bs0qqpnz.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_1.md?astroPropagatedAssets":"chunks/1_7_1_FBgQgh8W.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_2.md?astroPropagatedAssets":"chunks/1_7_2_BbWs5ldC.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_0_1.md":"chunks/1_0_1_BAg8CFY-.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_2_0.md":"chunks/1_2_0_BIlmQ3Su.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_0.md":"chunks/1_3_0_B9ATvT3Q.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_1.md":"chunks/1_3_1_C8JnpD3t.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_2.md":"chunks/1_3_2_C8085yOT.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_3.md":"chunks/1_3_3_CEeBUXqC.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_4.md":"chunks/1_3_4_CenmO2Yn.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_5.md":"chunks/1_3_5_7NkVWdTr.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_0.md":"chunks/1_4_0_Pr9wOAP6.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_1.md":"chunks/1_4_1_BE30skRt.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_2.md":"chunks/1_4_2_CsymODXV.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_3.md":"chunks/1_4_3_QRdGL75M.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_5_0.md":"chunks/1_5_0_BaKnDJfZ.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_6_0.md":"chunks/1_6_0_B1q73oDh.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_0.md":"chunks/1_7_0_DRrGYXUo.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_1.md":"chunks/1_7_1_gbRKp6nH.mjs","/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_2.md":"chunks/1_7_2_BPRVFqkF.mjs","\u0000@astrojs-manifest":"manifest_CwMXAOzJ.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fDDyMQpn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/starlog-placeholder-1.D1Ad2KDX.jpg","/_astro/index.o8RnG3qM.css","/favicon.svg","/_astro/hoisted.fDDyMQpn.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"3fRlM4LUl3sjU4JDDrGjs8dz5akXWIA2bHFztklgsKE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
