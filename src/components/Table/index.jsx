import React from "react";
import Cols from "./Cols";

export const Table = ({ data, numbers }) => {
  return (
    <>
      <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap md:overflow-x-auto md:overflow-y-auto md:whitespace-normal tables">
        <Cols data={data} numbers={numbers} />
      </div>
    </>
  );
};
