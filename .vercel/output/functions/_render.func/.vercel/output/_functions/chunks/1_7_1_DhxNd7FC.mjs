const id = "1_7_1.md";
						const collection = "releases";
						const slug = "1_7_1";
						const body = "\n## 🚀 AveHR September 18th Feature and UI Update\n\nHello AveHR users! Our latest update brings enhanced document management features, new export options, and various bug fixes to improve your experience. Here’s what’s included in this release:\n\n### 🌟 Client-Side Features & Enhancements\n\n#### Added\n\n- **Title on Notice Documents:** You can now add titles to notice documents for better identification and organization.\n- **Export Button for Leave Entitlements:** We've added an export button to allow you to export leave entitlements based on the filters applied.\n- **Filters for Leaves Scheduler:** Filters have been added to the leaves scheduler, and leaves are now displayed based on the user’s role.\n- **Permission for Viewing Documents:** A new migration has been added to grant employees permission to view company documents.\n- **Disciplinary Notice Title and File Upload:** You can now add a title and upload files for disciplinary notices.\n- **Employee Document Viewing Permission:** Employees can now view company documents based on their assigned permissions.\n\n#### Changed\n\n- **Unused Days Limit:** The limit of unused days has been adjusted to align with earned days, improving leave management.\n- **Add/Edit Employees Template:** The Add/Edit employee template has been reorganized, with required fields separated from optional ones for easier navigation.\n- **Renamed Sidebar Menu and Dashboard Fields:** Sidebar menu names and dashboard fields have been renamed for greater clarity and usability.\n\n### 🐞 Bug Fixes\n\n- Fixed the **undefined array key error** during user creation and updates.\n- HR users can no longer select themselves as a **substitute HR**, preventing conflicts.\n- Addressed various **recruiting UI bugs** to improve the user experience.\n- Fixed an issue where **stages/education fields** in open job postings were not being saved.\n- Resolved issues with the **paginator**, ensuring the page number updates correctly after a search.\n- Corrected the **stages editing** functionality for open jobs, ensuring changes are saved properly.\n- Fixed **bugs in the performance review search** functionality to improve results accuracy.\n- Addressed **UI bugs in the Open Job section** for better compatibility across different resolutions.\n\n---\n\nThank you for choosing AveHR! We’re continually working to improve your experience with each release. Keep your feedback coming as we continue enhancing the platform to meet your needs!";
						const data = {title:"AveHR September 18th Feature and UI Update",description:"New features for document management, leave entitlement exports, and important UI and bug fixes across the platform.",versionNumber:"1.7.1",image:{src:
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
					,alt:"AveHR September 18, 2024 release image."},date:new Date(1726617600000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_1.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
