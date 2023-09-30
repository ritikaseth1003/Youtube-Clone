import React from "react";
import Buttons from "./Buttons";



const Search = () => {

  
  return (
    <>
    <div>
      <div className="flex justify-center my-6">
        <input type="text" placeholder="Search" className="rounded-md px-5 py-1 w-96 bg-slate-900"/>
        <div className="bg-slate-800 rounded-md position px-2 py-2" id="disp">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
        
        <div className="mx-4 my-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg>
        </div>


        </div>

        <div className="flex justify-end align-top -my-14 mx-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>
<div className="bg-gray-800 rounded-full px-2 py-1 text-cyan-600 "><button>Sign In</button></div>

        </div>
        </div>

        
      
      <nav className="flex justify-between my-20">
      <Buttons contents = "All"/>
      <Buttons contents = "Music"/>
      <Buttons contents = "Live"/>
      <Buttons contents = "Bollywood"/>
      <Buttons contents = "Drama"/>
      <Buttons contents = "Action "/>
      <Buttons contents = "Thriller"/>
      <Buttons contents = "Comedy"/>
      <Buttons contents = "Cooking"/>
      <Buttons contents = "Gaming"/>
      <Buttons contents = "Tamil"/>
      <Buttons contents = "Bhajan"/>
      <Buttons contents = "Coding"/>
      <Buttons contents = "Astronomy"/>
      <Buttons contents = "News"/>
      <Buttons contents = "Cricket"/>
      <Buttons contents = "Football"/>
      <Buttons contents = "Pottery"/>

     
      
      
    
      </nav>
    </>
  );
};

export default Search;
