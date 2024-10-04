import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as addAttribute, e as renderTransition, f as renderSlot, g as createAstro } from '../../chunks/astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$FormattedDate, b as $$Header, c as $$Footer, g as getCollection } from '../../chunks/Footer_CVbqHiZn.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { release } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": release.data.title, "description": release.data.description, "image": release.data.image })}${renderHead()}</head><body> <div class="glow"></div> ${renderComponent($$result, "Header", $$Header, {})} <div class="post single" data-astro-transition-persist="post"${addAttribute(renderTransition($$result, "jpx3f7vy", "", "post"), "data-astro-transition-scope")}> <div class="version_wrapper"> <div class="version_info"> <div class="version_number">${release.data.versionNumber}</div> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "date", "date": release.data.date })} </div> </div> <div class="content"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/layouts/PostLayout.astro", "self");

const $$Astro = createAstro();
async function getStaticPaths() {
  const releases = await getCollection("releases");
  return releases.map((release) => ({
    params: { slug: release.slug },
    props: { release }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { release } = Astro2.props;
  const { Content } = await release.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$PostLayout, { "release": release }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/pages/releases/[slug].astro", void 0);

const $$file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/pages/releases/[slug].astro";
const $$url = "/releases/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
