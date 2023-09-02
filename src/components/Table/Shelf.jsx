export const Shelf = ({ number, color }) => {
  return (
    <>
      <div className="bg-[#000] border border-[#0EB78C]">
        <p
          className={
            color == "red"
              ? "xl:h-[58px] xl:w-[131.33px] w-[73px] h-[58px] text-[#B62424] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 flex items-center justify-center"
              : color == "green"
              ? "xl:h-[58px] xl:w-[131.33px] w-[73px] h-[58px] text-[#0EB78C] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 flex items-center justify-center"
              : "xl:h-[58px] xl:w-[131.33px] w-[73px] h-[58px] text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 flex items-center justify-center"
          }
        >
          {number}
        </p>
      </div>
    </>
  );
};
