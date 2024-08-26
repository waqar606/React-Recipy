import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";

const RecipyID = () => {
  const { idMeal } = useParams();
  const [data, setdata] = useState([]);
  const [active, setActive] = useState("ingredient");
  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const mydata = await api.json();

      console.log(mydata);
      setdata(mydata.meals[0]);
    };
    fetchdata();
  }, [idMeal]);

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        {/* data data isleye kyunke main fetch kar data main save kar raha hoon */}
        <h1>{data.strMeal}</h1>
        <div className="style" style={{ display: "flex" }}>
          <div
            className="image"
            style={{
              width: "30%",
            }}
          >
            <img
              src={data.strMealThumb}
              alt="meal"
              style={{ width: "18rem" }}
            />
          </div>
          <div
            className="content"
            style={{
              width: "60%",
            }}
          >
            <button className="btn" onClick={() => setActive("ingredient")}>
              Ingredient
            </button>
            <button className="btn" onClick={() => setActive("intruction")}>
              Instruction
            </button>
            {active === "ingredient" && (
              <>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient1} - {data.strMeasure1}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient2} - {data.strMeasure2}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient3} - {data.strMeasure3}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient4} - {data.strMeasure4}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient5} - {data.strMeasure5}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient6} - {data.strMeasure6}
                </div>
              </>
            )}
            {active !== "ingredient" && <p>{data.strInstructions} </p>}
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
          }}
        >
          <div
            className="image"
            style={{
              width: "30%",
            }}
          >
            <img src={data.strMealThumb} alt="" style={{ width: "18rem" }} />
          </div>
          <div
            className="content"
            style={{
              width: "60%",
            }}
          >
            
          </div>
        </div> */}
      </div>

      <TrendingSlider />
    </>
  );
};

export default RecipyID;
