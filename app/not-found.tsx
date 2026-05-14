import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-[84px] gap-4">
      <h2 className="text-4xl font-bold text-main">404</h2>
      <p className="text-gray text-lg">Page not found</p>
      <Link
        href="/"
        className="h-[44px] px-8 bg-button hover:bg-button-hover text-white rounded-[12px] flex items-center justify-center"
      >
        Home
      </Link>
    </div>
  );
}
