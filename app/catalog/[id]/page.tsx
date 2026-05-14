import { getCarById } from '@/lib/api/serverApi';
import CarDetails from '@/components/CarDetails/CarDetails';
import { notFound } from 'next/navigation';

type CarPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;

  let car;
  try {
    car = await getCarById(id);
  } catch {
    notFound();
  }

  return <CarDetails car={car!} />;
}
