import { Rating } from "./Rating.interface"

export interface Product {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: Rating
}