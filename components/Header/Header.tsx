'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="container flex justify-between items-center h-[68px] py-[24px] overflow-hidden">
      <Link href={'/'}>
        <svg width="104" height="16" aria-hidden="true">
          <use href="/sprite.svg#logo" />
        </svg>
      </Link>
      <nav className="flex gap-4">
        {' '}
        <Link
          href={'/'}
          className={
            pathname === '/' ? 'text-button' : 'hover:text-button-hover'
          }
        >
          Home
        </Link>
        <Link
          href={'/catalog'}
          className={
            pathname === '/catalog' || pathname.startsWith('/catalog')
              ? 'text-button'
              : 'hover:text-button-hover'
          }
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}
