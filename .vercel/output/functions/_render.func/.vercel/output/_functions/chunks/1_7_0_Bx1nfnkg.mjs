const id = "1_7_0.md";
						const collection = "releases";
						const slug = "1_7_0";
						const body = "\n## 🚀 AveHR September 9th Major Feature Release\n\nHello AveHR users! We’re excited to bring you a major update with new modules, enhanced notification features, and a series of bug fixes. Here’s what’s included in this release:\n\n### 🌟 Client-Side Features & Enhancements\n\n#### Added\n\n- **Working Hours Module:** A new module to track employee working hours is now available.\n- **Notification Count in Sidebar:** The sidebar now displays the number of notifications for leave reviews.\n- **Assign To Option for Leave Types:** You can now assign specific roles when creating leave types for better workflow control.\n- **Document Department Field:** The department field has been added to the company documents section, showing which departments the document applies to.\n- **Applicant Count for Open Jobs:** Displays the number of applicants for each open job posting.\n- **Payroll Module:** We’ve introduced a new payroll module for managing employee salaries and payments.\n- **File Import for AUK Company:** Added the ability to import CSV files into the project’s storage for AUK company.\n- **Interview Scheduling Emails:** HR can now send email notifications for scheduled interviews, ensuring both interviewers and candidates are informed.\n- **Mobile Homescreen Endpoints:** Added new endpoints to support mobile home screens.\n- **Leave Approval Documents Menu:** A new menu has been added to employee profiles, allowing employees to view all their leave approval documents.\n\n#### Changed\n\n- **Book a Demo Text:** The \"Book a Demo\" text has been updated to offer a free one-month trial.\n- **Leave Type Earned Days Calculation:** Leave type earned days are now calculated based on the earning policy and limit set for each type.\n\n### 🐞 Bug Fixes\n\n- Fixed **data fetching for HR** and resolved issues with the approval flow for departments without a department manager.\n- **Assigning Specific Leave:** Corrected errors with assigning specific leave types.\n- Fixed a bug where **performance reviews** couldn’t be added due to title, introduction, and selection not saving.\n- Fixed **cancel leave modal** and improved the calculation of workdays functionality.\n- Resolved issues with **stretched modals** in performance reviews and open positions in recruiting.\n- Fixed **Book a Demo 404 Error** and updated the AveHR logo for better visibility.\n- Addressed bugs in the **recruiting module** and switched some modals to the new modal UI.\n- Ensured the **leave approval count** is initialized correctly when users enter the leaves section and when they don't have access to review leaves.\n- Fixed **delete button bugs** in Company -> Documents section.\n- Fixed the **empty dropdown** issue in candidate show and edit pages.\n- The **document table** now updates automatically when a document is deleted, removing the need for a refresh.\n- Fixed bugs related to **leave entitlements** not showing when leave types are deleted.\n- Corrected the logic for **assigning specific leave** to users, ensuring it follows the earning policy and limit.\n- Fixed bugs where **holidays were miscounted** and added additional checks for substitute HR roles.\n- Resolved the **leave export bug** affecting all users.\n- Addressed the issue with **empty dropdowns** on candidate show and edit pages.\n\n### 🗑️ Removed\n\n- Removed the **earned input field** when creating leave types.\n- Removed the **carried-over days select option** for leave types.\n- Removed **inactive leave entitlements** to streamline the leave management process.\n\n---\n\nThank you for using AveHR! This update is designed to enhance your HR management experience and ensure smoother workflows. As always, we appreciate your feedback, so keep sharing your insights as we continue to improve the platform!";
						const data = {title:"AveHR September 9th Major Feature Release",description:"Introducing new modules, enhanced notifications, and various bug fixes for improved HR management.",versionNumber:"1.7.0",image:{src:
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
					,alt:"AveHR September 9, 2024 release image."},date:new Date(1725840000000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_7_0.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
