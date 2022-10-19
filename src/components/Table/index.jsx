import { Cols } from "./Cols";

export const Table = ({ data }) => {
  return (
    <>
      <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap md:overflow-x-auto md:overflow-y-auto md:whitespace-normal tables">
        <Cols data={data} />
      </div>
    </>
  );
};
