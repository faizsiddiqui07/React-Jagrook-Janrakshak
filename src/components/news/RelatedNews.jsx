import React from 'react';
import Title from '../Title';
import SimpleDetailsNewCard from './items/SimpleDetailsNewCard';

const RelatedNews = ({ news = [], type }) => {
  return (
    <div className='w-full pb-8 mt-5'>
      <div className='flex flex-col w-full gap-y-4'>
        <Title title="Related News" />
        {news.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3'>
            {news.slice(0, 4).map((item) => (
              <SimpleDetailsNewCard
                key={item.id || item.slug} // Use a unique identifier if available
                news={item}
                type={type}
                item={item}
                height={230}
              />
            ))}
          </div>
        ) : (
          <p className='text-gray-500'>No related news available</p>
        )}
      </div>
    </div>
  );
};

export default RelatedNews;
