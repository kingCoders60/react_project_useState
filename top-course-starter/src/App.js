import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import React from "react";
import {apiUrl,filterData} from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const App = () => {
  const[courses,setCourses] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        //save data into a variable
        setCourses(data.data);
      }catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[]);
  return (
    <div>
      <Navbar/>
      <Filter
        filterData={filterData}
      />
      <Cards courses={courses}/>
    </div> 
  );
};

export default App;
