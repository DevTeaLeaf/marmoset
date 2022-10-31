import React from "react";
export const WinnerCol = ({ address, win }) => {
  return (
    <>
      <div className="flex shrink">
        <div className="bg-[#3B3C4E] border border-[#0EB78C] w-[400px] md:w-[600px]">
          <p className="text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 px-[20px] py-[17px]">
            {address}
          </p>
        </div>
        <div className="border border-[#0EB78C] w-[100px] md:w-[200px]">
          <p className="text-[#0EB78C] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 px-[20px] py-[17px]">
            {`$${win}`}
          </p>
        </div>
      </div>
    </>
  );
};
