import React, { useState } from 'react'
import ReturnButton from './Components/ReturnButton/ReturnButton'
import Layout from './Pages/Layout/Layout';
import exportLang from "./lang/exportLang"
const App = () => {
const [state,setState] = useState(false);

function updateLang(e){
  e.preventDefault()
  if(state){
    setState(false)
  }
  else{
    setState(true)
  }

 }
console.log(
   state ? exportLang.uzH1Name : exportLang.enH1Name
);
  console.log(exportLang);
  const scroll_TopBtn = (e)=>{
    console.log('====================================');
    console.log("scroll_TopBtn ");
    console.log('====================================');
    e.preventDefault();
    let bodyScrollObj ={top: 0,behavior: 'smooth',}
    window.scrollTo(bodyScrollObj);
  }
  return  <>
  <Layout />
   <ReturnButton task={scroll_TopBtn}/> 
  </>
  
 
}

export default App