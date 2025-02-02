import React from 'react'
import Image from 'next/image';


const About = () => {
  return (
    <div>
      <section className="about" style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/gold-bokeh-lights_174431-371.jpg?semt=ais_hybrid)"
      }}>
        <div className='about-content'>
          <h2 className='fade-in'>About Us</h2>
          <p>Kangan Jewelry, we specialize in creating timeless,
            handcrafted  pieces that blend tradition with modern elegance.
            Our collection,made from the finest materials,celebrates
            life’s special moments  with exceptional craftsmanship and design.
            Whether you're looking for a statement piece or a subtle accessory,
            Kangan Jewelry offers something unique for every occasion.</p>
        </div>
      </section>
    </div>
  )
}

export default About


