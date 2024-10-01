import { Link } from "react-router-dom"

const products = [
    {
      id: 1,
      name: '7,500+ Luxury Mens Clothing',
      href: '#',
      price: '$48',
      imageSrc: 'https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=',
      imageAlt: 'Men clothes and vest.',
    },
    {
      id: 2,
      name: '57,300+ Womens Clothing Stock',
      href: '#',
      price: '$35',
      imageSrc: 'https://media.istockphoto.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=0&k=20&c=V1HcqglhOc76MHidrmyPjraiMNXwhAzO-wMHbEMMEqM=',
      imageAlt: 'Women clothes and vest.',
    },
    {
      id: 3,
      name: 'Kids Clothes Images',
      href: '#',
      price: '$89',
      imageSrc: 'https://t4.ftcdn.net/jpg/00/97/81/69/360_F_97816948_KnKa0XqSjvm36lIQqYSiiTih2oVoi2At.jpg',
      imageAlt: 'Kids clothes',
    },
    {
      id: 4,
      name: '59,731 Couple Beach Dress Royalty',
      href: '#',
      price: '$35',
      imageSrc: 'https://www.shutterstock.com/image-photo/beach-couple-walking-on-romantic-600nw-188237870.jpg',
      imageAlt: 'Couple clothes',
    },
    // 
    // More products...
  ]
  
  export default function Product() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-green-400">{product.name}</h3>
             
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  