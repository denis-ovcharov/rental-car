import { getCarById } from '@/lib/api/serverApi';
import CarDetails from '@/components/CarDetails/CarDetails';

type CarPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  const car = await getCarById(id);

  return <CarDetails car={car} />;
}
