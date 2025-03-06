import Menu from './Menu.js'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home.js';
import Products from './Products.js';
import Nopage from './Nopage.js';
import Services from './Services.js';
import {lazy,Suspense} from 'react';


let About=lazy(()=>import('./About'));


function display()
{
  alert("Hi");
}

function disc(num)
{
  alert(num);
}


function receiveData(data){
  alert(data);
}

function App() {
  let name="kiran";
  return (
    <>
    <button onClick={display} className="button">Submit</button>
    <button onClick={()=>{disc(10)}} className="button">Save</button><br/><br/>
    <h3 className="textColor">App Component</h3>
    <BrowserRouter>
    <Menu name={name} age="24" passData={receiveData}></Menu>
    <Suspense>
    <Routes>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/products/:id" element={<Products/>}/>
      <Route path="/services/" element={<Services/>}/> 
      <Route path="/about/" element={<About/>}/>  
      <Route path="*" element={<Nopage/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
