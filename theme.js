// Theme management script to ensure consistency across pages
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    // Theme functions
    const getCurrentTheme = () => localStorage.getItem('theme') || 'dark';
    
    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        body.setAttribute('data-theme', theme);
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
        
        // Apply theme styles
        if (theme === 'dark') {
            body.classList.add('dark');
            body.classList.remove('light');
            body.style.backgroundColor = '#121212';
            body.style.color = '#f5f5f5';
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
            body.style.backgroundColor = '#f5f5f5';
            body.style.color = '#333';
        }
    };
    
    // Initialize theme from localStorage (ensures consistency across pages)
    setTheme(getCurrentTheme());
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        
        // Add subtle animation to theme toggle
        themeToggle.classList.add('theme-toggle-animation');
        setTimeout(() => {
            themeToggle.classList.remove('theme-toggle-animation');
        }, 500);
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});
