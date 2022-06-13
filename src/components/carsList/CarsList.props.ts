export interface Item{
    title: string,
    description: string,
    year: string,
    production: string,
    price: string,
    mileage: string,
    id?: number,
    preview: string,
    code: string,
}

export interface ListProps {
    items: Item[]
}
