import CarsList from '@/components/CarsList/CarsList';
import SearchBox from '@/components/SearchBox/SearchBox';
import { Suspense } from 'react';

export default function CatalogPage() {
  return (
    <Suspense>
      <SearchBox />
      <CarsList />
    </Suspense>
  );
}
