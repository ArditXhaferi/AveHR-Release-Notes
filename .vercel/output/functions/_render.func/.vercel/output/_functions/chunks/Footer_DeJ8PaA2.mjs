import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_pkTuGmSk.mjs';
import { c as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML, d as addAttribute, g as createAstro, m as maybeRenderHead, s as spreadAttributes } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import 'clsx';
/* empty css                         */
/* empty css                          */

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/releases/1_0_1.md": () => import('./1_0_1_CV69Ddkd.mjs'),"/src/content/releases/1_2_0.md": () => import('./1_2_0_IWVSaNZ1.mjs'),"/src/content/releases/1_3_0.md": () => import('./1_3_0_DngCD6vs.mjs'),"/src/content/releases/1_3_1.md": () => import('./1_3_1_B6wRk_sr.mjs'),"/src/content/releases/1_3_2.md": () => import('./1_3_2_D5885aoZ.mjs'),"/src/content/releases/1_3_3.md": () => import('./1_3_3_PHrCfOyf.mjs'),"/src/content/releases/1_3_4.md": () => import('./1_3_4_CrQ15L1V.mjs'),"/src/content/releases/1_3_5.md": () => import('./1_3_5_MmdKUPCX.mjs'),"/src/content/releases/1_4_0.md": () => import('./1_4_0_Dvax-fzP.mjs'),"/src/content/releases/1_4_1.md": () => import('./1_4_1_UfUopwYv.mjs'),"/src/content/releases/1_4_2.md": () => import('./1_4_2_CTZqjoNr.mjs'),"/src/content/releases/1_4_3.md": () => import('./1_4_3_C01uKk_A.mjs'),"/src/content/releases/1_5_0.md": () => import('./1_5_0_CWfxaeK3.mjs'),"/src/content/releases/1_6_0.md": () => import('./1_6_0_Cy2ygIi5.mjs'),"/src/content/releases/1_7_0.md": () => import('./1_7_0_Bx1nfnkg.mjs'),"/src/content/releases/1_7_1.md": () => import('./1_7_1_DhxNd7FC.mjs'),"/src/content/releases/1_7_2.md": () => import('./1_7_2_BpTHkNzp.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"releases":{"type":"content","entries":{"1_0_1":"/src/content/releases/1_0_1.md","1_2_0":"/src/content/releases/1_2_0.md","1_3_0":"/src/content/releases/1_3_0.md","1_3_1":"/src/content/releases/1_3_1.md","1_3_2":"/src/content/releases/1_3_2.md","1_3_3":"/src/content/releases/1_3_3.md","1_3_5":"/src/content/releases/1_3_5.md","1_3_4":"/src/content/releases/1_3_4.md","1_4_0":"/src/content/releases/1_4_0.md","1_4_1":"/src/content/releases/1_4_1.md","1_4_2":"/src/content/releases/1_4_2.md","1_5_0":"/src/content/releases/1_5_0.md","1_6_0":"/src/content/releases/1_6_0.md","1_7_0":"/src/content/releases/1_7_0.md","1_7_1":"/src/content/releases/1_7_1.md","1_7_2":"/src/content/releases/1_7_2.md","1_4_3":"/src/content/releases/1_4_3.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/releases/1_0_1.md": () => import('./1_0_1_sEx5g6Lm.mjs'),"/src/content/releases/1_2_0.md": () => import('./1_2_0_lGJhljPl.mjs'),"/src/content/releases/1_3_0.md": () => import('./1_3_0_Dwxb1D8C.mjs'),"/src/content/releases/1_3_1.md": () => import('./1_3_1_uEwN0X6z.mjs'),"/src/content/releases/1_3_2.md": () => import('./1_3_2_Br17047K.mjs'),"/src/content/releases/1_3_3.md": () => import('./1_3_3_Bzzp9FyZ.mjs'),"/src/content/releases/1_3_4.md": () => import('./1_3_4_C7zU9scb.mjs'),"/src/content/releases/1_3_5.md": () => import('./1_3_5_d4zzc8k1.mjs'),"/src/content/releases/1_4_0.md": () => import('./1_4_0_eeWV2o6g.mjs'),"/src/content/releases/1_4_1.md": () => import('./1_4_1_DOidpb--.mjs'),"/src/content/releases/1_4_2.md": () => import('./1_4_2_Dwv11o-N.mjs'),"/src/content/releases/1_4_3.md": () => import('./1_4_3_DgXz1-Lq.mjs'),"/src/content/releases/1_5_0.md": () => import('./1_5_0_CAvtApQ8.mjs'),"/src/content/releases/1_6_0.md": () => import('./1_6_0_Bq5oL5FD.mjs'),"/src/content/releases/1_7_0.md": () => import('./1_7_0_Bs0qqpnz.mjs'),"/src/content/releases/1_7_1.md": () => import('./1_7_1_FBgQgh8W.mjs'),"/src/content/releases/1_7_2.md": () => import('./1_7_2_BbWs5ldC.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    name,
    title,
    description,
    image,
    locale = "en",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site)
  } = Astro2.props;
  const og = {
    name,
    title,
    description,
    canonicalURL,
    image,
    locale,
    type: "website",
    ...Astro2.props.og ?? {}
  };
  const twitter = {
    name,
    title,
    description,
    canonicalURL,
    image,
    locale,
    card: "summary_large_image",
    ...Astro2.props.twitter
  };
  function normalizeImageUrl(image2) {
    return typeof image2 === "string" ? image2 : image2.src;
  }
  return renderTemplate`<!-- Page Metadata --><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="description"${addAttribute(description, "content")}><!-- OpenGraph Tags --><meta property="og:title"${addAttribute(og.title, "content")}><meta property="og:type"${addAttribute(og.type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:locale"${addAttribute(og.locale, "content")}><meta property="og:description"${addAttribute(og.description, "content")}><meta property="og:site_name"${addAttribute(og.name, "content")}>${og.image && renderTemplate`<meta property="og:image"${addAttribute(normalizeImageUrl(og.image.src), "content")}>`}${og.image && renderTemplate`<meta property="og:image:alt"${addAttribute(og.image.alt, "content")}>`}<!-- Twitter Tags --><meta name="twitter:card"${addAttribute(twitter.card, "content")}><meta name="twitter:site"${addAttribute(twitter.handle, "content")}><meta name="twitter:title"${addAttribute(twitter.title, "content")}><meta name="twitter:description"${addAttribute(twitter.description, "content")}>${twitter.image && renderTemplate`<meta name="twitter:image"${addAttribute(normalizeImageUrl(twitter.image.src), "content")}>`}${twitter.image && renderTemplate`<meta name="twitter:image:alt"${addAttribute(twitter.image.alt, "content")}>`}`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/components/SEO.astro", void 0);

const SiteTitle = "AveHR";
const SiteDescription = "AveHR Release Notes!";

const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = SiteTitle, name = SiteTitle, description = SiteDescription, ...seo } = Astro2.props;
  return renderTemplate`<meta charset="utf-8">${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "name": name, ...seo })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Source+Code+Pro&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro();
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs, void 0, { "class": "astro-baakmyjh" })} data-astro-cid-baakmyjh> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> `;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/components/FormattedDate.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <h2 id="site_title" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388 370" width="32px" data-astro-cid-3ef6ksr2> <title>Sidebar Logo-svg</title> <defs data-astro-cid-3ef6ksr2> <linearGradient id="g1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(601,720,-800.422,668.13,173.5,58.5)" data-astro-cid-3ef6ksr2> <stop offset="0" stop-color="#2463eb" data-astro-cid-3ef6ksr2></stop> <stop offset="1" stop-color="#020f12" data-astro-cid-3ef6ksr2></stop> </linearGradient> </defs> <style>
		.s0 { fill: url(#g1) } 
	</style> <path class="s0" d="m207.6 0l-207.6 369.5 73.5-33 134.1-239.6 96.9 170.7h-79.1l-99.8 45.8 262.2 0.3z" data-astro-cid-3ef6ksr2></path> </svg> ${SiteTitle} </a> </h2> </nav> </header> `;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <p>AveHR © 2024</p> </footer>`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$FormattedDate as a, $$Header as b, $$Footer as c, getCollection as g };
