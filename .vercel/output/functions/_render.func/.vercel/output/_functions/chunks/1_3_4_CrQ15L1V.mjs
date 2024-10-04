const id = "1_3_4.md";
						const collection = "releases";
						const slug = "1_3_4";
						const body = "\n## 🚀 AveHR January 24th Release Update\n\nHello AveHR users! We’re excited to announce a new set of features and important fixes to enhance your platform experience. Here’s what’s included in this release:\n\n### 🍿 New Features & Enhancements\n\n- **Job Contracts Ordered by Year (RLN):** Job contracts are now automatically sorted from newest to oldest based on the year they were created, providing better visibility of recent contracts.\n- **Holiday Preselection for Departments (RLN):** When creating a new department, all holidays can now be preselected, simplifying the setup process.\n- **Cancel Leave Validation:** Users will no longer be able to cancel a leave request if the leave date is greater than the date requested, improving leave management accuracy.\n\n### 🐞 Bug Fixes\n\n- Fixed the **CORS error** when accessing www.avehr.com.\n- Resolved the issue where **inactive users could still log in** to the platform.\n- Fixed a bug where **new leave entitlements were not automatically activated** when created.\n- Corrected the issue where the **My Leaves tab** was not displaying properly.\n\n### 🗑️ Removed\n\n- The **asterisk sign** has been removed from the ID field to simplify data entry.\n\n---\n\nThank you for being a part of the AveHR community! We’re constantly working to make our platform better for you, so keep sending us your feedback and suggestions. Let’s continue improving together!";
						const data = {title:"AveHR January 24th Release Update",description:"New job contract sorting, holiday preselection, and key bug fixes to improve your AveHR experience.",versionNumber:"1.3.4",image:{src:
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
					,alt:"AveHR January 24, 2024 release image."},date:new Date(1706054400000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_4.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
