import { f_1, f_2, f_3 } from "../assets";
import { footerHeading, footerServices } from "../constants";

export default function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <h1 className="heading">
                    {footerHeading}
                </h1>

                <p className="services">{footerServices.split(',').map(el => (
                    <span key={el}>
                        {el}
                        <span className="bar">|</span>
                    </span>
                ))}

                </p>
            </div>
            <div className="bottom">
                <img src={f_1} alt="" />
                <img src={f_2} alt="" />
                <img src={f_3} alt="" />
            </div>
        </div>
    )
}
