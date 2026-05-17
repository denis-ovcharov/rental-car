export type FiltersResponse = {
  brands: string[];
  price: {
    min: number;
    max: number;
  };
};
