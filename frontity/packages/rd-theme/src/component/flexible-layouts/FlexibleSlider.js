import React from 'react';
import {connect,styled,Global,css} from "frontity";
import SimpleImageSlider from "react-simple-image-slider";
import slickCss from "slick-carousel/slick/slick.css"
import slickTheme from "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import generalCss from '../../assets/style.css';


function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className+' slick_next_arrow'}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className+' slick_prev_arrow'}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

const FlexibleSlider = ({data}) => {
    const imgs = data.images;
    let images = [];
    imgs.map((item) => {
        let url = {'url' : item.image.url};
        images.push(url);
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        customPaging: i => (
            <div
                style={{
                    width: "10px",
                    height:"10px",
                    margin:"0px 1px",
                    borderRadius:"50%",
                    color: "black",
                    border: "1px black solid"
                }}
            >
                &nbsp;
            </div>
        )
    };



    return(
        <>
            <Global styles={css([slickCss,slickTheme,generalCss])} />
            <Slider {...settings}>
                {images.map((item) => {
                    return(
                        <div>
                            <img className="sample_image" src={item.url} alt="Test" />
                        </div>
                    );
                })

                }
            </Slider>

        </>
    );
};

export default connect(FlexibleSlider);