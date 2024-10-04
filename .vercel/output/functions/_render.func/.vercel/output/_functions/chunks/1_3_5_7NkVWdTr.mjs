import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehr-january-26th-release-update\">🚀 AveHR January 26th Release Update</h2>\n<p>Hey AveHR users! We’re excited to bring you another update with added features and important fixes. Here’s what’s new:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>Skill Names in Job Resources:</strong> We’ve added skill names to the <code>SimpleOpenJobResource</code>, making job listings more detailed and informative.</li>\n</ul>\n<h3 id=\"-changes\">🔄 Changes</h3>\n<ul>\n<li><strong>Improved Recruitment Logic:</strong> We’ve updated the logic for fetching skills and experiences in the recruitment module to ensure more accurate and relevant data for job postings.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Fixed the <strong>“cannot read property on null” error</strong> that occurred for teams without departments, improving overall platform stability.</li>\n</ul>\n<hr>\n<p>Thank you for using AveHR! We’re continually improving the platform to provide you with the best HR experience possible. Your feedback helps us grow, so keep it coming, and stay tuned for more updates!</p>";

				const frontmatter = {"title":"AveHR January 26th Release Update","date":"2024-01-26","versionNumber":"1.3.5","description":"New features for job resources, improved recruitment logic, and key bug fixes.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR January 26, 2024 release image."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_5.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR January 26th Release Update\n\nHey AveHR users! We're excited to bring you another update with added features and important fixes. Here's what’s new:\n\n### 🍿 New Features & Enhancements\n\n- **Skill Names in Job Resources:** We've added skill names to the `SimpleOpenJobResource`, making job listings more detailed and informative.\n\n### 🔄 Changes\n\n- **Improved Recruitment Logic:** We’ve updated the logic for fetching skills and experiences in the recruitment module to ensure more accurate and relevant data for job postings.\n\n### 🐞 Bug Fixes\n\n- Fixed the **\"cannot read property on null\" error** that occurred for teams without departments, improving overall platform stability.\n\n---\n\nThank you for using AveHR! We’re continually improving the platform to provide you with the best HR experience possible. Your feedback helps us grow, so keep it coming, and stay tuned for more updates!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehr-january-26th-release-update","text":"🚀 AveHR January 26th Release Update"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-changes","text":"🔄 Changes"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
