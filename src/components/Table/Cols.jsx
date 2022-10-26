import star from "../../assets/img/star.png";
import { Shelf } from "./Shelf";
import { Link } from "react-router-dom";

export const Cols = ({ data, numbers }) => {
  const [lotteryNumber, myChoice, myWon] = [...data];
  console.log(numbers);
  numbers = numbers.map((e) => {
    return Number.isInteger(e) ? e : "";
  });

  return (
    <>
      <div className="inline-block md:block">
        <div className="bg-[#0EB78C] flex items-center justify-between py-[9px] px-[13px] w-auto ">
          <h3 className="text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6">
            Среда, 21 мая, 11:00 по Москве (07:00 GMT)
          </h3>
          <div className=" rounded-xl bg-[#3B3C4E]">
            <Link
              to="/winners"
              className="flex items-center py-[8px] px-[15px] cursor-pointer"
            >
              <img src={star} alt="start" />
              <p className="ml-[5px] text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6">
                Winners
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="bg-[#3B3C4E] border border-[#0EB78C] w-[273px]">
              <p className="text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 pl-[10px] py-[17px]">
                Drawn numbers
              </p>
            </div>
            <Shelf number={numbers[0]} />
            <Shelf number={numbers[1]} />
            <Shelf number={numbers[2]} />
            <Shelf number={numbers[3]} />
            <Shelf number={numbers[4]} />
            <Shelf number={numbers[5]} />
            <div className="border border-[#0EB78C]">
              <p className="text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 px-[49px] md:px-[47.5px] py-[17px]">
                Win:
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#3B3C4E] border border-[#0EB78C] w-[273px]">
              <p className="text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 pl-[10px] py-[17px]">
                My choice
              </p>
            </div>
            <Shelf
              number={myChoice[0]}
              color={myChoice[0] == numbers[0] ? "green" : "red"}
            />
            <Shelf
              number={myChoice[1]}
              color={myChoice[1] == numbers[1] ? "green" : "red"}
            />
            <Shelf
              number={myChoice[2]}
              color={myChoice[2] == numbers[2] ? "green" : "red"}
            />
            <Shelf
              number={myChoice[3]}
              color={myChoice[3] == numbers[3] ? "green" : "red"}
            />
            <Shelf
              number={myChoice[4]}
              color={myChoice[4] == numbers[4] ? "green" : "red"}
            />
            <Shelf
              number={myChoice[5]}
              color={myChoice[5] == numbers[5] ? "green" : "red"}
            />
            <div className="border border-[#0EB78C]">
              <p className="text-[#0EB78C] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6 px-[55px] py-[17px]">
                {"$" + myWon}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
