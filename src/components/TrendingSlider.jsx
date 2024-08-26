import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const TrendingSlider = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const mydata = await api.json();
      console.log(mydata);
      setdata(mydata.meals);
    };
    fetchdata();
  }, []);
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div
        style={{
          height: "60vh",
          width: "90%",
          margin: "auto",
          // backgroundColor: "red",
        }}
      >
        <Slider
          {...settings}
          style={{
            margin: "1rem",
          }}
        >
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeals} className="slider">
                <img
                  src={d.strMealThumb}
                  alt=""
                  style={{ width: "10rem", height: "7rem" }}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TrendingSlider;
