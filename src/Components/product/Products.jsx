import {
  Card,
  CardBody,
  
} from "@material-tailwind/react";


export function ProductListCard({
  img,
  name,
  price,
}) {
  return (
    <Card shadow={false} className="border border-gray-300">
      <CardBody className="pb-0">
        <img src={img} alt={img} className="min-w-[200px] w-full" />
        <div className="flex justify-between">
          <div>
            <p className="mb-2 text-blue-400" color="blue-gray" >
              {name}
            </p>
            <div className="mb-5 flex items-center gap-2">
             <button className="button text-white">View All</button>
            </div>
          </div>
          <b className="font-bold">
          <p className="text-gray-600">
            {price}
          </p>
          </b>
        </div>
      </CardBody>
    </Card>
  );
}

const CONTENTS = [
  {
    img: "https://www.material-tailwind.com/image/product-4.png",
    name: "Linen Suit",
    price: "$2,500"
  },
  {
    img: "https://www.material-tailwind.com/image/product-3.png",
    name: "Tweed Suit",
    price: "$2,300"
  },
  {
    img: "https://www.material-tailwind.com/image/product-5.png",
    name: "Premium Suit",
    price: "$1,240"
  },
  {
    img: "https://www.material-tailwind.com/image/product-4.png",
    name: "Linen Suit",
    price: "$2,500"
  },
  {
    img: "https://www.material-tailwind.com/image/product-3.png",
    name: "Tweed Suit",
    price: "$2,300"
  },
  {
    img: "https://www.material-tailwind.com/image/product-5.png",
    name: "Premium Suit",
    price: "$1,240"
  },
  {
    img: "https://www.material-tailwind.com/image/product-4.png",
    name: "Linen Suit",
    price: "$2,500"
  },
  {
    img: "https://www.material-tailwind.com/image/product-3.png",
    name: "Tweed Suit",
    price: "$2,300"
  },
  {
    img: "https://www.material-tailwind.com/image/product-5.png",
    name: "Premium Suit",
    price: "$1,240"
  },
];

export function ProductListSection4() {
  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">
      <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
        <h2 className="text text-blue-700 text-3xl text">
          LD Product List
        </h2>
        <p  className="my-4 text-2xl">
          Find What You Need
        </p>
        
        <p className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Simplify your shopping experience with our intuitive filter system.
          Whether you&apos;re looking for specific features, price ranges, or
          brands.
        </p>
      </div>
      </div>
      {/* <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800"> */}
      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {CONTENTS.map(({ img, name, price }, index) => (
            <ProductListCard
              key={index}
              img={img}
              name={name}
              price={price}
            />
          ))}
        </div>
      </div>
   
    </section>
  );
}

export default ProductListSection4;