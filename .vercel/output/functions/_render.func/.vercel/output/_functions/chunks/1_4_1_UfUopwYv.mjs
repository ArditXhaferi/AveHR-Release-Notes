const id = "1_4_1.md";
						const collection = "releases";
						const slug = "1_4_1";
						const body = "\n## 🚀 AveHR February 21st Feature Update and Design Overhaul\n\nHello AveHR users! We’ve rolled out a feature-packed update with enhancements, design changes, and crucial fixes. Here’s what’s new in this release:\n\n### 🍿 New Features & Enhancements\n\n- **New Fields for Employee Registration:** Added `city`, `education`, and `ID` fields when registering employees for more detailed records.\n- **User Deletion from Archive:** You can now delete users directly from the archive.\n- **Filtering Leave Approvals:** We’ve added filtering options when reviewing leave approvals for better management.\n- **Landing Page & Pricing Redesign:** The landing page and pricing section have been updated with a fresh new design.\n- **Default Values for Retention Rate Chart:** Default values are now added for department and date range in the retention rate chart.\n- **Team Leader Resignation:** Users now have the ability to resign the team leader when editing an employee, or create a team without a team leader.\n\n### 🔄 Changes\n\n- **Personal Email Field Optional:** The personal email field is now optional during employee registration.\n- **Scheduler Section Redesign:** The scheduler section has been revamped for improved user experience.\n- **Team Leader Removal:** You now have the option to remove a team leader when editing an employee’s details.\n- **Breadcrumbs UI Update:** The breadcrumbs interface has been redesigned for easier navigation.\n- **PDF Attachment Removed from Leave Approvals:** The option to send PDFs on leave approval has been removed to streamline the process.\n- **HR Substitute Users:** Changes have been made to support users acting as HR substitutes for better team flexibility.\n\n### 🐞 Bug Fixes\n\n- Resolved the issue of **multiple emails being sent** for leave approvals.\n- Fixed the bug where **inactive approvals** were not being removed from leave approvals.\n- Corrected the **user deletion process** for smoother handling.\n- Fixed the issue with **multiple roles** when assigning an HR as a department manager.\n- Resolved an **unauthorized error** when viewing profile details.\n- Fixed the bug where users could **access the scheduler without permission**.\n- Resolved an issue with the **email field** on `StoreDepartmentRequest`.\n\n---\n\nThank you for using AveHR! We’re excited about these new features and updates, and as always, we appreciate your feedback. Let us know how we can keep improving to make your experience even better.";
						const data = {title:"AveHR February 21st Feature Update and Design Overhaul",description:"New fields for employee registration, design updates, and key fixes to improve leave approvals and HR management.",versionNumber:"1.4.1",image:{src:
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
					,alt:"AveHR February 21, 2024 release image."},date:new Date(1708473600000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_1.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
