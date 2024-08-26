import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";

const SearchElement = () => {
  const { Term } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/search.php?s=${Term}`
      );
      const mydata = await api.json();
      console.log(mydata);
      setdata(mydata.meals);
    };
    fetchdata();
  }, [Term]);

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(15rem,1fr))",
          gridGap: "1rem",
          margin: "2rem",
          // width: "90%",
          // margin: "auto",
          // display: "grid",
          // // gridTemplateColumns: "repeat(4, 1fr)",
          // gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          // gridGap: "1rem",
          // marginTop: "2rem",
        }}
      >
        {data.map((d) => {
          return (
            <div className="link">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div className="img">
                  <img src={d.strMealThumb} alt="" style={{ width: "13rem" }} />
                </div>
                <h2>{d.strMeal}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <TrendingSlider />
    </>
  );
};

export default SearchElement;
