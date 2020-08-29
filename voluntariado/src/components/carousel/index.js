import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

export default ({images, maxHeight}) => {
    return(
        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={5000} stopOnHover={true}>
            {
                images.map(image =>{
                    return(<div>
                        <img alt="" src={image} style={{maxHeight: maxHeight}}/>
                    </div>
                    )
                })
            }
        </Carousel>
    )
};
  