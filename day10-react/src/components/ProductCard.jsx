
import React, { useContext } from "react";
import { MyShop } from "../Context/MyShop";

const ProductCard = ({ product}) => {
  let {setCartItems} = useContext(MyShop);
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <div className="relative bg-gray-50 h-64 flex items-center justify-center p-6">

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-600 capitalize">
          {product.category}
        </span>

      </div>

      {/* Product Details */}
      <div className="p-5">

        <h2 className="text-sm font-bold text-gray-800 line-clamp-2 h-10">
          {product.title}
        </h2>

        <p className="text-xs text-gray-500 mt-3 line-clamp-2 h-8">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">

          <div>
            <p className="text-xl font-black text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-xs text-amber-500 mt-1">
              ★ {product.rating.rate}
              <span className="text-gray-400 ml-1">
                ({product.rating.count} reviews)
              </span>
            </p>
          </div>

        </div>

        <button
          onClick={() => setCartItems(prev => [...prev, product])}
          className="w-full mt-5 bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-indigo-600 transition duration-300"
        >
          + Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
