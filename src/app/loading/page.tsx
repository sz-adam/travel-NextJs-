'use client'
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  const cardsData = Array.from({ length: 10 }, (_, index) => ({}));

  return (
    <div className=" text-gray-900 body-font grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cardsData.map((card, index) => (
        <div key={index} className="bg-gray-200 rounded-lg overflow-hidden w-auto border shadow-lg shadow-slate-600 animate-pulse hover:scale-105 duration-300">
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold bg-gray-400 h-6 w-2/3 mb-4"></h2>
            <p className="text-gray-600 mt-2 bg-gray-300 h-4"></p>
            <div className="mt-4 flex justify-between items-center text-center">
              <div className="bg-gray-400 h-8 w-16"></div>
              <div className="bg-gray-400 h-8 w-16"></div>
              <div className="text-sm text-gray-500 border px-3 py-1 rounded-full bg-gray-400 h-6 w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
