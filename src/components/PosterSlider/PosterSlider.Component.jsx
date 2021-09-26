import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';

const PosterSlider = (props) => {
   
    const settings= {
        infinity:false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite:true
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    InitialSlide:true,
                },

                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    
                },
            },

        ]
    }

    const {posters,title,subtitle,isDark, config}= props;
    const currentSettings = config ? config :settings;
    return(
        <>
            <div className="flex flex-col items-start my-2">
                <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>{title}</h3>
                <p className= {`text-sm ${isDark? "text-white": "text-gray-800"}`}>{subtitle}</p>
            </div>
            <Slider {...currentSettings} >
                {posters.map((each)=>(
                    <Poster {...each} isDark={isDark}/>
                ))}
            </Slider>
        </> 
    )

}

export default PosterSlider;