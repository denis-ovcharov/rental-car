import { Car } from '@/types/car';
import Image from 'next/image';
import BookingForm from '../BookingForm/BookingForm';
import {
  FiCalendar,
  FiTruck,
  FiDroplet,
  FiSettings,
  FiMapPin,
  FiCheckCircle,
} from 'react-icons/fi';

type CarDetailsProps = {
  car: Car;
};

export default function CarDetails({ car }: CarDetailsProps) {
  const [, city, country] = car.address.split(',').map((s) => s.trim());

  return (
    <div className="container py-[84px] flex flex-col gap-8">
      <div className="flex gap-8">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            width={640}
            height={512}
            loading="eager"
            className="rounded-[24px] object-cover"
            style={{ width: '640px', height: '512px' }}
          />
          <BookingForm />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Title */}
          <div>
            <div className="flex items-center gap-4">
              <h2 className="font-semibold text-2xl">
                {car.brand} {car.model}, {car.year}
              </h2>
              <span className="text-gray text-base leading-[125%]">
                Id: {car.id.split('-')[0]}
              </span>
            </div>
            <div className="flex gap-4 text-main text-sm mt-1">
              <span className="flex items-center gap-1">
                <FiMapPin className="text-main" /> {city}, {country}
              </span>
              <span>Mileage: {car.mileage.toLocaleString()} km</span>
            </div>
          </div>

          {/* Price */}
          <p className="text-button text-2xl font-semibold">
            ${car.rentalPrice}
          </p>

          {/* Description */}
          <p className="text-sm">{car.description}</p>

          {/* Rental Conditions */}
          <div>
            <h3 className="font-semibold text-xl mb-3">Rental Conditions:</h3>
            <ul className="flex flex-col gap-2">
              {car.rentalConditions.map((condition, i) => (
                <li key={i} className="flex items-center gap-2 text-base">
                  <FiCheckCircle className="text-main shrink-0" />
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          {/* Car Specifications */}
          <div>
            <h3 className="font-semibold text-xl mb-3">Car Specifications:</h3>
            <ul className="flex flex-col gap-2 text-base">
              <li className="flex items-center gap-2">
                <FiCalendar className="text-main" /> Year: {car.year}
              </li>
              <li className="flex items-center gap-2">
                <FiTruck className="text-main" /> Type: {car.type}
              </li>
              <li className="flex items-center gap-2">
                <FiDroplet className="text-main" /> Fuel Consumption:{' '}
                {car.fuelConsumption}
              </li>
              <li className="flex items-center gap-2">
                <FiSettings className="text-main" /> Engine Size:{' '}
                {car.engineSize}
              </li>
            </ul>
          </div>

          {/* Accessories and functionalities */}
          <div>
            <h3 className="font-semibold text-xl mb-3">
              Accessories and functionalities:
            </h3>
            <ul className="flex flex-col gap-2">
              {[...car.accessories, ...car.functionalities].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-base">
                  <FiCheckCircle className="text-main shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
