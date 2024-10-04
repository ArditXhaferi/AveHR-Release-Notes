import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehr-january-24th-release-update\">🚀 AveHR January 24th Release Update</h2>\n<p>Hello AveHR users! We’re excited to announce a new set of features and important fixes to enhance your platform experience. Here’s what’s included in this release:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>Job Contracts Ordered by Year (RLN):</strong> Job contracts are now automatically sorted from newest to oldest based on the year they were created, providing better visibility of recent contracts.</li>\n<li><strong>Holiday Preselection for Departments (RLN):</strong> When creating a new department, all holidays can now be preselected, simplifying the setup process.</li>\n<li><strong>Cancel Leave Validation:</strong> Users will no longer be able to cancel a leave request if the leave date is greater than the date requested, improving leave management accuracy.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Fixed the <strong>CORS error</strong> when accessing <a href=\"http://www.avehr.com\">www.avehr.com</a>.</li>\n<li>Resolved the issue where <strong>inactive users could still log in</strong> to the platform.</li>\n<li>Fixed a bug where <strong>new leave entitlements were not automatically activated</strong> when created.</li>\n<li>Corrected the issue where the <strong>My Leaves tab</strong> was not displaying properly.</li>\n</ul>\n<h3 id=\"️-removed\">🗑️ Removed</h3>\n<ul>\n<li>The <strong>asterisk sign</strong> has been removed from the ID field to simplify data entry.</li>\n</ul>\n<hr>\n<p>Thank you for being a part of the AveHR community! We’re constantly working to make our platform better for you, so keep sending us your feedback and suggestions. Let’s continue improving together!</p>";

				const frontmatter = {"title":"AveHR January 24th Release Update","date":"2024-01-24","versionNumber":"1.3.4","description":"New job contract sorting, holiday preselection, and key bug fixes to improve your AveHR experience.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR January 24, 2024 release image."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_4.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR January 24th Release Update\n\nHello AveHR users! We’re excited to announce a new set of features and important fixes to enhance your platform experience. Here’s what’s included in this release:\n\n### 🍿 New Features & Enhancements\n\n- **Job Contracts Ordered by Year (RLN):** Job contracts are now automatically sorted from newest to oldest based on the year they were created, providing better visibility of recent contracts.\n- **Holiday Preselection for Departments (RLN):** When creating a new department, all holidays can now be preselected, simplifying the setup process.\n- **Cancel Leave Validation:** Users will no longer be able to cancel a leave request if the leave date is greater than the date requested, improving leave management accuracy.\n\n### 🐞 Bug Fixes\n\n- Fixed the **CORS error** when accessing www.avehr.com.\n- Resolved the issue where **inactive users could still log in** to the platform.\n- Fixed a bug where **new leave entitlements were not automatically activated** when created.\n- Corrected the issue where the **My Leaves tab** was not displaying properly.\n\n### 🗑️ Removed\n\n- The **asterisk sign** has been removed from the ID field to simplify data entry.\n\n---\n\nThank you for being a part of the AveHR community! We’re constantly working to make our platform better for you, so keep sending us your feedback and suggestions. Let’s continue improving together!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehr-january-24th-release-update","text":"🚀 AveHR January 24th Release Update"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"},{"depth":3,"slug":"️-removed","text":"🗑️ Removed"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
