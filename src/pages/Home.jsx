import React, { useEffect, useState } from 'react';
import HeadLines from '../components/HeadLines';
import Title from '../components/Title';
import DetailsNews from '../components/news/DetailsNews';
import DetailsNewsCol from '../components/news/DetailsNewsCol';
import DetailsNewsRow from '../components/news/DetailsNewsRow';
import LatestNews from '../components/news/LatestNews';
import PopularNews from '../components/news/PopularNews';
import SimpleNewsCard from '../components/news/items/SimpleNewsCard';
import NewsCard from '../components/news/items/NewsCard';
import Footer from '../components/Footer';
import { base_api_url } from '../config/config';
import axios from 'axios';

const Home = () => {
  const [news, setNews] = useState({});

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${base_api_url}/api/all/news`);
      setNews(response.data.news);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <main>
        <HeadLines news={news} />
        <div className="bg-slate-100">
          <div className="px-4 md:px-8">
            <div className="flex flex-wrap py-8">
              <div className="w-full lg:w-6/12">
                {news && <LatestNews />}
              </div>
              <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                  <Title title="International" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    {news['International']?.slice(0, 4).map((item, i) => (
                      <SimpleNewsCard item={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* First Section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  {news['Sports'] && (
                    <DetailsNewsRow
                      news={news['Sports']}
                      category="Sports"
                      type="details-news"
                    />
                  )}
                  {news['Health'] && (
                    <DetailsNews
                      news={news['International']}
                      category="International"
                    />
                  )}
                </div>
                <div className="w-full lg:w-4/12">
                  {news['Education'] && (
                    <DetailsNewsCol
                      news={news['Education']}
                      category="Education"
                    />
                  )}
                </div>
              </div>
            </div>
            <PopularNews type="Popular news" />
            {/* 2nd Section */}
            <div className="w-full">
              <div className="flex flex-wrap pt-8">
                <div className="w-full lg:w-4/12">
                  <div className="pr-2">
                    {news['Politics'] && (
                      <DetailsNewsCol
                        news={news['Politics']}
                        category="Politics"
                        type="details-news"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-8/12">
                  <div className="pl-2">
                    {news['Travel'] && (
                      <DetailsNewsRow
                        news={news['Travel']}
                        category="Travel"
                        type="details-news"
                      />
                    )}
                    {news['Education'] && (
                      <DetailsNews
                        news={news['Education']}
                        category="Education"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd Section */}
            <div className="w-full">
              <div className="flex flex-wrap py-8">
                <div className="w-full lg:w-8/12">
                  <div>
                    {news['Technology'] && (
                      <DetailsNewsRow
                        news={news['Technology']}
                        category="Technology"
                        type="details-news"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-4/12">
                  <div className="pl-2">
                    <Title title="Recent news" />
                    <div className="grid grid-cols-1 gap-y-[14px] mt-4">
                      {news['International']?.map((item, i) =>
                        i < 3 ? <NewsCard item={item} key={i} /> : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer news={news} /> */}
    </div>
  );
};

export default Home;
