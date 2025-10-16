(function() {
  // The form ID must match exactly as declared in index.html: 'github-user-${seed}'
  const formId = 'github-user-${seed}';
  const form = document.getElementById(formId);
  const resultEl = document.getElementById('github-result');
  const createdAtEl = document.getElementById('github-created-at');
  const usernameEl = document.getElementById('github-username');
  const errorAlert = document.getElementById('error-alert');
  const usernameInput = document.getElementById('username-input');

  // Token can be supplied via URL query parameter: ?token=YOUR_GITHUB_TOKEN
  const urlParams = new URLSearchParams(window.location.search);
  const tokenFromUrl = urlParams.get('token') || '';

  async function fetchUser(username, token) {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}`;
    const headers = token ? { 'Authorization': `token ${token}` } : {};
    const resp = await fetch(url, { headers });
    if (!resp.ok) {
      const errText = await resp.text();
      // Try to provide a user-friendly message when possible
      const message = errText?.trim() || `Request failed with status ${resp.status}`;
      throw new Error(message);
    }
    const user = await resp.json();
    const date = user.created_at ? user.created_at.substring(0, 10) : '';
    return { login: user.login, createdDate: date };
  }

  if (!form) {
    console.warn('GitHub user form not found: id mismatch.');
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = (usernameInput.value || '').trim();
    if (!username) {
      errorAlert.textContent = 'Please enter a GitHub username.';
      errorAlert.classList.remove('d-none');
      return;
    }
    errorAlert.classList.add('d-none');
    errorAlert.textContent = '';
    resultEl.style.display = 'none';

    try {
      const data = await fetchUser(username, tokenFromUrl);
      createdAtEl.textContent = `Account Created At: ${data.createdDate} UTC`;
      usernameEl.textContent = `Username: ${data.login ?? username}`;
      resultEl.style.display = '';
    } catch (err) {
      errorAlert.textContent = `Error: ${err.message}`;
      errorAlert.classList.remove('d-none');
      resultEl.style.display = 'none';
    }
  });
})();