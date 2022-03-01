import React from 'react';
import {connect,styled,css,Global} from "frontity";
import slickCss from "slick-carousel/slick/slick.css"
import slickTheme from "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Switch from '@frontity/components/switch';
import generalCss from '../../assets/style.css';


function CustomNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className+' slick_next_arrow'}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

function CustomPrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className+' slick_prev_arrow'}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}


const FlexibleTestimonials = ({data,libraries}) =>{
    const show_slider = data.show_slider;
    const testimonials = data.testimonials;
    const Html2React = libraries.html2react.Component;


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow2 />,
        prevArrow: <CustomPrevArrow2 />,
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
          <TestimonialWrapper>
          <Switch>
             <div when={!show_slider}>
             {testimonials.map((item) => {
                                                       return (
                                                           <>
                                                               <Testimonial>
                                                                   <div>
                                                                   <h4>{item.title}</h4>
                                                                                                 <Html2React html={item.content} />
                                                                                                 </div>
                                                               </Testimonial>
                                                           </>
                                                       );
                                                   })}
             </div>
            <div when={show_slider}>
            <Global styles={css([slickCss,slickTheme,generalCss])} />
                                                                    <Slider {...settings}>
                                                                        {testimonials.map((item) => {
                                                                            return(
                                                                               <Testimonial>
                                                                                     <div>
                                                                                     <h4>{item.title}</h4>
                                                                                      <Html2React html={item.content} />
                                                                                   </div>
                                                                                 </Testimonial>
                                                                            );
                                                                        })

                                                                        }
                                                                </Slider>
            </div>
          </Switch>







          </TestimonialWrapper>
      </>
    );
}

export default connect(FlexibleTestimonials);

const TestimonialWrapper = styled.div`
    width: 100%;
    background-color: #dddddd50;
    
`;

const Testimonial = styled.div`
    width: 100%;
    display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  align-content: center;
  align-items: center;
  div {
  text-align:center;
  }
  h4{
    width: 100%;
    text-align: center;
    color:#000;
  }
  
  p{
    text-align: center;
    width: 60%;
    color:#000;
    margin:0 auto;
  }
`;