import { api } from '@/app/api/api';
import { Car } from '@/types/car';

export const getCars = async (
  page: number = 1,
): Promise<{ cars: Car[]; totalPages: number }> => {
  const res = await api.get(`/cars?page=${page}`);
  return res.data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const res = await api.get(`/cars/${id}`);
  return res.data;
};

export const getBrands = async (): Promise<string[]> => {
  const res = await api.get('/brands');
  return res.data;
};
