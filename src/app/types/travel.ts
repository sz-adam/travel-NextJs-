export type Travel ={
    id: number;
    category: string;
    city: string;
    location_name: string;
    description: string;
    rating: number;
    images: string[];
    reviews: Review[];
}

export type Review = {
    name: string;
    description: string;
    rating: number;
  };