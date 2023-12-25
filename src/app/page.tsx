
let array:number[]=[1,2,3,4,5];

 export default  function page(){
  function Button2() {
    return (
      <button className="bg-green-500 p-4">
       Tailwind CSS button2.
      </button>
    )}
  return <main className="flex min-h-screen flex-col items-center p-24 gap-5">
  <h1 className="font-bold text-6xl text-red-500" >(SHOWING FROM PAGE.TSX FILE.)</h1> 
  <h2>THIS IS MAP FUNCTION</h2>
  {array.map((items,index) => {
  return items % 2 == 0 ? <div key={index}>this is even {items}</div> : <div>this is odd {items}</div>;
})}

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, dolorum est. Cupiditate reprehenderit hic consectetur nihil distinctio quisquam iste obcaecati <Button2/>quam velit corporis, laborum facere nesciunt. Obcaecati expedita ut quod! corrupti expedita sapiente commodi aspernatur quos, maiores facere quibusdam. Quo, dolorem rem.
   </p>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aperiam quae eaque aliquam totam </p>
  
  </main>}
