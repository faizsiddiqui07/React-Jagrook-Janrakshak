import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from 'react-icons/ai';
import axios from "axios";
import { base_api_url } from "../config/config";

const Footer = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axios.get(`${base_api_url}/api/latest`, {
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        setLatestNews(response.data.news);
      } catch (error) {
        setError('Failed to fetch latest news');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      {/* Footer Top Section */}
      <div className="bg-[#1e1919] text-white">
        <div className="px-4 md:px-8 py-10 grid lg:grid-cols-3 grid-cols-1 gap-12">
          {/* About Section */}
          <div className="w-full flex flex-col gap-y-4">
            <Link to="/">
              <h2 className="text-[#52b6ef] text-3xl md:text-4xl font-semibold">
                <span className="text-[#00a650]">जागरुक</span> जनरक्षक
              </h2>
            </Link>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, doloremque exercitationem! Praesentium enim vitae et mollitia? Aut placeat numquam sapiente consequuntur unde blanditiis commodi repellat iure itaque labore sed fuga eum aliquam reprehenderit, <br /><br /> repudiandae dolore consequatur eaque recusandae facere. Eum, fugit blanditiis. Consequuntur earum ad dolorum optio placeat, reprehenderit aut?
            </p>
          </div>
          
          {/* Categories Section */}
          <div className="w-full">
            <Category categories={[]} titleStyle="text-white" />
          </div>

          {/* Latest News Section */}
          <div className="w-full flex flex-col gap-y-4">
            <div className="text-xl font-bold text-white relative before:absolute before:w-1 before:bg-[#c80000] before:h-full before:-left-2 pl-4">
              Latest News
            </div>
            <div className="grid grid-cols-1 gap-y-4 pt-3">
              {loading ? (
                <p className="text-white">Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                latestNews.map((newsItem, i) => (
                  <Link key={i} to={`/news/${newsItem.slug}`} className="flex items-start space-x-2">
                    <div className="relative overflow-hidden w-24 h-20 group">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        src={newsItem.image}
                        alt={newsItem.title}
                      />
                      <div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"
                      ></div>
                    </div>
                    <div className="flex-grow pl-2">
                      <h2 className="text-sm font-semibold text-white hover:text-[#c80000]">
                        {newsItem.title}
                      </h2>
                      <div className="flex gap-x-2 text-xs font-normal text-white">
                        <span>{newsItem.date}</span>
                        <span>/ {newsItem.writerName}</span>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#262323] text-gray-400">
        <div className="px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex items-center space-x-2">
            <span>Copyright © {currentYear}</span>
            <Link to="/" className="text-gray-400">जागरुक जनरक्षक</Link>
          </div>
          <div className="flex gap-2">
            <a
              className="w-9 h-9 flex items-center justify-center bg-[#ffffff2b] text-white"
              href="https://www.facebook.com/"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center bg-[#ffffff2b] text-white"
              href="https://twitter.com/"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center bg-[#ffffff2b] text-white"
              href="https://www.youtube.com/"
              aria-label="YouTube"
            >
              <AiFillYoutube />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center bg-[#ffffff2b] text-white"
              href="https://wa.me/"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center bg-[#ffffff2b] text-white"
              href="https://www.instagram.com/"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
