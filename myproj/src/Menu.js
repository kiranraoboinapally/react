import React, { useState } from 'react';
import './Menu.css';
import xyz, { List, Order} from './List.js';
import {Link } from 'react-router-dom'

function Menu(props) {
  const n = 100;
  const [isLogged] = useState(true);  
  const username = "Kiran Logged in";  
  return (
    <React.Fragment>
        <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Products'>Products</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/UseState'>UseState</Link></li>
            <li><Link to='/Mine'>Mine</Link></li>
            <li>Contact</li>
            <List />
            <Order />
            {xyz}
            <li>{isLogged ? username : "Login"}</li>  
        </ul>
        {console.log(props)}
        <p>My name is: {props.name}</p>
        <p>My age is: {props.age}</p>
        <p>{props.children}</p>
        <button onClick={() => { props.passData(n); }} className="button">Send</button><br/><br/>
    </React.Fragment>
  );
}

export default Menu;
