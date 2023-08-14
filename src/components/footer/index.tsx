import Link from 'next/link';

const Footer = () => {
  const today = new Date();

  return (
    <footer className="w-full px-6">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between  py-2 border-t">
        <Link href="/">
          Keith Jasper
        </Link>
        <p className="text-[10px] md:text-xs text-gray-400">
          COPYRIGHT © {today.getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
