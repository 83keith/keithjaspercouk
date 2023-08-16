import { useTheme } from 'next-themes';
import { useState } from 'react';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full md:h-14 md:w-14"
    >
      <i className="dark:hidden">Dark</i>
      <i className="hidden dark:block">Light</i>
    </button>
  );
};

export default ThemeToggler;
