import React from 'react';

const SubCategroy = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5">
        <div className="px-5 py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all">
          Item One
        </div>
        <div className="px-5 py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all">
          Item Two
        </div>
        <div className="px-5 py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all">
          Item Three
        </div>
        <div className="px-5 py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all">
          Item Four
        </div>
        <div className="px-5 py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all">
          Item Five
        </div>
        <div className="px-5 py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all">
          Item Six
        </div>
      </div>
      <div className="flex items-center justify-center border-l-2 border-textPrimary pl-5">
        <div className="w-10 h-10 flex items-center justify-center text-lg font-thin border border-brand/50 rounded-full cursor-pointer bg-brand/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            {' '}
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{' '}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SubCategroy;
