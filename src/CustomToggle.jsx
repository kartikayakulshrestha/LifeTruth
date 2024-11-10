import React from 'react';

function CustomToggle({ toggle }) {
  return (
    <div
      className={`w-28 aspect-video rounded-xl ${toggle ? 'bg-green-400' : 'bg-red-400'} 
      border-4 border-[#121331] transform rotate-90 flex items-center justify-start`}
    >
      <div className="flex h-full w-full px-1 items-center gap-x-1">
        <div className="w-4 h-4 flex-shrink-0 rounded-full border-2 border-[#121331]"></div>

        <label
          htmlFor="switch"
          className={`${
            toggle ? 'scale-x-[-1]' : ''
          } w-full h-8 border-2 border-[#121331] rounded cursor-pointer`}
        >
          <div className="w-full h-full bg-[#f24c00] relative">
            <div className="w-0 h-0 z-20 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[14px] border-t-[#121331] relative">
              <div className="w-0 h-0 absolute border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#e44901] -top-4 -left-[12px]"></div>
            </div>
            <div className="w-[16px] h-6 z-10 absolute top-[5px] left-0 bg-[#f24c00] border-r-2 border-b-2 border-[#121331] transform skew-y-[39deg]"></div>
            <div className="w-[16px] h-6 z-10 absolute top-[5px] left-[16px] bg-[#c44002] border-r-2 border-l-2 border-b-2 border-[#121331] transform skew-y-[-39deg]"></div>
          </div>
        </label>

        <div className="w-4 h-1 flex-shrink-0 bg-[#121331] rounded-full"></div>
      </div>
    </div>
  );
}

export default CustomToggle;
