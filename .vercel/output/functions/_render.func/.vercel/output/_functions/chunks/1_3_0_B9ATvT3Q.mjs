import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehr-january-2024-release-update\">🚀 AveHR January 2024 Release Update</h2>\n<p>Hello AveHR users! We’re kicking off 2024 with a fresh set of updates aimed at improving your experience. Here’s a rundown of what’s new:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>Base64 Image Support for Profile Uploads:</strong> Users can now upload profile images in base64 format, offering greater flexibility for image management.</li>\n</ul>\n<h3 id=\"-changes\">🔄 Changes</h3>\n<ul>\n<li><strong>CSV Export Field Changes (RLN):</strong> The fields in the employee CSV export have been updated to provide more relevant data.</li>\n<li><strong>Employee Details Update (RLN):</strong> The employee details section on the user profile is now displayed as an employee card for a cleaner and more organized view.</li>\n<li><strong>Job Contract Fields:</strong> We’ve refined the necessary fields for employee details and job contracts for better clarity and workflow.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Resolved the issue where the <strong>job recruitment link</strong> displayed an error when <code>open_job_id</code> was null.</li>\n<li>Fixed the <strong>server error</strong> on the user profile and during new employee creation.</li>\n<li>Corrected the <strong>“value” on null</strong> bug that occurred when assigning HR roles.</li>\n<li>Resolved the <strong>undefined properties error</strong> on recruiting stages and boards.</li>\n<li>Fixed the issue where the <strong>email verification code</strong> was not being sent when users changed their email addresses.</li>\n<li>Fixed a <strong>dashboard bug</strong> where users with roles other than Human Resources could access the HR dashboard by mistake.</li>\n</ul>\n<hr>\n<p>Thank you for being a part of AveHR! We are continuously working to provide you with a more efficient and seamless HR experience. If you have any feedback or need support, feel free to reach out. Let’s make 2024 a productive year together!</p>";

				const frontmatter = {"title":"AveHR January 2024 Release Update!","date":"2024-01-12","versionNumber":"1.3.0","description":"New features, enhancements, and bug fixes to improve your AveHR experience.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR January 2024 release preview."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_0.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR January 2024 Release Update\n\nHello AveHR users! We’re kicking off 2024 with a fresh set of updates aimed at improving your experience. Here’s a rundown of what’s new:\n\n### 🍿 New Features & Enhancements\n\n- **Base64 Image Support for Profile Uploads:** Users can now upload profile images in base64 format, offering greater flexibility for image management.\n\n### 🔄 Changes\n\n- **CSV Export Field Changes (RLN):** The fields in the employee CSV export have been updated to provide more relevant data.\n- **Employee Details Update (RLN):** The employee details section on the user profile is now displayed as an employee card for a cleaner and more organized view.\n- **Job Contract Fields:** We’ve refined the necessary fields for employee details and job contracts for better clarity and workflow.\n\n### 🐞 Bug Fixes\n\n- Resolved the issue where the **job recruitment link** displayed an error when `open_job_id` was null.\n- Fixed the **server error** on the user profile and during new employee creation.\n- Corrected the **\"value\" on null** bug that occurred when assigning HR roles.\n- Resolved the **undefined properties error** on recruiting stages and boards.\n- Fixed the issue where the **email verification code** was not being sent when users changed their email addresses.\n- Fixed a **dashboard bug** where users with roles other than Human Resources could access the HR dashboard by mistake.\n\n---\n\nThank you for being a part of AveHR! We are continuously working to provide you with a more efficient and seamless HR experience. If you have any feedback or need support, feel free to reach out. Let’s make 2024 a productive year together!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehr-january-2024-release-update","text":"🚀 AveHR January 2024 Release Update"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-changes","text":"🔄 Changes"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
