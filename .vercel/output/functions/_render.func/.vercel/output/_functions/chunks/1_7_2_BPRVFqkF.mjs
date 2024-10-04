import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehr-october-3rd-update---employee-import-feature\">🚀 AveHR October 3rd Update - Employee Import Feature</h2>\n<p>Hello AveHR users! We’re excited to bring you a new feature designed to streamline your onboarding process. Here’s what’s included in this update:</p>\n<h3 id=\"-client-side-features--enhancements\">🌟 Client-Side Features &#x26; Enhancements</h3>\n<h4 id=\"added\">Added</h4>\n<ul>\n<li><strong>Import Employees via Excel:</strong> You can now easily import employee data using an Excel list, simplifying the process of adding multiple employees at once.</li>\n</ul>\n<hr>\n<p>Thank you for continuing to use AveHR! We’re committed to making HR management as seamless as possible. Let us know how this new feature helps your workflow, and keep the feedback coming for future improvements!</p>";

				const frontmatter = {"title":"AveHR October 3rd Update - Employee Import Feature","date":"2024-10-03","versionNumber":"1.7.2","description":"Introducing the ability to import employees via Excel for smoother onboarding.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR October 3, 2024 release image."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_2.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR October 3rd Update - Employee Import Feature\n\nHello AveHR users! We’re excited to bring you a new feature designed to streamline your onboarding process. Here’s what’s included in this update:\n\n### 🌟 Client-Side Features & Enhancements\n\n#### Added\n\n- **Import Employees via Excel:** You can now easily import employee data using an Excel list, simplifying the process of adding multiple employees at once.\n\n---\n\nThank you for continuing to use AveHR! We’re committed to making HR management as seamless as possible. Let us know how this new feature helps your workflow, and keep the feedback coming for future improvements!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehr-october-3rd-update---employee-import-feature","text":"🚀 AveHR October 3rd Update - Employee Import Feature"},{"depth":3,"slug":"-client-side-features--enhancements","text":"🌟 Client-Side Features & Enhancements"},{"depth":4,"slug":"added","text":"Added"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
