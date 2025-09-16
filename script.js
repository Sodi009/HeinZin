(function(){
  const root = document.documentElement;
  function setIcon(btns){
    const isDark = root.classList.contains('dark');
    btns.forEach(btn => btn.textContent = isDark ? '🔆' : '🌙');
  }
  function initTheme(){
    const saved = localStorage.getItem('theme');
    if(saved === 'dark'){ root.classList.add('dark'); }
    const buttons = Array.from(document.querySelectorAll('#themeToggle'));
    setIcon(buttons);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        root.classList.toggle('dark');
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
        setIcon(buttons);
      });
    });
  }
  window.addEventListener('DOMContentLoaded', initTheme);
})();
