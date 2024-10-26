import React from 'react';

const PostalCode = ({ data }) => {
  return (
    <div className="p-4 grid grid-cols-2 gap-2">
      
      

      {/* Map over and display each post office entry */}
      {data[0] && data[0].PostOffice.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 rounded-lg shadow-md mb-4 bg-white"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Name: <span className="font-normal">{item.Name}</span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-800">
            Branch Type: <span className="font-normal">{item.BranchType}</span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-800">
            Delivery Status: <span className="font-normal">{item.DeliveryStatus}</span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-800">
            District: <span className="font-normal">{item.District}</span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-800">
            Division: <span className="font-normal">{item.Division}</span>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PostalCode;
