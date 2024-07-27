import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Category from "../../../components/Category";
import Search from "../../../components/Search";
import Title from "../../../components/Title";
import PopularNews from "../../../components/news/PopularNews";
import NewsCard from "../../../components/news/items/NewsCard";
import SimpleDetailsNewCard from "../../../components/news/items/SimpleDetailsNewCard";
import { base_api_url } from "../../../config/config";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryNews = () => {
  const params = useParams();
  const { category } = params;
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${base_api_url}/api/news/category/${category}`
        );
        const { news } = await res.json();
        setNews(news);

        const latestRes = await axios.get(`${base_api_url}/api/latest`, {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        setLatestNews(latestRes.data.news);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb one="category" two={category} />
        </div>
      </div>
      <div className="bg-slate-200 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {news.map((catNews, i) => (
                    <SimpleDetailsNewCard
                      key={i}
                      news={catNews}
                      type="details-news"
                      height={200}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">
                  <Search />
                  <div className="w-full flex flex-col gap-y-[14px] bg-white pt-4">
                    <div className="pl-4">
                      <Title title="Recent news" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-3">
                      {latestNews.map((item, i) => (
                        <NewsCard item={item} key={i} />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <Category titleStyle={"text-gray-700 font-bold"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <PopularNews type="Popular news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
