const id = "1_4_0.md";
						const collection = "releases";
						const slug = "1_4_0";
						const body = "\n## 🚀AveHR February 8th Feature & Security Update\n\nHello AveHR users! Our latest update brings significant new features and security fixes. Here's a breakdown of what’s included:\n\n### 🍿 New Features & Enhancements\n\n- **Complete HR Control Over Leave Requests:** HR can now fully manage leave requests, even outside the workflow scope, giving more flexibility in managing leaves.\n- **Pagination for Leave Reviews:** We've added pagination when reviewing leaves, making it easier to manage larger lists.\n- **Document Requirement for Leave Types:** HR can now require documents over a specific period when creating a leave type.\n- **Holiday Export by Year:** You can now export holidays based on the selected year for better planning.\n- **Clock-In Module Permissions on Dashboard:** Added the option to assign permissions for the clock-in module directly from the dashboard.\n\n### 🔄 Changes\n\n- **Nationality Field Update:** The \"nationality\" field is now renamed to \"country,\" and the unused \"country\" field has been removed.\n- **Updated Email Message for Changing Email:** We’ve enhanced the email message format when users change their email addresses.\n- **Real-Time Notification Counter:** The notification counter now updates in real-time whenever a leave is modified.\n\n### 🐞 Bug Fixes\n\n- Resolved **security issues** for improved platform safety.\n- Fixed a bug related to **editing contract templates**.\n- Resolved an error when attempting to read the **property name on null** in `ExportLeaveResource` and `ExportUserResource`.\n- Fixed the **server error** when assigning a performance review to an employee.\n- Corrected an issue where data was not showing when editing **contract templates**.\n- Fixed a display issue where **contract dots** would appear on empty files.\n\n---\n\nThank you for continuing to support AveHR! We’re committed to delivering a secure and efficient HR platform. Your feedback is invaluable, so keep sharing your thoughts as we work to improve your experience.";
						const data = {title:"AveHR February 8th Feature & Security Update",description:"New HR leave control, document requirements, and key bug fixes to enhance security and functionality.",versionNumber:"1.4.0",image:{src:
						new Proxy({"src":"/_astro/starlog-placeholder-1.D1Ad2KDX.jpg","width":1560,"height":640,"format":"jpg","fsPath":"/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/assets/starlog-placeholder-1.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/assets/starlog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					})
					,alt:"AveHR February 8, 2024 release image."},date:new Date(1707350400000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_0.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
