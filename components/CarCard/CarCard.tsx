import { Car } from '@/types/car';
import Image from 'next/image';
import Button from '../ui/Button/Button';

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const { city, country } = car.location;

  return (
    <li className="w-full md:w-69 bg-white rounded-3xl p-4 flex flex-col">
      <div className="relative w-full h-67 mb-4">
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

      <ul className="flex flex-wrap  gap-y-1 text-xs text-main flex-1 mb-3 items-center">
        <li className="border-r border-gray-light px-2">{city}</li>

        <li className="border-r border-gray-light px-2">{country}</li>

        <li className="border-r border-gray-light px-2">{car.rentalCompany}</li>

        <li className="border-r border-gray-light px-2">{car.type}</li>

        <li className="px-2">{car.mileage.toLocaleString()} km</li>
      </ul>

      <Button
        href={`/catalog/${car.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        Read more
      </Button>
    </li>
  );
}
