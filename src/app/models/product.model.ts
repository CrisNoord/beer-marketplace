export interface Sku {
    code: string,
    name: string
};

export interface SkuData {
    stock: number,
    price: number
}

export interface Product {
    id: number,
    brand: string,
    image: string,
    style: string,
    substyle: string,
    abv: string,
    origin: string,
    information: string,
    skus: Sku[],
    price?: string
}