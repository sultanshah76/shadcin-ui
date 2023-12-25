const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  export default  function Rendringlists()
  {return <div>
   {products.map((product,index)=>
    (<li key={index}>{product.title}</li>)
    )}
    </div>};