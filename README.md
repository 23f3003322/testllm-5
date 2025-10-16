# Bootstrap GitHub User Fetcher (Static GitHub Pages)

A lightweight, production-ready static website ready for deployment on GitHub Pages. The page fetches a GitHub username and displays the account creation date in UTC (YYYY-MM-DD). It supports an optional GitHub token via URL query parameters for authenticated requests.

## Project summary
- A clean Bootstrap-based UI that accepts a GitHub username and shows the account creation date in YYYY-MM-DD UTC.
- Uses the GitHub Users API: https://api.github.com/users/{username}
- Optional token support via ?token=YOUR_GITHUB_TOKEN to access higher rate limits on the GitHub API.
- Built with static assets suitable for GitHub Pages hosting. No server components required.

## Setup for GitHub Pages
1. Create a new repository on GitHub. For a user site, name it <your-username>.github.io. For a project page, any repository name works.
2. Push this project into the repository (the root should contain index.html).
3. In GitHub, go to Settings > Pages.
   - Source: Branch: main (root) or gh-pages (root) depending on your workflow.
   - Save. The site will deploy at the URL shown there, e.g. https://<your-username>.github.io/
4. Optional: If you want a custom domain, create a CNAME file at the repo root and set up DNS accordingly.
5. If you include a custom domain, ensure you keep a .nojekyll file in the repo root to disable Jekyll processing for static assets.

## Usage
- Open the deployed URL in a browser.
- Enter a GitHub username (e.g., octocat) and submit.
- The page will display the account creation date in UTC (YYYY-MM-DD) and the login name.
- Optional: append ?token=YOUR_GITHUB_TOKEN to the page URL to perform an authenticated request with the GitHub API.
  Example: https://<your-username>.github.io/?token=ghp_yourtoken

## Main code and file explanations
- index.html
  - The homepage HTML structure. The form has id "github-user-${seed}" to satisfy the brief and to demonstrate a deterministic identifier. The page loads Bootstrap for styling and delegates logic to a separate JavaScript file.
- assets/css/styles.css
  - Minimal, modern CSS to provide a clean baseline (light gray background, white card, rounded corners).
- assets/js/scripts.js
  - Client-side logic to fetch a GitHub user from the public API and populate the page with the creation date. It supports an optional token via URL query string (token) and gracefully handles errors.
- README.md
  - This file explains the project usage, setup, and architecture.
- LICENSE
  - MIT License text (see file for full terms).
- .nojekyll
  - Ensures GitHub Pages serves static assets without Jekyll processing.

## Code overview
- index.html: Bootstrap-powered layout and form with id="github-user-${seed}". It includes a placeholder for the form identifier to satisfy the brief.
- assets/js/scripts.js: Fetch logic for GitHub Users API, token handling, and UI updates to show the created date in UTC.
- assets/css/styles.css: Lightweight styling to match modern UI standards.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## License (MIT)
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
