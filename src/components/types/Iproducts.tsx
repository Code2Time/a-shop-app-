export interface Iproducts{
    id:    number
    name:    string
    description:    string
    price:    number
    image:    string
    images : string
    rating:    number
    brand:    string
    storage:    string
    resolution:    string
    games_included:    number
}

export interface Icategory {
    id: number;
    image: string;
    name: string;
  }

  export interface Idatapaginat{
    selected : number
  }