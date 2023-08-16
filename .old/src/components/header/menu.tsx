import Link from 'next/link';
import { menuData } from '@/data/menu';


type MenuProps = {
  open: boolean;
  handleCloseMenu: (...args: any[]) => any;
};

const Menu = ({ open, handleCloseMenu }: MenuProps) => {
  const MenuCol1 = [
    menuData.web,
    menuData.motion,
    menuData.illustration,
    menuData.photograph,
  ];

  return (
    <div
      onClick={handleCloseMenu}
      className={`fixed top-0 left-0 flex w-1/4 h-screen bg-primary dark:bg-primary-dark transition-transform py-32 transition-opacity  ${
        open ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0'
      }`}
    >
      <nav className="mx-auto w-full max-w-screen-2xl px-6">
        <ul className="flex flex-col border-t border-coolgray-600">
          {MenuCol1.map((item, index) => (
            <Link key={`menu1-${index}`} href={item.url}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
