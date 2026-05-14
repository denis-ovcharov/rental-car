import { Car } from '@/types/car';
import Image from 'next/image';
import BookingForm from '../BookingForm/BookingForm';
import { FiSettings, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { BsFuelPump } from 'react-icons/bs';

type CarDetailsProps = {
  car: Car;
};

export default function CarDetails({ car }: CarDetailsProps) {
  const { city, country } = car.location;

  return (
    <div className="container py-[84px] flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px]">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            width={640}
            height={512}
            loading="eager"
            className="rounded-[24px] object-cover w-full lg:w-[640px] h-[300px] lg:h-[512px]"
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
                Id: {car.stockNumber}
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
          <p className="text-sm mb-[68px]">{car.description}</p>

          <div className="flex flex-col gap-12 flex-1">
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
              <h3 className="font-semibold text-xl mb-3">
                Car Specifications:
              </h3>
              <ul className="flex flex-col gap-2 text-base">
                <li className="flex items-center gap-2">
                  <BiCalendar className="text-main" /> Year: {car.year}
                </li>
                <li className="flex items-center gap-2">
                  <FaCar className="text-main" /> Type: {car.type}
                </li>
                <li className="flex items-center gap-2">
                  <BsFuelPump className="text-main" /> Fuel Consumption:{' '}
                  {car.fuelConsumption}
                </li>
                <li className="flex items-center gap-2">
                  <FiSettings className="text-main" /> Engine: {car.engine}
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-xl mb-3">
                Accessories and functionalities:
              </h3>
              <ul className="flex flex-col gap-2">
                {car.features.map((item, i) => (
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
    </div>
  );
}
