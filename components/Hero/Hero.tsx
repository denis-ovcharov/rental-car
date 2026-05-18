import Button from '../ui/Button/Button';

export default function Hero() {
  return (
    <div
      className="w-full h-100 md:h-137.5 lg:h-175 bg-cover bg-center flex flex-col items-center justify-end pb-10 md:pb-15"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
        height: 'calc(100vh - 68px)',
      }}
    >
      <div className="text-center text-white flex flex-col items-center gap-4 px-4 justify-center md:justify-end">
        <h1
          className="animate-fade-in-up font-bold text-[32px] md:text-[48px] lg:text-[60px] leading-[120%]"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Find your perfect rental car
        </h1>
        <h2
          className="animate-fade-in-up text-base md:text-lg lg:text-[24px]"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Button
          href="/catalog"
          className="animate-fade-in-up w-69"
          style={{ animationDelay: '1.2s', opacity: 0 }}
        >
          View Catalog
        </Button>
      </div>
    </div>
  );
}
