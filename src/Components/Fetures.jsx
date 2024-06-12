import React, { useEffect, useState } from "react";

const Fetures = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
     const fetchProducts = async() => {
        try {
          const response = await fetch('/public/product.json');
          clg
        } catch (error) {
          console.log(error)
        }
     }
  }, []);

  return (
    <section className="bg-white py-8">
      <h2 className="text-2xl font-semibold pl-6 pt-5 font-fortext">
        Some Fetures Of Video Calling Service
      </h2>
    </section>
  );
};

export default Fetures;
