import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehrs-latest-updates-and-fixes\">🚀 AveHR’s Latest Updates and Fixes</h2>\n<p>Hello AveHR users! Here’s what’s new in our latest update, bringing more functionality and important bug fixes:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>Carried Days on Leave Entitlements:</strong> We’ve added support for carried days in the <code>UserLeaveEntitlementResource</code>, making leave tracking more comprehensive.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Fixed the <strong>“something went wrong” error</strong> that occurred when viewing user profiles.</li>\n<li>Resolved an issue where <strong>invalid links</strong> were sent when employees signed up via the registration link.</li>\n</ul>\n<h3 id=\"️-removed\">🗑️ Removed</h3>\n<ul>\n<li>Temporarily removed the <strong>Employment Growth and Turnover Rate charts</strong> for improvements.</li>\n</ul>\n<hr>\n<p>Thank you for continuing to trust AveHR! We’re working hard to enhance your experience and are always open to your feedback. Keep reaching out with your thoughts, and we’ll keep delivering the best HR platform for your needs.</p>";

				const frontmatter = {"title":"AveHR January 19th Update","date":"2024-01-19","versionNumber":"1.3.3","description":"Introducing carried days on leave entitlements and key bug fixes.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR January 19, 2024 release image."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_3.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR’s Latest Updates and Fixes\n\nHello AveHR users! Here’s what’s new in our latest update, bringing more functionality and important bug fixes:\n\n### 🍿 New Features & Enhancements\n\n- **Carried Days on Leave Entitlements:** We’ve added support for carried days in the `UserLeaveEntitlementResource`, making leave tracking more comprehensive.\n\n### 🐞 Bug Fixes\n\n- Fixed the **“something went wrong” error** that occurred when viewing user profiles.\n- Resolved an issue where **invalid links** were sent when employees signed up via the registration link.\n\n### 🗑️ Removed\n\n- Temporarily removed the **Employment Growth and Turnover Rate charts** for improvements.\n\n---\n\nThank you for continuing to trust AveHR! We’re working hard to enhance your experience and are always open to your feedback. Keep reaching out with your thoughts, and we’ll keep delivering the best HR platform for your needs.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehrs-latest-updates-and-fixes","text":"🚀 AveHR’s Latest Updates and Fixes"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"},{"depth":3,"slug":"️-removed","text":"🗑️ Removed"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
