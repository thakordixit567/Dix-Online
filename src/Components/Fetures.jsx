import React, { useEffect, useState } from "react";

const Fetures = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/product.json");
        if (!response.ok) {
          throw new Error("Failed To Fetch Products!");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  //console.log(product)

  return (
    <section className="bg-white py-8">
      <h2 className="text-3xl hover:underline decoration-red-300 font-semibold pl-6 pt-5 font-title">
        Some <span className=" text-indigo-300">Fetures</span> Of Video Calling  <span className=" text-indigo-400">Service</span> 
      </h2>
      <div className="container mx-auto flex items-center flex-wrap pt-4 ">
        {product.map((product) => (
          <div key={product.id} className=" w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col pb-5 items-center justify-between">
            <a href="#">
              <img src={product.image} className="max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="" />
            </a>
            <div className="pt-2 flex items-center justify-between ">
              <p className=" hover:text-red-500 pt-1 font-fortext font-semibold text-xl ">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fetures;
