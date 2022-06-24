import React, {  useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import "./index.css";
export const StarRating = ({setFilter}) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const starArray = [
    { id: 0, max: 2 },
    { id: 1, max: 4 },
    { id: 2, max: 6 },
    { id: 3, max: 8 },
    { id: 4, max: 10 },
  ];
  const handlerClick = (ratingValue,max ) => {
    
    setRating((prev) => {
      if (prev === ratingValue){
   
      } ;
      return prev === ratingValue ? null : ratingValue;
    });

    setFilter({min: max-2, max:max })
  };
  useEffect(()=>{
    if(rating === null ){
      setHover(null)
      setFilter({min:0, max:10 })
    }
  },[rating,setFilter])
  
  return (
    <div>
      {starArray.map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={star.id}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                handlerClick(ratingValue,star.max);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#FFC107" : "#E4E5E9"}
              size={25}
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};
