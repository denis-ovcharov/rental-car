'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/api/clientApi';
import CarCard from '../CarCard/CarCard';
import { Car } from '@/types/car';
import { useSearchParams } from 'next/navigation';
import { ColorRing } from 'react-loader-spinner';

export default function CarsList() {
  const searchParams = useSearchParams();

  const brand = searchParams.get('brand') || '';
  const price = searchParams.get('price') || '';
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cars', brand, price, from, to],
    queryFn: ({ pageParam }) =>
      getCars({ page: pageParam, brand, price, from, to }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.totalPages
        ? allPages.length + 1
        : undefined;
    },
  });

  const allCars = data?.pages.flatMap((page) => page.cars) ?? [];

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
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="container flex flex-col items-center gap-8">
      <ul className="flex flex-wrap gap-4">
        {allCars.map((car: Car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="w-[156px] h-[44px] border border-[#3470ff] text-[#3470ff] rounded-[12px] hover:bg-[#3470ff] hover:text-white mb-[24px]"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}
