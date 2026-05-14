import Link from 'next/link';

export default function Header() {
  return (
    <header className="container flex justify-between items-center h-[68px] px-[120px] py-[24px] ">
      <Link href={'/'}>
        <svg width="104" height="16" aria-hidden="true">
          <use href="/logo.svg" />
        </svg>
      </Link>
      <nav className="flex gap-4">
        {' '}
        <Link href={'/'} className="hover:text-button-hover">
          Home
        </Link>
        <Link href={'/catalog'} className="hover:text-button-hover">
          Catalog
        </Link>
      </nav>
    </header>
  );
}
