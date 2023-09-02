import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import { Shelf } from "./Shelf";

import star from "../../assets/img/star.png";
const Cols = ({ t, data }) => {
  let [lotteryTime, myWon, wonNumbers, myNumbers] = [...data];

  return (
    <>
      <div className="inline-block md:block">
        <div className="bg-[#0EB78C] flex items-center justify-between py-[9px] px-[13px] w-auto ">
          <h3 className="text-[#fff] poppins font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-6">
            {`${t("wednesday")}, ${lotteryTime[0]} ${t(lotteryTime[1])}, ${t(
              "moscow"
            )}`}
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
            <Shelf number={wonNumbers[0]} />
            <Shelf number={wonNumbers[1]} />
            <Shelf number={wonNumbers[2]} />
            <Shelf number={wonNumbers[3]} />
            <Shelf number={wonNumbers[4]} />
            <Shelf number={wonNumbers[5]} />
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
              number={myNumbers[0]}
              color={myNumbers[0] == wonNumbers[0] ? "green" : "red"}
            />
            <Shelf
              number={myNumbers[1]}
              color={myNumbers[1] == wonNumbers[1] ? "green" : "red"}
            />
            <Shelf
              number={myNumbers[2]}
              color={myNumbers[2] == wonNumbers[2] ? "green" : "red"}
            />
            <Shelf
              number={myNumbers[3]}
              color={myNumbers[3] == wonNumbers[3] ? "green" : "red"}
            />
            <Shelf
              number={myNumbers[4]}
              color={myNumbers[4] == wonNumbers[4] ? "green" : "red"}
            />
            <Shelf
              number={myNumbers[5]}
              color={myNumbers[5] == wonNumbers[5] ? "green" : "red"}
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
export default withNamespaces()(Cols);
