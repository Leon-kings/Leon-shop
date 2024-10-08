
  
  export default function ThreeColOurTeams() {
    const data = [
      {
        content: (
          <>
          We Offer Delivery System Where We can Deliver Your Goods to Your Residence
          </>
        ),
        author: "Delivery System",
        title: "We delivery to your Adress",
        avatar:
          "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100",
      },
      {
        content: (
          <>
           We Provide Best Quality From Doubai And from Asian Clothes Market
          </>
        ),
        author: "Quality Products",
        title: "We Offer Better Quality ",
        avatar:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80",
      },
      {
        content: (
          <>
         We Provide Better Price For Better Products From Wherever World Market
          </>
        ),
        author: "Affordable Price",
        title: "We offer low priced products",
        avatar:
          "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80",
      },
    ];
  
    return (
      <>
    
        <div className="pb-5">
          <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
             WHY US?
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              We offer better Quality and better Products
            </h2>

          </div>
  
          <div className="container p-6 mx-auto mb-10 xl:px-0">
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">

              {data.map((item, index) => (
                <div
                  className={
                    index === 0 ? "lg:col-span-2 xl:col-auto" : ""
                  }
                  key={index}>


                    
                  <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                  <div className="flex items-center mt-8 space-x-3">
                      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                          alt={item.author}
                          src={item.avatar}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="text-lg font-medium">
                          {item.author}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <p className="text-2xl leading-normal">
                      {item.content}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
