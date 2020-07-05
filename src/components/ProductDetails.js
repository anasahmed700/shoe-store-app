import React from 'react'
import {useParams} from 'react-router-dom'


const ProductDetails = () => {
    const {prodSlug} = useParams()

    const product = shoes[prodSlug]
    const {name, img} = product

    console.log(product)
    console.log(`Name: ${name}, Image: ${img}`)
    
    return (
        <div>
            {/* Details of {prodSlug} */}
            <h1 className="text-secondary">{name}</h1>
            <img src={img} alt={prodSlug} />
        </div>
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

export default ProductDetails
