import { useState, useEffect } from 'react'

function Settings() {
  const [theme, setTheme] = useState(() => {
    // Retrieve the saved theme from local storage or default to 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    const applyTheme = (selectedTheme) => {
      console.log('Applying theme:', selectedTheme); // Debugging
      if (selectedTheme === 'auto') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
      } else {
        document.body.setAttribute('data-theme', selectedTheme);
      }
    };
  
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('auto');
      mediaQuery.addEventListener('change', handleChange);
  
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">Appearance</h3>
        <div className="flex flex-col gap-2">
        <button
        onClick={() => setTheme('light')}
        className={`btn ${theme === 'light' ? 'bg-blue-500 text-white' : ''}`}
        >
        ☀️ Light Mode
        </button>
        <button
        onClick={() => setTheme('dark')}
        className={`btn ${theme === 'dark' ? 'bg-blue-500 text-white' : ''}`}
        >
        🌑 Dark Mode
        </button>
        <button
        onClick={() => setTheme('auto')}
        className={`btn ${theme === 'auto' ? 'bg-blue-500 text-white' : ''}`}
        >
        🖥 System Default
        </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Layout</h3>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  )
}

export default Settings