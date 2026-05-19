'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/api/clientApi';
import CarCard from '../CarCard/CarCard';
import { Car } from '@/types/car';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import CarsNotFound from '../CarsNotFound/CarsNotFound';
import Loader from '../ui/Loader/Loader';
import Button from '../ui/Button/Button';

export default function CarsList() {
  const searchParams = useSearchParams();

  const brand = searchParams.get('brand') || '';
  const price = searchParams.get('price') || '';
  const minMileage = searchParams.get('minMileage') || '';
  const maxMileage = searchParams.get('maxMileage') || '';

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', brand, price, minMileage, maxMileage],
    queryFn: ({ pageParam }) =>
      getCars({ page: pageParam, brand, price, minMileage, maxMileage }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.totalPages
        ? allPages.length + 1
        : undefined;
    },
    retry: false,
  });

  const allCars = data?.pages.flatMap((page) => page.cars) ?? [];

  useEffect(() => {
    if (!isLoading && !isError && allCars.length === 0) {
      toast.error('No cars found for your request');
    }
    if (isError) {
      toast.error('Something went wrong. Please try again later.');
    }
  }, [isError, isLoading, allCars.length]);

  if (!isLoading && allCars.length === 0) return <CarsNotFound />;

  if (isLoading) return <Loader />;

  return (
    <div className="container flex flex-col items-center gap-8">
      <ul className="flex flex-wrap gap-4 justify-center">
        {allCars.map((car: Car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {hasNextPage && (
        <Button
          onClick={() => {
            fetchNextPage();
            setTimeout(() => {
              window.scrollBy({ top: 500, behavior: 'smooth' });
            }, 500);
          }}
          variant="outline"
          className="w-39  mb-6 font-black text-3xl"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? <Loader height={44} width={44} /> : 'Load more'}
        </Button>
      )}
    </div>
  );
}
