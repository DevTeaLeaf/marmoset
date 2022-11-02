import React from "react";
export const InputCell = ({ number, turn, info }) => {
  let color = info ? (Number(number) === info[turn] ? "green" : "red") : "";
  return (
    <>
      <div className="bg-[#3B3C4E] rounded-[8px] md:rounded-[20px] md:max-w-[125px] max-w-[49px]">
        {number ? (
          <div
            className={`${
              color === "red"
                ? "text-[#B62424]"
                : color === "green"
                ? "text-[#0EB78C]"
                : "text-[#fff]"
            } evolventa-b text-[20px] md:text-[64px] leading-[133%] py-[14.2px] px-[19px] md:py-[30px] md:px-[45px]`}
          >
            {number}
          </div>
        ) : (
          <div className="w-[49px] h-[55px] md:w-[125px] md:h-[145.1px]"></div>
        )}
      </div>
    </>
  );
};
