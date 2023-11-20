import React from 'react'

const FollowerCount = ({count, heading}) => {
  return (
    <div className="flex flex-col gap-1 items-center text-gray-400">
      <p className="border-2 border-gray-400 rounded-lg text-center py-1 px-4 md:text-lg text-md font-extrabold">
        {count}
      </p>
      <p className="text-sm">{heading}</p>
    </div>
  );
}

export default FollowerCount;
