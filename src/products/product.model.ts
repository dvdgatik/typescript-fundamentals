

//Scope implicito
export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export type Product = {
  name: string,
  createdAte: Date,
  stock: number,
  sizes?: Sizes
  }
