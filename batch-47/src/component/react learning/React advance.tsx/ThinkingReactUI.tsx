// import React from 'react';

// export default function Filterproddata({products}:any) {
// // console.log("🚀 ~ file: Filterableproductdata.tsx:4 ~ Filterproddata ~ products:", products)

//   return (
//     <>
//      <form><input  className='border' type='text' placeholder="search any product" /></form>
//      <label><input type='checkbox'/> Only show products in stock</label>
//      <div>{products.map((product:any,index:number)=>{return (<div key={index}>{product.name} {product.price}</div>)})}</div>
//     </>
//   );
// }
import React from "react";
import RenderTable from "./RenderTable";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },

];
function ThinkingReactUI() {
  const fruits = data.filter((item) => item.category == "Fruits");
  const vegetables = data.filter((item) => item.category == "Vegetables");
  return (
    <div>
      ThinkingReactUI
      <div>
        <form><input  className='border' type='text' placeholder="search any product" /></form>
        <label><input type='checkbox'/> Only show products in stock</label>
        <RenderTable data={fruits} categoryName="Fruits" />
        <RenderTable data={vegetables} categoryName="Vegetables" />
        {/* <p className="font-bold">Fruits</p>
        {fruits.map((fruit, index) => (
          <div key={index} className="flex -gap-5">
            {fruit.name} {fruit.price}
          </div>
        ))}
        <p className="font-bold">Vegetables</p>
        {vegetables.map((fruit, index) => (
          <div key={index} className="flex -gap-5">
            {fruit.name} {fruit.price}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default ThinkingReactUI;