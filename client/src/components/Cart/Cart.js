import React from "react";
import { FEATURED_PRODUCTS_DATA } from "../../utils/Constants";
import { RxCross2 } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  return (
    <div className="cart font-primary relative h-full">
      <div className="container absolute top-[10px] right-0 shadow-2xl w-[500px] bg-gray-100 px-4 py-2">
        <h1 className="py-2 w-full border-b-2 border-gray-700">
          Products in your Cart
        </h1>
        <div className="items flex flex-col gap-y-1 pr-2 h-[400px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b">
          {FEATURED_PRODUCTS_DATA.map((item) => (
            <div
              className="item flex items-center justify-center mx-auto  gap-y-3 gap-x-2 py-1 shadow-md pr-2"
              key={item.id}
            >
              <div className="imgallery w-[120px] h-[120px]">
                <img
                  src={item.img2}
                  alt="img2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="details">
                <h1 className="font-medium">{item.title}</h1>
                <p className="text-md text-gray-700 font-light leading-5">
                  {item.description.substring(0, 50)}...
                </p>
                <div className="price">1 x ₹{item.newprice}</div>
              </div>
              <RxCross2 className="cursor-pointer text-red-500" />
            </div>
          ))}
        </div>
        <div className="totalPrice-allDelete flex justify-between py-4 ">
          <h1 className=" text-xl uppercase">Total: ₹10000</h1>
          <div className="del py-1 px-1 bg-red-500">
            <MdDeleteForever className="text-white text-2xl" />
          </div>
        </div>
        <div className="checkout bg-black text-white py-1">
          <h1 className=" text-center uppercase">Proceed to checkout</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// // import icons
// import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// // import CartContext
// import { CartContext } from "../contexts/CartContext";

// const CartItem = ({ item }) => {
//   const { removeFromCart, increasedAmount, decreasedAmount } =
//     useContext(CartContext);
//   // Destructure the item
//   const { id, title, image, price, amount } = item;
//   const convertedPrice = Math.round(price * 80);

//   return (
//     <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
//       <div className="w-full min-h-[120px] flex items-center gap-x-3 ">
//         {/* For image */}
//         <Link to={`/product/${id}`}>
//           <img className="max-w-[60px]" src={image} alt="productimage" />
//         </Link>
//         <div className="flex flex-col w-full">
//           {/* title and Remove icon */}
//           <div className="flex flex-row justify-between mb-2">
//             {/* title */}
//             <Link
//               to={`/product/${id}`}
//               className="text-xs uppercase font-medium max-w-[240px] text-primary hover:underline"
//             >
//               {title}
//             </Link>
//             {/* remove icon */}
//             <div
//               onClick={() => removeFromCart(id)}
//               className="text-xl cursor-pointer"
//             >
//               <IoMdClose className="text-gray-500 hover:text-red-500 transition " />
//             </div>
//           </div>
//           {/* qty, price, increse decrese  */}
//           <div className=" flex gap-x-2 h-[30px] text-sm">
//             {/* qty */}
//             <div className="flex flex-1 max-w-[100px] items-center h-full  border text-primary font-medium">
//               {/* minus Icon */}
//               <div
//                 onClick={() => decreasedAmount(id)}
//                 className="h-full flex flex-1 justify-center items-center cursor-pointer "
//               >
//                 <IoMdRemove />
//               </div>
//               {/* amount */}
//               <div className="h-full flex justify-center items-center px-2">
//                 {amount}
//               </div>
//               {/* add Icon */}
//               <div
//                 onClick={() => increasedAmount(id)}
//                 className="h-full flex flex-1 justify-center items-center cursor-pointer"
//               >
//                 <IoMdAdd />
//               </div>
//             </div>
//             {/* item Price */}
//             <div className="flex flex-1 items-center justify-around">
//               ₹{convertedPrice}
//             </div>
//             {/* Final Price */}
//             <div className="flex flex-1 items-center justify-center text-primary font-medium ">
//               ₹{convertedPrice * amount}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
