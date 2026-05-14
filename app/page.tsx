import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-end pb-[60px]"
      style={{ backgroundImage: "url('/home-bg.jpg')" }}
    >
      <div className="text-center text-white flex flex-col items-center gap-4">
        <h1 className="font-bold text-[60px] leading-[120%]">
          Find your perfect rental car
        </h1>
        <h2 className="text-lg text-[24px]">
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link
          href="/catalog"
          className="w-[276px] h-[44px] py-[12px] rounded-[12px] text-white text-center btn-primary bg-button"
        >
          View Catalog
        </Link>
      </div>
    </div>
  );
}
