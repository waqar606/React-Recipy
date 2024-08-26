import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const PopularSlider = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
              <Link to={`/${d.idMeal}`} key={d.idMeals}>
                <div className="slider">
                  <img
                    src={d.strMealThumb}
                    alt=""
                    style={{ width: "18rem", height: "17rem" }}
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default PopularSlider;
