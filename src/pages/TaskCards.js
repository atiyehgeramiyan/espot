import { useState } from "react";
import { Link } from "react-router-dom";
import SearchItem from "./SearchItem";

const TaskCards = () => {

  const [data,setData]=useState()

  const register=(task)=>
  {
   let id=1;
   if(data.length>0)
   {
    id=data[data.length-1]+1
   }
   task.id=id

   setData([...data,task]);
  }


  return (
    <div className="container"> 
          <SearchItem/>
      <div class="d-flex justify-content-end m-2 ">
        <Link to="/register">
          <button type="button" class="btn btn-info text-white round-btn">
            +
          </button>
        </Link>
      </div>
    </div>
  );
};
export default TaskCards;
