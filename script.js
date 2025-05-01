
const legalTools = Array.from({ length: 50 }, (_, i) => ({ name: `LEGAL-TOOL-${i + 1}`, type: 'legal' }));
const ilegalTools = Array.from({ length: 50 }, (_, i) => ({ name: `ILEGAL-TOOL-${i + 1}`, type: 'ilegal' }));
const allTools = [...legalTools, ...ilegalTools];

function login() {
  const u = username.value.trim();
  const p = password.value;
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[u] && users[u] === p) {
    localStorage.setItem('loggedInUser', u);
    showMainPage();
  } else showMessage("Login gagal.");
}

function register() {
  const u = username.value.trim();
  const p = password.value;
  if (!u || !p) return showMessage("Isi semua kolom.");
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[u]) return showMessage("Username sudah dipakai.");
  users[u] = p;
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedInUser', u);
  showMainPage();
}

function showMainPage() {
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('mainPage').classList.remove('hidden');
  renderTools(allTools);
}

function logout() {
  localStorage.removeItem('loggedInUser');
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('loginPage').classList.remove('hidden');
}

function showMessage(msg) {
  document.getElementById('message').innerText = msg;
}

function renderTools(tools) {
  const container = document.getElementById('toolList');
  container.innerHTML = '';
  tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `<h3 class="font-bold">${tool.name}</h3><p>TYPE: ${tool.type.toUpperCase()}</p>`;
    container.appendChild(card);
  });
}

function filterTools(type) {
  renderTools(allTools.filter(t => t.type === type));
}

function showAll() {
  renderTools(allTools);
}

window.onload = () => {
  if (localStorage.getItem('loggedInUser')) showMainPage();
};
