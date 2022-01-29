import React from 'react';
import {connect,styled} from "frontity";
import SimpleImageSlider from "react-simple-image-slider";

const FlexibleSlider = ({data}) => {
    const imgs = data.images;
    let images = [];
    imgs.map((item) => {
        let url = {'url' : item.image.url};
        images.push(url);
    });

    return(
        <>
            <SimpleImageSlider
                width={1140}
                height='100vh'
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </>
    );
};

export default connect(FlexibleSlider);