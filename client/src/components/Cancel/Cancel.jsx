import "./Cancel.scss";
import {React,useContext} from 'react'
import { Link } from "react-router-dom";
import failed from "../../assets/failed.jpg"
import { Context } from "../../utils/context";
export default function Cancel() {
    const {currentPath}=useContext(Context);
  return (
    <div className="container">
        <div className="failed-Box">
          <img src={failed} alt=""/>
          <div className="text">sorry, Your order is failed !</div>
          <div><Link to={currentPath} className="link">Re Order</Link></div>
        </div>
    </div>
  )
}
