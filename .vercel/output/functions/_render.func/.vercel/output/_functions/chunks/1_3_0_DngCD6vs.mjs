const id = "1_3_0.md";
						const collection = "releases";
						const slug = "1_3_0";
						const body = "\n## 🚀 AveHR January 2024 Release Update\n\nHello AveHR users! We’re kicking off 2024 with a fresh set of updates aimed at improving your experience. Here’s a rundown of what’s new:\n\n### 🍿 New Features & Enhancements\n\n- **Base64 Image Support for Profile Uploads:** Users can now upload profile images in base64 format, offering greater flexibility for image management.\n\n### 🔄 Changes\n\n- **CSV Export Field Changes (RLN):** The fields in the employee CSV export have been updated to provide more relevant data.\n- **Employee Details Update (RLN):** The employee details section on the user profile is now displayed as an employee card for a cleaner and more organized view.\n- **Job Contract Fields:** We’ve refined the necessary fields for employee details and job contracts for better clarity and workflow.\n\n### 🐞 Bug Fixes\n\n- Resolved the issue where the **job recruitment link** displayed an error when `open_job_id` was null.\n- Fixed the **server error** on the user profile and during new employee creation.\n- Corrected the **\"value\" on null** bug that occurred when assigning HR roles.\n- Resolved the **undefined properties error** on recruiting stages and boards.\n- Fixed the issue where the **email verification code** was not being sent when users changed their email addresses.\n- Fixed a **dashboard bug** where users with roles other than Human Resources could access the HR dashboard by mistake.\n\n---\n\nThank you for being a part of AveHR! We are continuously working to provide you with a more efficient and seamless HR experience. If you have any feedback or need support, feel free to reach out. Let’s make 2024 a productive year together!";
						const data = {title:"AveHR January 2024 Release Update!",description:"New features, enhancements, and bug fixes to improve your AveHR experience.",versionNumber:"1.3.0",image:{src:
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
					,alt:"AveHR January 2024 release preview."},date:new Date(1705017600000)};
						const _internal = {
							type: 'content',
							filePath: "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_3_0.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
