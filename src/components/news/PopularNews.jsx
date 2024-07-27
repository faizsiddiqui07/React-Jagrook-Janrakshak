import React, { useEffect, useState } from 'react';
import Title from '../Title';
import SimpleDetailsNewCard from './items/SimpleDetailsNewCard';
import { base_api_url } from '../../config/config';

const PopularNews = ({ type }) => {
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    const fetchPopularNews = async () => {
      try {
        const response = await fetch(`${base_api_url}/api/latest`);
        const data = await response.json();
        setPopularNews(data.news);
      } catch (error) {
        console.error('Error fetching popular news:', error);
      }
    };

    fetchPopularNews();
  }, []);

  if (popularNews.length === 0) {
    return (
      <div className='w-full pt-8'>
        <Title title="Popular News" />
        <p className='text-gray-500'>No popular news available</p>
      </div>
    );
  }

  return (
    <div className='w-full pt-8'>
      <div className='flex flex-col w-full gap-y-4'>
        <Title title="Popular News" />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
          {popularNews.slice(0, 4).map((item) => (
            <SimpleDetailsNewCard
              key={item.id || item.slug}
              news={item}
              type={type}
              item={item}
              height={230}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
