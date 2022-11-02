import React, { useState } from "react";

export const Input = ({ innerRef, validate }) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
    setInput(event.target.value);
    validate();
  };

  return (
    <>
      <input
        type="number"
        min="0"
        max="9"
        ref={innerRef}
        onInput={handleInput}
        maxLength="1"
        className="bg-[#3B3C4E]  text-[#fff] evolventa-b text-[20px] md:text-[64px] leading-[133%] py-[14.2px] px-[19px] md:py-[30px] md:px-[45px] rounded-[8px] md:rounded-[20px] md:max-w-[125px] max-w-[49px] outline-none"
      />
    </>
  );
};
