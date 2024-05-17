import React from 'react';
import { menuCategories, popular } from '../../Data';
import { FaStar } from 'react-icons/fa'; // Importamos el icono de estrella
import './Menu.css';

const Menu = () => {
  return (
    <section id='menu'>
      <div className='our-menu'>
        <div className="container">
          <div className="title">
            <h1>Our Regular Menu Pack</h1>
            <ul>
              <li>All</li>
              {menuCategories.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
              <li>More Categories +</li>
            </ul>
          </div>
          <div className="items">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
