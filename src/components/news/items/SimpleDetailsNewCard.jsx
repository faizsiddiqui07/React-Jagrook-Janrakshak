import React from 'react';
import { Link } from 'react-router-dom';
import { convert } from 'html-to-text';

const SimpleDetailsNewCard = ({ news, type, height }) => {
  return (
    <div className="bg-white shadow">
      <Link to={`/news/${news?.slug}`}>
        <div className="group relative overflow-hidden">
          <div
            style={{ height: `${height}px` }}
            className="w-full group-hover:scale-[1.1] transition-all duration-[1s]"
          >
            <img className="w-full h-full" src={news?.image} alt="images" />
          </div>
          <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
          <div className="left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2">
            <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
              {news.category}
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="text-[15px] font-semibold text-[#333333] hover:text-[#c80000]">
            {news?.title}
          </div>

          <div className="flex gap-x-2 text-xs font-normal text-slate-600">
            <span>{news?.date}</span>
            <span>/ {news?.writerName}</span>
          </div>
          {type === 'details-news' && (
            <p className="text-sm text-slate-600 pt-3">
              {convert(news?.description).slice(0, 200)}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SimpleDetailsNewCard;
