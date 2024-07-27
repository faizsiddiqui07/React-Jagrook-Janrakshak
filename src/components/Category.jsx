import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base_api_url } from '../config/config';

const Category = ({ titleStyle }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${base_api_url}/api/category/all`, {
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        const data = await res.json();
        setCategories(data.categories);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching categories: {error.message}</div>;
  }

  return (
    <div className="w-full flex items-center flex-col gap-y-[14px]">
      <div
        className={`text-xl font-bold ${titleStyle} relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3`}
      >
        Category
      </div>
      <div
        className={`flex flex-col justify-start items-start text-sm gap-y-3 ${titleStyle} pt-3`}
      >
        {categories.length > 0 ? (
          categories.map((item, i) => (
            <li className="list-none" key={i}>
              <Link to={`/news/category/${item.category}`} className="cursor-pointer">
                {item.category} ({item.count})
              </Link>
            </li>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
    </div>
  );
};

export default Category;
