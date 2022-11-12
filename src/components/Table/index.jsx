import React from "react";
import Cols from "./Cols";

export const Table = ({ data }) => {
  return (
    <>
      <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap md:overflow-x-auto md:overflow-y-auto md:whitespace-normal tables">
        {data
          ? data.map((e) => {
              return <Cols data={e} key={e} />;
            })
          : ""}
      </div>
    </>
  );
};
