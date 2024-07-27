import React from 'react'
import { Link } from "react-router-dom";

const SimpleNewsCard = ({ item, type }) => {
    if (!item) {
        // If item is not provided, return null or a placeholder component
        return null;
    }

    return (
        <div className='group relative'>
            <Link to={`/news/${item.slug}`}>
            <div className='overflow-hidden'>
                <div className={`${type ? 'h-[270px] sm:h-[470px]' : 'h-[228px]'} w-full group-hover:scale-[1.1] transition-all duration-[1s]`}>
                    <img className='w-full h-full'  src={item.image} alt='images' />
                </div>
            </div>
            <div className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' ></div>
            <div className='left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2'>
                <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>{item.category}</div>
                
                <div className='text-lg line-clamp-2'>{item.title}</div>
                <div className='flex gap-x-2 text-sm font-normal'>
                    <span>{item.date}</span>
                    <span>/ {item.writerName}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default SimpleNewsCard
