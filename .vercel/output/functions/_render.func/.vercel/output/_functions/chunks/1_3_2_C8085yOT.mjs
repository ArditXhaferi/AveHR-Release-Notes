import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehr-january-17th-feature--bug-fix-update\">🚀 AveHR January 17th Feature &#x26; Bug Fix Update</h2>\n<p>Hello AveHR users! We’re back with another update to improve functionality and address key issues. Here’s what’s included in this release:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>Feature Tests for Basic Functionality:</strong> We’ve added feature tests to ensure smooth and reliable performance for core functions.</li>\n<li><strong>Email Alerts with PDFs for Leave Approvals (RLN):</strong> Users will now receive email alerts with attached PDFs upon leave approvals.</li>\n<li><strong>New Command for Leave Entitlement Adjustments:</strong> A new command has been introduced to help adjust leave entitlements for the previous year, making year-end processes easier.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Fixed the <strong>“value” on null</strong> bug when editing user details.</li>\n<li>Resolved the issue displaying <strong>current month birthdays</strong> on the company dashboard.</li>\n</ul>\n<hr>\n<p>Thank you for choosing AveHR! We’re dedicated to improving your experience with each update. Your feedback is always appreciated, so let us know how we can continue to support your HR needs.</p>";

				const frontmatter = {"title":"AveHR January 17th Feature & Bug Fix Update","date":"2024-01-17","versionNumber":"1.3.2","description":"New feature tests, email alert improvements, and bug fixes to enhance your AveHR experience.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR release image for January 17, 2024."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_2.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR January 17th Feature & Bug Fix Update\n\nHello AveHR users! We’re back with another update to improve functionality and address key issues. Here’s what’s included in this release:\n\n### 🍿 New Features & Enhancements\n\n- **Feature Tests for Basic Functionality:** We've added feature tests to ensure smooth and reliable performance for core functions.\n- **Email Alerts with PDFs for Leave Approvals (RLN):** Users will now receive email alerts with attached PDFs upon leave approvals.\n- **New Command for Leave Entitlement Adjustments:** A new command has been introduced to help adjust leave entitlements for the previous year, making year-end processes easier.\n\n### 🐞 Bug Fixes\n\n- Fixed the **\"value\" on null** bug when editing user details.\n- Resolved the issue displaying **current month birthdays** on the company dashboard.\n\n---\n\nThank you for choosing AveHR! We’re dedicated to improving your experience with each update. Your feedback is always appreciated, so let us know how we can continue to support your HR needs.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehr-january-17th-feature--bug-fix-update","text":"🚀 AveHR January 17th Feature & Bug Fix Update"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
