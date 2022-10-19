import { Link } from "react-router-dom";
import arrow from "../../assets/img/arrow-back.png";
import { WinnerCol } from "../../components/WinnerCol";

export const Winners = () => {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <div className="bg-winners min-w-[100vw] min-h-[100vh]">
        <div className="bg-winners max-w-[994px] mx-auto text-[#fff] px-[105px] py-[22px]">
          <div className="flex jsutify-center items-center flex-col">
            <div className="flex jsutify-center items-center flex-col mb-[50px]">
              <Link
                className="flex items-center cursor-pointer absolute left-0 top-0"
                to="/lottery"
              >
                <img src={arrow} alt="backpage" className="mr-[-10px]" />
                <p className="evolventa-b">Lottery</p>
              </Link>
              <h1 className="md:evolventa-b evolventa-m md:text-[40px] text-[16px] mb-[22px]">
                Top 20 Winners
              </h1>
              <div className="bg-[#fff] w-full h-[1px] mb-[7px]"></div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            {arr.map((e) => {
              return <WinnerCol key={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
