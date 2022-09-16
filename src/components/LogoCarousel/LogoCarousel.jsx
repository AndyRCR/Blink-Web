import React, { useEffect } from 'react'
import './LogoCarousel.css'

const LogoCarousel = () => {

    const images = [
        {image: "https://blinkimages.s3.amazonaws.com/os/logo-ps.png", os: "prevencion salud"},
        {image: "https://blinkimages.s3.amazonaws.com/os/logo-doctored.png", os: "doctored"},
        {image: "https://blinkimages.s3.amazonaws.com/os/logo-premedic.png", os: "premedic"},
        {image: "https://blinkimages.s3.amazonaws.com/os/logo-galeno.png", os: "galeno"},
        {image: "https://blinkimages.s3.amazonaws.com/os/logo-omint.png", os: "omint"}
    ]

    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.logoCarouselContent");
        
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
        
        for(let i=0; i<marqueeElementsDisplayed; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }, [])
    

  return (
    <div className="logoCarousel">
        <ul className="logoCarouselContent">
            {images.map(el => (
                <li key={el.os}>
                    <img src={el.image} alt={el.os} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default LogoCarousel