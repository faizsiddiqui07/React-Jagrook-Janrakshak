import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { base_api_url } from "../config/config";

const Header_Category = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCategoryMenuVisible, setIsCategoryMenuVisible] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${base_api_url}/api/category/all`);
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const toggleSearchVisibility = () => setIsSearchVisible(prev => !prev);
  const toggleCategoryMenuVisibility = () => setIsCategoryMenuVisible(prev => !prev);

  return (
    <div className="w-full">
      <div className="bg-red-600 w-full text-white uppercase font-semibold relative">
        <div className="px-8 flex justify-between items-center h-12">
          {/* Toggle Category Menu for Mobile */}
          <div
            onClick={toggleCategoryMenuVisibility}
            className={`text-3xl lg:hidden cursor-pointer flex items-center justify-center h-full w-12 ${isCategoryMenuVisible ? "bg-black/25" : ""}`}
          >
            <BsList />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-2">
            <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
            {categories.map((category, index) => (
              <NavLink
                key={index}
                to={`/news/category/${category.category}`}
                isActive={location.pathname === `/news/category/${category.category}`}
              >
                {category.category}
              </NavLink>
            ))}
          </div>

          {/* Search Toggle and Input */}
          <div className="relative h-full w-12">
            <div
              onClick={toggleSearchVisibility}
              className={`text-xl cursor-pointer flex items-center justify-center h-full w-full ${isSearchVisible ? "bg-black/25" : ""}`}
            >
              {isSearchVisible ? <IoClose /> : <AiOutlineSearch />}
            </div>
            {isSearchVisible && (
              <div className="absolute top-12 right-0 z-20 w-full lg:w-72 bg-white shadow-lg">
                <div className="flex p-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow p-2 border border-gray-300 bg-gray-100 outline-none"
                  />
                  <div className="w-12 flex items-center justify-center bg-red-600 text-white text-xl cursor-pointer">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isCategoryMenuVisible && (
        <div className="lg:hidden flex flex-wrap py-2 px-8 bg-gray-100">
          <NavLink to="/" isActive={location.pathname === "/"}>Homes</NavLink>
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={`/news/category/${category.category}`}
              isActive={location.pathname === `/news/category/${category.category}`}
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

// Reusable NavLink component for active link styling
const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`px-4 py-3 font-medium ${isActive ? "bg-black/25" : ""} hover:bg-black/10`}
  >
    {children}
  </Link>
);

export default Header_Category;
