import React from 'react';

function CustomToggle({ toggle }) {
  return (
    <div
      className={`w-40 aspect-video rounded-xl ${toggle ? 'bg-green-400' : 'bg-red-400'} border-4 border-[#121331]`}
    >
      <div className="flex h-full w-full px-2 items-center gap-x-2">
        <div className="w-6 h-6 flex-shrink-0 rounded-full border-4 border-[#121331]"></div>

        <label
          htmlFor="switch"
          className={`${
            toggle ? 'scale-x-[-1]' : ''
          } w-full h-10 border-4 border-[#121331] rounded cursor-pointer`}
        >
          <div className="w-full h-full bg-[#f24c00] relative">
            <div className="w-0 h-0 z-20 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[20px] border-t-[#121331] relative">
              <div className="w-0 h-0 absolute border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[15px] border-t-[#e44901] -top-5 -left-[18px]"></div>
            </div>
            <div className="w-[24px] h-9 z-10 absolute top-[9px] left-0 bg-[#f24c00] border-r-2 border-b-4 border-[#121331] transform skew-y-[39deg]"></div>
            <div className="w-[25px] h-9 z-10 absolute top-[9px] left-[24px] bg-[#c44002] border-r-4 border-l-2 border-b-4 border-[#121331] transform skew-y-[-39deg]"></div>
          </div>
        </label>

        <div className="w-6 h-1 flex-shrink-0 bg-[#121331] rounded-full"></div>
      </div>
    </div>
  );
}

export default CustomToggle;