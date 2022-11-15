import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { subCategoryFilter } from '../../features/orderDeskFilter/orderDeskFilter';
import useGetSubCategory from '../../hooks/useGetSubCategory';
import SampleNextArrow from '../slick.js/SampleNextArrow';
import SamplePrevArrow from '../slick.js/SamplePrevArrow';
import { AddSubCategoryModal } from './AddSubCategoryModal';

const SubCategory = () => {
  const { subCategory: selectedSubCategory, category } = useSelector(
    (state) => state.orderDesk
  );

  const [opened, setOpened] = useState(false);
  const { subCategory, loading, error } = useGetSubCategory(category);

  const dispatch = useDispatch();

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  const handleClick = (e) => {
    dispatch(subCategoryFilter(e));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: subCategory.length > 5 ? 5 : subCategory.length,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: subCategory.length > 4 ? 4 : subCategory.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: subCategory.length > 3 ? 3 : subCategory.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: subCategory.length > 2 ? 2 : subCategory.length,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className={`overflow-hidden flex-1 w-full`}>
          {subCategory && subCategory.length > 0 ? (
            <div className="ml-6 mr-6">
              <Slider {...settings}>
                {subCategory.map((item, ind) => {
                  return (
                    <div
                      className={`px-5 text-center py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand hover:text-brand all ${
                        selectedSubCategory === item.subCategory
                          ? 'bg-brand text-background hover:text-background'
                          : ''
                      }`}
                      key={ind}
                      onClick={() => handleClick(item.subCategory)}
                    >
                      {item.subCategory}
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div>
              <h1
                className="text-2xl font-thin cursor-pointer"
                onClick={controlModal}
              >
                Add sub a sub category before start.
                <span className="text-textPrimary/50 ml-2">
                  (Pizza, coca-cola etc.)
                </span>
              </h1>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center pl-5">
          {/* add Main category */}
          <div
            className="w-10 h-10 flex items-center justify-center text-lg font-thin border border-brand/50 rounded-full cursor-pointer bg-brand/30"
            onClick={controlModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              {' '}
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{' '}
            </svg>
          </div>
        </div>
      </div>
      <AddSubCategoryModal open={opened} control={controlModal} />
    </>
  );
};

export default SubCategory;
