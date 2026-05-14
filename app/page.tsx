import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="w-full h-[400px] md:h-[550px] lg:h-[700px] bg-cover bg-center flex flex-col items-center justify-end pb-[40px] md:pb-[60px] h-screen"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
        height: 'calc(100vh - 68px)',
      }}
    >
      <div className="text-center text-white flex flex-col items-center gap-4 px-4 justify-center md:justify-end">
        <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[60px] leading-[120%]">
          Find your perfect rental car
        </h1>
        <h2 className="text-base md:text-lg lg:text-[24px]">
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link
          href="/catalog"
          className="w-[276px] h-[44px] rounded-[12px] text-white text-center btn-primary bg-button flex items-center justify-center"
        >
          View Catalog
        </Link>
      </div>
    </div>
  );
}
