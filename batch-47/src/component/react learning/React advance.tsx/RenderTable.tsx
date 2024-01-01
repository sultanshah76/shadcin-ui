// import React from 'react';
// import Filterproddata from './Filterableproductdata';
// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
// ];
// export default function Index() {
//   return (
//     <>
//     <div className='font-bold'>THINKING IN REACT</div>
//     <div><Filterproddata products={PRODUCTS}/></div>
    
    
//     </>
//   );
// }
import React from "react";

type dataType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
type RenderTableProps = {
  data: dataType[];
  categoryName: string;
};

function RenderTable({ data, categoryName }: RenderTableProps) {
  return (
    <div>
      <p className="font-bold">{categoryName}</p>
      {data.map((fruit, index) => (
        <li key={index}>
          {fruit.name} {fruit.price} {fruit.stocked}
        </li>))}
 </div>
  );
}

export default RenderTable;
