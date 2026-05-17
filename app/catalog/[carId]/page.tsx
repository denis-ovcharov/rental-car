import { getCarById } from '@/lib/api/serverApi';
import CarDetails from '@/components/CarDetails/CarDetails';
import { notFound } from 'next/navigation';

type CarPageProps = {
  params: Promise<{ carId: string }>;
};

export async function generateMetadata({ params }: CarPageProps) {
  const { carId } = await params;

  try {
    const car = await getCarById(carId);
    return {
      title: `${car.brand} ${car.model} ${car.year} — RentalCar`,
      description: car.description,
    };
  } catch {
    return {
      title: 'Car not found — RentalCar',
    };
  }
}

export default async function CarPage({ params }: CarPageProps) {
  const { carId } = await params;

  let car;
  try {
    car = await getCarById(carId);
  } catch {
    notFound();
  }

  return <CarDetails car={car!} />;
}
