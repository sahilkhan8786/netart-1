import { image3 } from "../assets";
import { productSales, products } from "../constants";


export default function Products() {
    return (
        <div className="products">
            <h1 className="heading">
                {productSales}
            </h1>
            <div className="imgContainer">
                <img src={image3} alt="" />
            </div>
            <div className="product-list">
                <p>
                    {products}
                </p>
            </div>

        </div>
    )
}
