import React, { useEffect, useState } from 'react'
import PostalCode from './Components/PostalCode'



const url = "https://api.postalpincode.in/pincode/"


  
  

const App = () => {
  const [pincode,setPinCode] = useState("");
  const [data, setData] = useState([]);

  const getData = async() => {
   try{
    const data = await fetch(url + pincode);
    const json = await data.json();
    setData(json)
   
   }catch(error){
    console.error("Error in fetching data", error)
   }
  }
  
  return (
    <div className="p-4">
    <div className="flex items-center space-x-2 mb-4 justify-center">
      <input
        value={pincode}
        placeholder="Enter your postal code"
        onChange={(e) => setPinCode(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full max-w-xs"
      />
      <button
        onClick={() => {
          getData()
          setPinCode("")
        }}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
    <div>
      {data[0] && (
        <h1 className="text-2xl font-semibold text-center mb-4 text-blue-700">
          {data[0].Message}
        </h1>
      )}
    </div>
    <PostalCode data={data} />
  </div>
);
};

export default App;