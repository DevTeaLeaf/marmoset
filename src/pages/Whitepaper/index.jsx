export const Whitepaper = () => {
  return (
    <>
      <div className="max-w-[375px] md:max-w-[1440px] m-auto mb-[30px] md:mb-[175px]">
        <div className="w-[375px] md:w-auto  xl:px-[120px] lg:px-[30px] flex items-center justify-center flex-col">
          <iframe
            className="hidden md:block"
            src="https://drive.google.com/file/d/1xRRelMGLCRfL95D7ydGMGNqJqitCMsJG/preview"
            width="640"
            height="1740"
            allow="autoplay"
          ></iframe>
          <iframe
            className="block md:hidden"
            src="https://drive.google.com/file/d/14svGleJBYP5whwYRmeMYt1klCFKMZLOm/preview"
            width="375"
            height="1740"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </>
  );
};
