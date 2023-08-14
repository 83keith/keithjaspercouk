'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggler from '@/components/header/themes-toggler';
import Menu from '@/components/header/menu';
import { menuData } from '@/data/menu';

const Header = () => {
  // Menu
  const [menuOpen, setMenuOpen] = useState(false);
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleToggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  const MenuList = [
    menuData.web,
    menuData.illustration,
    menuData.water,
    menuData.about,
  ];

  return (
    <header
      className={`top-0 z-40 w-full bg-body-color dark:bg-dark ${
        sticky
          ? '!fixed !z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition '
          : 'sticky'
      }`}
    >
      <div
        className="relative z-40 mx-auto max-w-screen-2xl flex items-center justify-between px-6 py-2"
      >
        <div className="flex gap-4 items-center">
          <button
            className="flex flex-col align-items-center justify-center w-[36px] h-[36px] border border-primary dark:border-primary-dark text-[8px] font-medium uppercase"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={handleToggleMenu}
            type="button"
          >
            {menuOpen ? ' Close' : 'Menu'}
          </button>
          <ThemeToggler />
        </div>
        <Link
          href="/"
          className="absolute left-2/4 -translate-x-2/4"
          onClick={handleCloseMenu}
        >
          Keith Jasper
        </Link>

        <div
          className="flex gap-4 border text-primary-light hover:text-red-700"
          onClick={handleCloseMenu}
        >
          {MenuList.map((item, index) => (
            <Link key={`nav-${index}`} href={item.url}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Menu open={menuOpen} handleCloseMenu={handleCloseMenu} />
    </header>
  );
};

export default Header;
