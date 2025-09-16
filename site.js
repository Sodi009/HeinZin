
(function(){
  const root = document.documentElement;
  function setIcon() {
    const btn = document.getElementById('themeToggle');
    if(!btn) return;
    btn.textContent = root.classList.contains('dark') ? '🔆' : '🌙';
  }
  // load saved
  const saved = localStorage.getItem('theme');
  if(saved === 'dark'){ root.classList.add('dark'); }
  setIcon();
  // click
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if(!btn) return;
    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      setIcon();
    });
  });
})();
