import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Works from './components/Works';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {React, useEffect, useState} from 'react';
import axios from 'axios';

function App() {
const readtoken = process.env.REACT_APP_BUTTER_CMS_READ_TOKEN
const [data, setData] = useState([])


// for using sample data:
// import sampleData from './components/sampleData'
// useEffect(()=>{
//   setData(sampleData)
// }, [])
// useEffect(()=>{
//   console.log(`data is `, data)
// }, [data])

useEffect(()=>{

  
  const getData = async () =>{
    
    axios.get(`https://api.buttercms.com/v2/pages/portfolio/stephen-kelly-portfolio/?auth_token=${readtoken}`)
    .then(res =>{setData(res.data.data.fields.stephenkellyportfolio)
    })
    .catch(err =>{
      console.log(err)
    })
  }
  getData()
}, [readtoken])



// add props here to check if the image is loaded.  add a state variale that is true or false.  use a conditional to check if the image is loaded.  if it is loaded, then display the image.  if it is not loaded, then display a loading image.

  return (
    <div >
      <Navigation />
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

