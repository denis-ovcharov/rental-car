'use client';

import { useQuery } from '@tanstack/react-query';
import { getBrands } from '@/lib/api/clientApi';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CustomSelect from '../ui/CustomSelect/CustomSelect';

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [brand, setBrand] = useState(searchParams.get('brand') || '');
  const [price, setPrice] = useState(searchParams.get('price') || '');
  const [minMileage, setMinMileage] = useState(
    searchParams.get('minMileage') || '',
  );
  const [maxMileage, setMaxMileage] = useState(
    searchParams.get('maxMileage') || '',
  );

  const { data } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  const prices = data?.price
    ? Array.from(
        { length: (data.price.max - data.price.min) / 10 + 1 },
        (_, i) => data.price.min + i * 10,
      )
    : [];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (brand) params.set('brand', brand);
    if (price) params.set('price', price);
    if (minMileage) params.set('minMileage', minMileage);
    if (maxMileage) params.set('maxMileage', maxMileage);

    router.push(`/catalog?${params.toString()}`);
  };

  const handleClear = () => {
    setBrand('');
    setPrice('');
    setMinMileage('');
    setMaxMileage('');
    router.push('/catalog');
  };

  const brandOptions = data?.brands?.map((b) => ({ value: b, label: b })) ?? [];
  const priceOptions = prices.map((p) => ({
    value: String(p),
    label: String(p),
  }));

  return (
    <div className="container pt-[40px] pb-[32px] md:pt-[84px] md:pb-[56px]">
      <div className="flex items-end justify-center gap-4 flex-wrap">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray">Car brand</label>
          <CustomSelect
            instanceId="brand-select"
            options={brandOptions}
            value={brand ? { value: brand, label: brand } : null}
            onChange={(option) => setBrand(option?.value || '')}
            placeholder="Choose a brand"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray">Price / 1 hour</label>
          <CustomSelect
            instanceId="price-select"
            options={priceOptions}
            value={price ? { value: price, label: price } : null}
            onChange={(option) => setPrice(option?.value || '')}
            placeholder="Choose a price"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray">Car mileage / km</label>
          <div className="flex">
            <input
              type="number"
              placeholder="From"
              value={minMileage}
              onChange={(e) => setMinMileage(e.target.value)}
              className="w-[100px] h-[48px] bg-input rounded-l-[12px] px-4 outline-none"
            />
            <input
              type="number"
              placeholder="To"
              value={maxMileage}
              onChange={(e) => setMaxMileage(e.target.value)}
              className="w-[100px] h-[48px] bg-input rounded-r-[12px] px-4 outline-none border-l border-gray-light"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={handleSearch}
            className="h-[48px] px-[51px] py-[12px] bg-button hover:bg-button-hover text-white rounded-[12px]"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="text-sm text-gray hover:text-button"
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
}
