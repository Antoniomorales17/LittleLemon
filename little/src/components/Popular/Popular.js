import { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa"; // Importamos los iconos necesarios
import "./Popular.css";

import { popular } from "../../Data";
import { responsive } from "./constants";

const Popular = () => {
  const [mobileView, setMobileView] = useState(false);
  const carouselRef = useRef(null); 

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 664);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="popular">
    <div className="popular">
      <div className="container">
        <div className="head">
          <h2>Popular Dishes</h2>
          <div className="navigation">
            <button className="prev" onClick={() => carouselRef.current.previous()}>
              <FaArrowLeft />
            </button>
            <button className="next" onClick={() => carouselRef.current.next()}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="items">
          <Carousel
            ref={carouselRef}
            centerMode={mobileView}
            arrows={false}
            responsive={responsive}
          >
            {popular.map((item) => (
              <div key={item.id} className="item">
                <div className="img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="info">
                  <h3>{item.title}</h3>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div className="footer">
                  <span className="price">${item.price}</span>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Popular;
