import React from 'react';
import Image from 'next/image';
import background from '../../../public/kangan back.jpg';

const HomeContent = () => {
  return (
    <div className="home-content">
      {/* Background Image */}
      <Image
        src={background}
        layout="fill" // Makes the image cover the container
        objectFit="cover" // Ensures the image scales properly
        alt="background"
        className="background-image"
      />

      {/* Text Content */}
      <div className="content">
        <h1>Welcome to Percious Kangan</h1>
        <h3>
          <p>
            Let your style shine <br /> Yours to wear, yours to love.
          </p>
          <button>Shop Now</button>
        </h3>
      </div>
    </div>
  );
};

export default HomeContent;
