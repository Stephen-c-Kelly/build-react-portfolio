import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Works from './components/Works';
import Navigation from './components/Navigation';
import {React, useEffect, useState} from 'react';
import axios from 'axios';

function App() {
const readtoken = process.env.BUTTER_CMS_READ_TOKEN
const [data, setData] = useState([])

useEffect(()=>{
  const getData = async () =>{
    axios.get(`https.//api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${readtoken}`)
    .then(res =>{setData(res.data.data.fields.my_personal_porfolio)
    })
    .catch(err =>{
      console.log(err)
    })
  }
  getData()
}, [])

  return (
    <div >
      <Navigation />
      <Home content={data[0]}/>
      <About content={data[1]}/>
      <Skills content={data[2]}/>
      <Works content={data[3]}/>
      <Contact/>
    </div>
  );
}

export default App;
