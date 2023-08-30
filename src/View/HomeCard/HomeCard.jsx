import React from 'react';
import './index.scss'

const HomeCard = ({Char}) => {


  return <>
  <div className='character'>
    <section>
      <div className='character__info'>
        <img src={Char.image}/>
        <p>Nome: {Char.name}</p>
        <p>Espécie: {Char.species}</p>
        <p>{Char.status}</p>
        <p>Origem: {Char.origin.name}</p>
      </div> 
    </section>
  </div>
  
  </>
}

export default HomeCard