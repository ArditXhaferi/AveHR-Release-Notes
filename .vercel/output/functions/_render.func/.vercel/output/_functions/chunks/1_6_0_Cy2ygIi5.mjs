const id = "1_6_0.md";
						const collection = "releases";
						const slug = "1_6_0";
						const body = "\n## 🚀 AveHR July 10th Update with German Translations and Enhanced Management Features\n\nHello AveHR users! We’re excited to bring you the latest update packed with new translations, management features, and crucial bug fixes. Here’s what’s included in this release:\n\n### 🌟 Client-Side Features & Enhancements\n\n#### Added\n\n- **German Translations:** The platform now supports German, expanding accessibility for our German-speaking users.\n\n#### Changed\n\n- **Branch Display Issues:** Fixed the issue where branches were showing the wrong company, improving accuracy across the platform.\n- **Custom Manager and Line Manager Flow:** Users can now add custom managers, and we’ve fixed the line manager flow for smoother team management.\n- **403 Error on Holidays Planner:** Resolved the 403 access error on the holidays planner.\n- **Branch Manager Table & Performance Review Pagination:** Fixed small issues with the branch manager table and pagination in the performance review section.\n- **Approval Progress Tooltip:** Added approval progress tooltips in the \"My Leaves\" and \"All Leaves\" sections for better clarity on leave approval status.\n- **Translation and Redirection Bugs:** Addressed small bugs related to translations and page redirections.\n- **Branch Filtering on Dashboard:** The dashboard now includes filtering based on selected branches, offering better insights for multi-branch organizations.\n\n#### Removed\n\n- **Recruitment Login Link:** Removed the link that incorrectly redirected users to the login page from the recruitment section.\n\n---\n\n### 🌟 Server-Side Features & Enhancements\n\n#### Added\n\n- **Clock-In for Another Day:** Users can now clock in for a previous day, improving attendance tracking flexibility.\n- **Branch-Based Filtering on Dashboard:** Implemented server-side support for dashboard filtering based on selected branches.\n\n#### Fixed\n\n- **Pending Users Bug:** Fixed an issue affecting the handling of pending users.\n- **Leave Approval PDF Fix:** Resolved issues with remaining leave days and job position names not displaying correctly on leave approval PDFs.\n- **Attendance Search (Not Clocked In):** Fixed the search functionality for users who haven’t clocked in.\n- **Custom Manager and Line Manager Flow:** Enhanced the ability to add custom managers and fixed the line manager flow for better reporting structures.\n- **Clocked Out Bug Filter:** Fixed issues with clock-out filters to ensure accurate time tracking.\n- **403 Error on Holidays Planner:** Resolved the access error preventing users from accessing the holidays planner.\n- **Notifications for Rejected Leave Requests:** Added notifications for mobile users when their leave requests are rejected.\n- **Leave Entitlement Logic:** Updated the system to ensure that leave days are only taken when they are equal to the entitled days, preventing discrepancies.\n\n#### Removed\n\n- **Leave Observer Code:** Removed code that created leave entitlements when an employee didn’t have a valid entitlement, preventing unnecessary entitlements.\n\n---\n\nThank you for choosing AveHR! We’re committed to enhancing your experience with every update, and your feedback is invaluable. Keep sharing your insights as we continue to improve our platform!";
						const data = {title:"AveHR July 10th Update with German Translations and Enhanced Management Features",description:"Introducing new translations, enhanced management features, and critical fixes across the platform.",versionNumber:"1.6.0",image:{src:
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
					,alt:"AveHR July 10, 2024 release image."},date:new Date(1720569600000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_6_0.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
