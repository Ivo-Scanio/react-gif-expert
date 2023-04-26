import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
    const apikey='cZErPcq68ryGl4Q5cogVIip4Gu5siqEr';
  
    const [categories, setCategories]= useState(['F1']);

    const onAddCategory=(newCategory)=>{
     if(categories.includes(newCategory))return;
     setCategories([newCategory,... categories]);
    // setCategories(cat=>['valorant',...cat])
    }
    return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={(event)=>onAddCategory(event)}
    />

      {categories.map((category)=>(
          <GifGrid key={category} category={category}/>
        )
      )}
    
       {/* Gif Item */}
    </>
  )
}
