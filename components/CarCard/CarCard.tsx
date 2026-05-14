import { Car } from '@/types/car';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const [city, country] = car.address
    .split(',')
    .slice(1)
    .map((s) => s.trim());

  return (
    <li className="w-[276px] bg-white rounded-[24px] p-4 flex flex-col gap-4">
      <div className="relative">
        <Image
          width={276}
          height={268}
          loading="eager"
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className="rounded-[14px] h-[268px] object-cover"
        />
        <button className="absolute top-3 right-3">
          <FaRegHeart color="white" />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base">
          {car.brand} <span className="text-button">{car.model}</span>
          {', '}
          {car.year}
        </h3>
        <p className="font-semibold text-base">${car.rentalPrice}</p>
      </div>

      <ul className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray text-12 flex-1">
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
        className="w-full h-[44px] bg-button hover:bg-button-hover text-white rounded-[12px] flex items-center justify-center"
      >
        Read more
      </Link>
    </li>
  );
}
