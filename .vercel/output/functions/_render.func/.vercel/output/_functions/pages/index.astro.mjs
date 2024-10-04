import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, f as renderSlot, g as createAstro, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, b as $$Header, c as $$Footer, g as getCollection, a as $$FormattedDate } from '../chunks/Footer_CVbqHiZn.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$IndexLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexLayout;
  const { ...head } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...head })}${renderHead()}</head> <body> <div class="glow"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/layouts/IndexLayout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("releases");
  posts.sort((a, b) => +b.data.date - +a.data.date);
  return renderTemplate`${renderComponent($$result, "Layout", $$IndexLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="page_title">Changelog</h1> <hr> <ul class="posts"${addAttribute(renderTransition($$result2, "4xnpz4kg", "", "post"), "data-astro-transition-scope")}> ${posts.map((post) => renderTemplate`<li class="post"> <div class="version_wrapper"> <div class="version_info"> <a${addAttribute(`/releases/${post.slug}`, "href")}> <div class="version_number">${post.data.versionNumber}</div> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "class": "date", "date": post.data.date })} </a> </div> </div> <div class="content"> ${post.render().then(({ Content }) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}`)} </div> </li>`)} </ul> </main> ` })}`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/pages/index.astro", "self");

const $$file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
