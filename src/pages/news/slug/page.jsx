import React, { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Category from "../../../components/Category";
import Footer from "../../../components/Footer";
import Search from "../../../components/Search";
import Title from "../../../components/Title";
import NewsCard from "../../../components/news/items/NewsCard";
import htmlParser from "html-react-parser";
import { base_api_url } from "../../../config/config";
import RelatedNews from "../../../components/news/RelatedNews";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [latestNews, setLatestNews] = useState([]);
  const [relateNews, setRelateNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch news details
        const newsRes = await fetch(`${base_api_url}/api/news/details/${slug}`, {
          next: {
            revalidate: 1,
          },
        });
        const { news, relateNews } = await newsRes.json();
        setNews(news);
        setRelateNews(relateNews);

        // Fetch latest news
        const latestRes = await axios.get(`${base_api_url}/api/latest`, {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        setLatestNews(latestRes.data.news);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb one={news?.category} two={news?.title} />
        </div>
      </div>
      <div className="bg-slate-200 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="flex flex-col gap-y-5 bg-white">
                  <img
                    src={news?.image}
                    className="w-full h-[500px]"
                    alt={news?.title || "News Image"}
                  />
                  <div className="flex flex-col gap-y-4 px-6 pb-6">
                    <h3 className="text-red-700 uppercase font-medium text-xl">
                      {news?.category}
                    </h3>
                    <h2 className="text-3xl text-gray-700 font-bold">
                      {news?.title}
                    </h2>
                    <div className="flex gap-x-2 text-xs font-normal text-slate-600">
                      <span>{news?.date}</span>
                      <span>/ {news?.writerName}</span>
                    </div>
                    <p>{htmlParser(news?.description)}</p>
                  </div>
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
            <RelatedNews news={relateNews} type="Related news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
