import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { subCategoryFilter } from '../../features/orderDeskFilter/orderDeskFilter';
import useGetSubCategory from '../../hooks/useGetSubCategory';
import SampleNextArrow from '../slick.js/SampleNextArrow';
import SamplePrevArrow from '../slick.js/SamplePrevArrow';
import LoaderSpin from '../ui/LoaderSpin';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: '1px solid #75efff',
    borderRadius: '5px',
    overflow: 'hidden',
    backgroundColor: '#101c31',
    color: 'white',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
    backgroundColor: '#75efff',
    color: '#101c31',
  },
  details: {
    backgroundColor: '#101c31',
  },
}));

const SubCategory = () => {
  const { subCategory: selectedSubCategory, category } = useSelector(
    (state) => state.orderDesk
  );
  const { subCategory, loading, error } = useGetSubCategory(category);

  const classes = useStyles();

  const dispatch = useDispatch();
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

  let content;
  if (loading) content = <LoaderSpin />;
  if (!loading && error) {
    content = (
      <h1 className="x text-red-600 text-xl text-center">{error.message}</h1>
    );
  }

  if (!loading && !error && subCategory?.length === 0) {
    content = (
      <div className="px-5">
        <Link to="/dashboard" className="text-2xl font-thin cursor-pointer">
          Add sub category before start.
          <span className="text-textPrimary/50 ml-2">
            (Pizza, coca-cola etc.)
          </span>
        </Link>
      </div>
    );
  }

  if (!loading && !error && subCategory?.length > 0) {
    content = (
      <div className="ml-6 mr-6">
        {/* <Slider {...settings}>
          {subCategory.map((item, ind) => {
            return (
              <div
                className={`px-5 text-center py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand all ${
                  selectedSubCategory === item.subCategory
                    ? 'bg-brand text-background hover:text-background'
                    : ''
                }`}
                key={item.id}
                onClick={() => handleClick(item.subCategory)}
              >
                {item.subCategory}
              </div>
            );
          })}
        </Slider> */}
        <Accordion className={classes.root}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.summary}
          >
            <Typography className={classes.heading}>
              <h1 className="text-xl">Subcategory</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <div className="flex gap-5 flex-wrap py-3">
              {subCategory.map((item, ind) => {
                return (
                  <div
                    className={`px-5 text-center py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand all ${
                      selectedSubCategory === item.subCategory
                        ? 'bg-brand text-background hover:text-background'
                        : ''
                    }`}
                    key={item.id}
                    onClick={() => handleClick(item.subCategory)}
                  >
                    {item.subCategory}
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className={`overflow-hidden flex-1 w-full`}>{content}</div>
      </div>
    </>
  );
};

export default SubCategory;
