import { CarProps } from "@/types";
export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '5f4703df13msh0af33aba10ae733p1f0c22jsn4a008900ba7f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
	}
    const response = await fetch 
     ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m3',{
        headers:headers,
    });
    const result = await  response.json();
    return result ;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer',  'hrjavascript-mastery' || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 