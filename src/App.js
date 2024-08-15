import React, { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { Cards } from "./components/Cards";
import {filterData, apiUrl} from "./data"
import { Spinner } from "./components/Spinner";
const App = () => {
  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true)
  const[category, setCategory] = useState(filterData[0].title)

  async function fetchData(){

    try{
      setLoading(true);
      let response = await fetch(apiUrl);
      console.log(response);
      let output = await response.json();
      console.log(output);
      setCourses(output.data)

      setLoading(false)
    }
    catch(error){
      console.log("error while fetching data",error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar></Navbar>
      <div className="bg-bgDark2">
        <Filter filterData = {filterData} category={category} setCategory={setCategory} ></Filter>
     
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" >
        {
          loading ? <Spinner/> : <Cards courses = {courses} category={category} ></Cards>
        }
                  
        </div>
      </div>
      
    </div>
  )
};

export default App;
