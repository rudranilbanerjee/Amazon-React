import {useNavigate} from "react-router-dom";
import "./Category.scss";
import loading from "../../../assets/loading-spinner.svg";

const Category = ({categories}) => {
    const navigate=useNavigate();
    if(!categories) return (<div className="loading"><img src={loading} alt="loading" /></div>);
    return <div className="shop-by-category">
        <div className="catagories">
            {categories?.data?.map((item)=>(
                // console.log(item)
                <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                    <img src={item.attributes.img.data.attributes.url} alt=""/>
                    <span>{item.attributes.title}</span>
                </div>
            ))}
        </div>
    </div>;
};

export default Category;
