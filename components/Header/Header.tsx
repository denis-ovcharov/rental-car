'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full overflow-hidden bg-white">
      <div className="mx-auto flex h-17 w-full max-w-360 items-center justify-between px-5 py-6 md:px-8 2xl:px-30">
        <Link href={'/'}>
          <svg width="104" height="16" aria-hidden="true">
            <use href="/sprite.svg#logo" />
          </svg>
        </Link>
        <nav className="flex gap-4">
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
              pathname === '/catalog'
                ? 'text-button'
                : 'hover:text-button-hover'
            }
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
