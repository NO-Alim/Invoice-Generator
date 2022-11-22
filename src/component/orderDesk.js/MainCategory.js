import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { categoryFilter } from '../../features/orderDeskFilter/orderDeskFilter';
import useGetCategory from '../../hooks/useGetCategory';
import SampleNextArrow from '../slick.js/SampleNextArrow';
import SamplePrevArrow from '../slick.js/SamplePrevArrow';

const MainCategory = () => {
  const { category: selectedCategory } = useSelector(
    (state) => state.orderDesk
  );
  const { category, loading } = useGetCategory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(categoryFilter(e));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: category.length > 5 ? 5 : category.length,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: category.length > 4 ? 4 : category.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: category.length > 3 ? 3 : category.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: category.length > 2 ? 2 : category.length,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1 w-full overflow-hidden">
          {category && category.length > 0 ? (
            <div className="ml-6 mr-6">
              <Slider {...settings}>
                {category.map((item, ind) => {
                  return (
                    <div
                      className={`px-5 text-center py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all ${
                        selectedCategory === item.category
                          ? 'bg-brand text-background hover:text-background'
                          : ''
                      }`}
                      key={item.id}
                      onClick={() => handleClick(item.category)}
                    >
                      {item.category}
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-thin cursor-pointer">
                Add category before start.
                <span className="text-textPrimary/50 ml-2">
                  (Food, Breakfast etc.)
                </span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainCategory;
