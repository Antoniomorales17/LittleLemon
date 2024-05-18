import React from 'react';
import food1 from '../../assets/food1.png';
import './Intro.css';

const Intro = () => {
  return (
    <section id='intro'>
      <header>
        <article className="call-to-action">
          <section className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="subsection">
              We are a family-owned Mediterranean restaurant, located on Maldove Street in Chicago, Illinois. We focus on traditional recipes served with a modern twist.
            </p>
            <br />
            <button className="action-button" onClick={() => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' })}>
              Reserve a table
            </button>
          </section>

          <section className="hero-image">
            <img src={food1} alt="Little Lemon restaurant cuisine" />
          </section>
        </article>
      </header>
    </section>
  );
}

export default Intro;
