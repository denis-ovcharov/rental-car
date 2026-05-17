import { Car } from '@/types/car';
import Image from 'next/image';
import Link from 'next/link';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const { city, country } = car.location;

  return (
    <li className="w-full md:w-[276px] bg-white rounded-[24px] p-4 flex flex-col">
      <div className="relative w-full h-[268px] mb-4">
        <Image
          fill
          sizes="276px"
          loading="eager"
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="rounded-[14px] object-cover"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-base">
          {car.brand} <span className="text-button">{car.model}</span>
          {', '}
          {car.year}
        </h3>
        <p className="font-semibold text-base">${car.rentalPrice}</p>
      </div>

      <ul className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-main flex-1 mb-3">
        <li>{city}</li>
        <li>|</li>
        <li>{country}</li>
        <li>|</li>
        <li>{car.rentalCompany}</li>
        <li>|</li>
        <li>{car.type}</li>
        <li>|</li>
        <li>{car.mileage.toLocaleString()} km</li>
      </ul>

      <Link
        href={`/catalog/${car.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-[44px] bg-button hover:bg-button-hover text-white rounded-[12px] flex items-center justify-center"
      >
        Read more
      </Link>
    </li>
  );
}
