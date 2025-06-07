import { IoMdStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";


const ReviewStars = ({ratingNo}) => {

    
  const ratingArray = new Array(5).fill(0)
  
  return (
    <>
       {ratingArray.map((_,index) => {
          return <span key={index} className="star">{ratingNo > 0 ? <IoMdStar className={index < ratingNo ? "rating-icon active":"rating-icon"}/> : <IoStarOutline className="rating-icon"/>}</span>
        })}
    </>
  )
}

export default ReviewStars