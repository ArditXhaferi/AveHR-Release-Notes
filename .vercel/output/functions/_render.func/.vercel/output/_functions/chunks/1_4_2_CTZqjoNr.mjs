const id = "1_4_2.md";
						const collection = "releases";
						const slug = "1_4_2";
						const body = "\n## 🚀 AveHR February 28th Feature and Bug Fix Update\n\nHey AveHR users! We're closing out February with a packed update full of new features, design improvements, and crucial bug fixes. Here’s what’s included in this release:\n\n### 🍿 New Features & Enhancements\n\n- **New Modal Design:** We've introduced a sleek, updated design for modals across the platform for a more modern user experience.\n- **Parallel Testing:** We've added parallel testing capabilities to enhance performance during testing.\n- **PDF Generation on Leave Approval:** Users can now create and generate PDF documents automatically when leave requests are approved, improving documentation efficiency.\n\n### 🔄 Changes\n\n- **\"Why Us\" Section Text Update:** We’ve refreshed the content in the \"Why Us\" section to better reflect our platform’s benefits.\n- **Scheduler Policy Update:** The policy for the scheduler has been revised for improved functionality.\n- **LeaveObserver Rollback:** LeaveObserver logic has been reverted to the previous commit for stability.\n\n### 🐞 Bug Fixes\n\n- Fixed a **bug with the icon not displaying** correctly on the scheduler.\n- Resolved the **\"cannot read code\" error** affecting all leaves.\n- Corrected the **scheduling bug** on the dashboard.\n- Addressed **small bugs** within the leave management section.\n- Fixed a bug related to **filtering all leaves** during review leaves.\n- Resolved the issue with **employee password reset** not functioning correctly.\n- Updated the logic to prevent **monthly days from being added to already entitled leave days**.\n- Improved the **search functionality for attendances**.\n- Fixed the logic for **filtering leave approvals** specific to HR.\n- Resolved an issue where **resigned and terminated users** were showing in the reviewers' dropdown.\n- Fixed the logic to ensure **leave days are taken from the current leave entitlement** if it is valid.\n- Corrected an **error with carried days** on leave entitlements.\n\n### 🗑️ Removed\n\n- **Database and Storage Labels:** These labels have been removed from the dashboard to simplify the interface.\n\n---\n\nThank you for your continued trust in AveHR! We’re committed to delivering a seamless HR experience, and your feedback helps us get there. Keep sharing your thoughts, and enjoy the new updates!";
						const data = {title:"AveHR February 28th Feature and Bug Fix Update",description:"New modal design, PDF generation for leave approvals, and critical bug fixes to streamline your experience.",versionNumber:"1.4.2",image:{src:
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
					,alt:"AveHR February 28, 2024 release image."},date:new Date(1709078400000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_4_2.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
