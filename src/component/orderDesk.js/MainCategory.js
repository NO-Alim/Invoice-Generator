import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryFilter } from '../../features/orderDeskFilter/orderDeskFilter';
import useGetCategory from '../../hooks/useGetCategory';
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

const MainCategory = () => {
  const { category: selectedCategory } = useSelector(
    (state) => state.orderDesk
  );
  const { category, loading, error } = useGetCategory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = (e) => {
    dispatch(categoryFilter(e));
  };

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: category.length > 5 ? 5 : category.length,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: category.length > 4 ? 4 : category.length,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 724,
  //       settings: {
  //         slidesToShow: category.length > 3 ? 3 : category.length,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: category.length > 2 ? 2 : category.length,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  let content;
  if (loading) content = <LoaderSpin />;
  if (!loading && error) {
    content = (
      <h1 className="x text-red-600 text-xl text-center">{error.message}</h1>
    );
  }
  if (!loading && !error && category?.length === 0) {
    content = (
      <div className="px-5">
        <Link to="/dashboard" className="text-2xl font-thin cursor-pointer">
          Add category before start.
          <span className="text-textPrimary/50 ml-2">
            (Food, Breakfast etc.)
          </span>
        </Link>
      </div>
    );
  }

  if (!loading && !error && category?.length > 0) {
    content = (
      <div className="ml-6 mr-6">
        {/* <Slider {...settings}>
          {category.map((item, ind) => {
            return (
              <div
                className={`px-5 text-center py-2 border border-brand/50 rounded-md cursor-pointer hover:border-brand all ${
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
        </Slider> */}

        <Accordion className={classes.root}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.summary}
          >
            <Typography className={classes.heading}>
              <h1 className="text-xl">Category</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <div className="flex gap-5 flex-wrap py-3">
              {category.map((item, ind) => {
                return (
                  <div
                    className={`px-3 md:px-5 text-center py-1 md:py-1 border border-brand/50 rounded-md cursor-pointer hover:border-brand all ${
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
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1 w-full overflow-hidden">{content}</div>
      </div>
    </>
  );
};

export default MainCategory;
