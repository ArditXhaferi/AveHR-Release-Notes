import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"️-quick-fix-in-the-latest-avehr-update\">🛠️ Quick Fix in the Latest AveHR Update</h2>\n<p>Hey AveHR users! We’ve rolled out a quick fix to address an important issue. Here’s what’s been resolved:</p>\n<h3 id=\"-bug-fix\">🐞 Bug Fix</h3>\n<ul>\n<li>Fixed a <strong>permissions bug</strong> affecting access to employee details, ensuring proper restrictions and security are in place.</li>\n</ul>\n<hr>\n<p>Thank you for your continued support and feedback. We’re always here to make sure your experience with AveHR is smooth and secure. Let us know if you encounter any issues, and we’ll be happy to assist!</p>";

				const frontmatter = {"title":"AveHR Mid-January Bug Fix Update","date":"2024-01-15","versionNumber":"1.3.1","description":"A quick bug fix to improve security on employee details.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR bug fix release image."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_1.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🛠️ Quick Fix in the Latest AveHR Update\n\nHey AveHR users! We've rolled out a quick fix to address an important issue. Here's what’s been resolved:\n\n### 🐞 Bug Fix\n\n- Fixed a **permissions bug** affecting access to employee details, ensuring proper restrictions and security are in place.\n\n---\n\nThank you for your continued support and feedback. We're always here to make sure your experience with AveHR is smooth and secure. Let us know if you encounter any issues, and we'll be happy to assist!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"️-quick-fix-in-the-latest-avehr-update","text":"🛠️ Quick Fix in the Latest AveHR Update"},{"depth":3,"slug":"-bug-fix","text":"🐞 Bug Fix"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
