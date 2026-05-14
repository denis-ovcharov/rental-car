'use client';

import { useQuery } from '@tanstack/react-query';
import { getBrands } from '@/lib/api/clientApi';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [brand, setBrand] = useState(searchParams.get('brand') || '');
  const [price, setPrice] = useState(searchParams.get('price') || '');
  const [from, setFrom] = useState(searchParams.get('from') || '');
  const [to, setTo] = useState(searchParams.get('to') || '');

  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  const prices = [30, 40, 50, 60, 70, 80];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (brand) params.set('brand', brand);
    if (price) params.set('price', price);
    if (from) params.set('from', from);
    if (to) params.set('to', to);

    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <div
      className="container"
      style={{ paddingBottom: '56px', paddingTop: '84px' }}
    >
      <div className="flex items-end justify-center gap-4 flex-wrap">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray">Car brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-[224px] h-[48px] bg-input rounded-[12px] px-4 outline-none"
          >
            <option value="">Choose a brand</option>
            {brands?.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray">Price / 1 hour</label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-[160px] h-[48px] bg-input rounded-[12px] px-4 outline-none"
          >
            <option value="">Choose a price</option>
            {prices.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray">Car mileage / km</label>
          <div className="flex">
            <input
              type="number"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-[100px] h-[48px] bg-input rounded-l-[12px] px-4 outline-none"
            />
            <input
              type="number"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-[100px] h-[48px] bg-input rounded-r-[12px] px-4 outline-none border-l border-gray-light"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="h-[48px] px-[51px] py-[12px] bg-[#3470ff] hover:bg-[#0b44cd] text-white rounded-[12px]"
        >
          Search
        </button>
      </div>
    </div>
  );
}
