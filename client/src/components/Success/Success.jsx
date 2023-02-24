import "./Success.scss";
import React from 'react'
import { Link } from "react-router-dom";
import success from "../../assets/Purchase_Success.png"

export default function Success() {
  return (
    <div className="container">
        <div className="success-Box">
          <img src={success} alt=""/>
          <div className="text">Great,Your order is successfully created</div>
          <div><Link to="/myorder" className="link">My Orders</Link></div>
        </div>
    </div>
  )
}
