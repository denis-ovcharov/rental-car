import { getCarById } from '@/lib/api/serverApi';
import CarDetails from '@/components/CarDetails/CarDetails';
import { notFound } from 'next/navigation';

type CarPageProps = {
  params: Promise<{ carId: string }>;
};

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
