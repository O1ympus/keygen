export const Proverb = () => {
  return (
    <div
      className={`flex flex-col items-end text-white md:text-2xl w-fit
          mx-auto mb-[74px] sm:text-xl text-base`}
    >
      <div className="relative">
        <p className={`font-medium p-8 border border-1 border-custom-gray`}>
          With great power comes great electricity bill
        </p>
        <img
          src="../../../public/img/icons/quotes.svg"
          alt="quotes"
          className={`w-[25.5px] h-[20.7px] py-1 px-2 absolute
                  box-content -top-3 left-[11px] bg-background`}
        />
      </div>
      <div className="relative">
        <p className="p-4 border border-1 border-custom-gray border-t-0">
          - Dr. Who
        </p>
        <img
          src="../../../public/img/icons/quotes.svg"
          alt="quotes"
          className={`w-[25.5px] h-[20.7px] py-1 px-2 absolute
                  box-content -top-3 right-[15.5px] bg-background`}
        />
      </div>
    </div>
  );
};
