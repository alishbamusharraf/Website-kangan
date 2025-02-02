import { Description } from '@mui/icons-material'
import React from 'react'

const kangan  = () => {


const kanganData = [
  {id: 1, name: 'Indian kangan', price: 20000, Description: 'Stylish stones',image:'/kangan 17.webp'},
  {id: 2, name: 'Silver multi stones', price: 20000, Description: 'Multi stones',image:'/silver 5.jpg'},
  {id: 3, name: 'Zarconia bangle', price: 19500, Description: 'Zarcon stones',image:'/kangan 9.webp'},
  {id: 4, name: 'Flower gold bangle', price: 9000, Description:'luxury style', image:'/kangan 2.jpg'},
  {id: 5, name: 'silver kangan', price:25000 , Description: ' Silver Petals',image:'/silver 3.jpg'},
  {id: 6, name: 'Wave gold bangle', price: 17000, Description: 'Luxury unique',image:'/kangan 1.webp'},
  {id: 7, name: 'Zarconia bangle', price: 19500, Description: 'Zarcon stones',image:'/kangan 16.webp'},
  {id: 8, name: 'Box gold bangle', price: 250000, Description: 'Unique style',image:'/kangan 4.webp'},
  {id: 9, name: 'American Doubleds Diamonds Kangan', price: 5000, Description: 'Unique style',image:'/silver 6.webp'},
  {id: 10, name: ' Silver Openable Kangan', price: 30000, Description: 'silver heavy stones',className:"size-small", image:'/silver kangan.jpg'},
  {id: 11, name: 'Bow style', price: 30000, Description: 'unqiue style',image:'/silver 2.jpg'},
  {id: 12, name: 'Gold-Plated Stone-Studded Bangles', price: 15000, Description: 'indian style',image:'/kangan 17.jpg'},
]
  return (
    <div>
      <div className='kangan' >
        {kanganData.map((kangan) => (
          <div key={kangan.id} className='kangan-card'>
            <img src={kangan.image} alt={kangan.name} />
            <h3>{kangan.name}</h3>
            <p>{kangan.Description}</p>
            <div className='price'>Rs:{kangan.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default kangan 