"use client";
export default function OnclickBUTTON() {
    const handleclick = () => {
        alert('I AM A BUTTON CLICK')
    };
    return (<div> <button className="bg-yellow-500" onClick={handleclick}>ONCLICK</button>
        
    {`on click web event react hooks button
    to make it client component always "use client" on the top of the file.`}
    </div>
    );
  }