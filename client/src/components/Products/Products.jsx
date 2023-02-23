import "./Products.scss";
import Product from "./Product/Product";
import loading from "../../assets/loading-spinner.svg";
const Products = ({products,innerPage,headingText}) => {
    if(!products) return (<div className="loading"><img src={loading} alt="loading" /></div>);
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            {products?.data?.map((item)=>( // this is a optional chaining
                <Product key={item.id} id={item.id} data={item.attributes}/>
            ))}
        </div>
    </div>;
};

export default Products;
