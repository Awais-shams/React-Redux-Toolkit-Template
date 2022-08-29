import './App.css';
import Header from './components/app-bar/Header';
import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {

 const keys=window.localStorage.getItem('encryptedKey')
console.log("local",keys)
  const key=useSelector((state)=>state.login.key)
  console.log("keySlice",key)

  return (
    <div className="App">
     <Header/>
     <h1>React Redux Toolkit with Protected Routes</h1>
     <Routes>
      <Route path="home" element={keys!==null?<Home/>:null}/>
      <Route path="contacts" element={keys!==null?<Contacts/>:null}/>

     </Routes>
    </div>
  );
}

export default App;
