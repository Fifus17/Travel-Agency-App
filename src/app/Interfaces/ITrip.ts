import { Review } from './IReview';

export interface Trip {
    id: number;
    title: string;
    country: string;
    description: string;
    price: number;
    image: string;
    outDate: string;
    inDate: string;
    places: number;
    reviews: Review[];
}