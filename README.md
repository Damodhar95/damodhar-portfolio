# Damodhar C S — Personal Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript.

## 1. Open on Windows

1. Extract `Damodhar-Portfolio.zip`.
2. Open Visual Studio Code.
3. Select **File → Open Folder**.
4. Select the extracted `Damodhar-Portfolio` folder.
5. In VS Code, open `index.html`.
6. Right-click inside the file and choose **Open with Live Server** if you have the Live Server extension.
   - If you do not have Live Server, open the folder in File Explorer and double-click `index.html`.

## 2. Personalise before publishing

Search the project for `YOUR_EMAIL@example.com` and replace it with your real professional email address.

Replace the `#` links for LinkedIn and GitHub with your real profile URLs.

Add your own portrait photo as `images/profile.jpg` (JPG recommended, portrait orientation). The page currently shows a DS placeholder until you add the photo.

Add your final résumé as `resume/Damodhar_Resume.pdf`.

Review every project and experience description. Edit or remove anything that does not accurately describe your completed work. Add repository/demo links only after verifying they work.

## 3. Publish with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new **public** repository named `damodhar-portfolio` (or another name you prefer).
3. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then save.
7. Wait for the deployment to finish. GitHub Pages will show your site URL in Settings → Pages.

GitHub Pages publishes public repository content. Do not upload private data, passwords, API keys, confidential datasets or personal documents you do not want public.

## 4. Later: deploy to Netlify

After GitHub Pages works, you can connect the same GitHub repository to Netlify:
1. Sign in to Netlify.
2. Choose **Add new project → Import an existing project**.
3. Connect GitHub and select your portfolio repository.
4. For this static site, leave the build command empty and set the publish directory to `.` (repository root).
5. Deploy. Netlify will provide a public URL.

Check the current free-plan limits and terms before using Netlify.

## Project structure

- `index.html` — page content
- `css/style.css` — design and responsive layout
- `js/script.js` — mobile navigation and current year
- `images/profile.jpg` — your portrait photo (add this)
- `resume/Damodhar_Resume.pdf` — your résumé (add this)
