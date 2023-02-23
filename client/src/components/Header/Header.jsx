import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";// first export context from context.js file
import logo from "../../assets/amazon-logo.png"
import "./Header.scss";
const Header = () => {
    const {cartCount}=useContext(Context);
    const navigate=useNavigate();
    const [scrolled,setScrolled]=useState(false);
    const [showCart,setShowCart]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const handleScroll=()=>{
        const offset=window.scrollY;
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    document.onclick=()=>{
        setShowCart(false);
    }
    useEffect(()=>{
    //    console.log("useEffect")
    window.addEventListener('scroll',handleScroll);
    },[])
    return <>
        <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
            <div className="header-content">
                <div className="left" onClick={()=>navigate('/')}><img width="100" src={logo} alt="logo"/></div>
                <ul className="center">
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="right">
                    <TbSearch onClick={()=>{
                        setShowSearch(true);
                    }}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={(e)=>{
                        e.stopPropagation();
                        setShowCart(true);
                    }}>
                        <CgShoppingCart/>
                        <span style={!cartCount?{display:"none",}:{display:"block"}}>{cartCount}</span>
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
};

export default Header;
