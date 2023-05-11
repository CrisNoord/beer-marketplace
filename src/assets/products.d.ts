
declare module 'src/assets/products.js' {
    const products: Product[];
    export default products;


    interface Sku {
        code: string,
        name: string
    }
    
    interface Product {
        id: number,
        brand: string,
        image: string,
        style: string,
        substyle: string,
        abv: string,
        origin: string,
        information: string,
        skus: Sku[]
    }
  }