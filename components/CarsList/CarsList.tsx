'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/api/clientApi';
import CarCard from '../CarCard/CarCard';
import { Car } from '@/types/car';
import { useSearchParams } from 'next/navigation';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

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
    if (isError)
      toast.error('No cars found for your request. Please try again later.');
  }, [isError]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="color-ring-loading"
          colors={['#5b85e1', '#5687a7', '#597390', '#463966', '#5a9cbd']}
        />
      </div>
    );

  return (
    <div className="container flex flex-col items-center gap-8">
      <ul className="flex flex-wrap gap-4 justify-center">
        {allCars.map((car: Car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="w-[156px] h-[44px] border border-button rounded-[12px] hover:border-button-hover mb-[24px] flex items-center justify-center"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? (
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="color-ring-loading"
              colors={['#5b85e1', '#5687a7', '#597390', '#463966', '#5a9cbd']}
            />
          ) : (
            'Load more'
          )}
        </button>
      )}
    </div>
  );
}
