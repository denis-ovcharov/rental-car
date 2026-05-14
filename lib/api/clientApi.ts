import { BrandsResponse } from '@/types/brands';
import { nextServer } from './api';
import { Car } from '@/types/car';

type CarsParams = {
  page?: number;
  brand?: string;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
};

export const getCars = async (
  params: CarsParams = {},
): Promise<{ cars: Car[]; totalPages: number }> => {
  const { page = 1, brand, price, minMileage, maxMileage } = params;
  const query = new URLSearchParams({ page: String(page) });
  if (brand) query.set('brand', brand);
  if (price) query.set('price', price);
  if (minMileage) query.set('minMileage', minMileage);
  if (maxMileage) query.set('maxMileage', maxMileage);

  const res = await nextServer.get(`/cars?${query.toString()}`);
  return res.data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const res = await nextServer.get(`/cars/${id}`);
  return res.data;
};

export const getBrands = async (): Promise<BrandsResponse> => {
  const res = await nextServer.get('/cars/filters');
  return res.data;
};
