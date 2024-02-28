import { image1, image2 } from "../assets";
import { heading, imageDetail, points } from "../constants";


export default function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <img src={image1} alt="" />
            </div>
            <div className="right">
                <h1 className="heading">
                    {heading}
                </h1>
                <ul>
                    {points.map(el => (
                        <li key={el.id} className="points">{el.value}</li>

                    ))}
                </ul>
                <div className="imgContainer">
                    <img src={image2} alt="" />
                </div>
                <p className="imageDetails">{imageDetail.split('"').map(el => (
                    <span key={el}>{el}</span>
                ))}</p>

            </div>
        </div>
    )
}
