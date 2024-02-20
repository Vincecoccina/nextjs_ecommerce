import { Product } from '@prisma/client'
import { Card, CardHeader, CardFooter, CardContent } from './ui/card'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


type Props = {
    product : Product
}

export default function ProductCard({product} : Props) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="flex flex-col justify-between rounded-lg border h-[100%] bg-gray-300 dark:bg-black">
        <CardHeader>
          <div className="rounded-lg aspect-square relative overflow-hidden">
            <Image
              src={product.image || "/img/bg.jpg"}
              fill
              alt={product.title}
              className="rounded-lg aspect-square object-cover transition-all duration-700 hover:scale-110"
            />
          </div>
          <p className="font-semibold capitalize">{product.title}</p>
        </CardHeader>
        <CardFooter>
          <div className="flex gap-2">
           {product.price} €
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
