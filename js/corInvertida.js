document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Verifica se o usuário já tinha salvo uma preferência no navegador
  const currentTheme = localStorage.getItem('portfolio-theme');

  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      const isLightMode = document.body.classList.contains('light-mode');

      // Atualiza o ícone (Sol para tema claro, Lua para tema escuro)
      if (themeIcon) {
        if (isLightMode) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }

      // Salva a escolha do usuário
      localStorage.setItem('portfolio-theme', isLightMode ? 'light' : 'dark');
    });
  }
});