type BreedsType = {
  name: string;
  image: string;
};
type CategoryType = {
  image: string;
};
export interface DogsState {
  breedsName: string;
  allBreeds: BreedsType[];
  categoryImages: CategoryType[];
  spinnerLoading: boolean;
}
