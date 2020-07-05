import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'


const ProductHome = () => {
    return (
        <ul className="prod-home">
            {Object.entries(shoes).map(([slug, {name, img}]) => (
                <li key={slug}>
                    <Link to={`/products/${slug}`}>
                        <h3>{name}</h3>
                        <img src={img} alt={name} className="prod-img" />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };
export default ProductHome
