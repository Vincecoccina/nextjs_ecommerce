import { Product } from '@prisma/client'
import ProductCard from './ProductCard'
import React from 'react'

type Props = {
    products : Product[]
}

export default function ProductList({products} : Props) {
  return (
    <div className="gap-2 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
