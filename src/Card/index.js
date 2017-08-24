import React from 'react';
import FavBtn from '../FavBtn';
import './Card.css';

const Card = (props) => {
  const { type } = props.data;

  const displayCard = () => {
    if (type === 'people') {
      const { name, species, home, homePop, films } = props.data;
      return (
        <div>
          <section className='card-header'>
            <h4>{name}</h4>
            <FavBtn { ...props } />
          </section>
          <p>{species}</p>
          <p>{home}</p>
          <p>{homePop}</p>
        </div>
      )
    }
    if (type === 'planets') {
      const { name, climate, population, terrain, characters } = props.data;
      return (
        <div>
          <section className='card-header'>
            <h4>{name}</h4>
            <FavBtn { ...props } />
          </section>
          <p>{climate}</p>
          <p>{terrain}</p>
          <p>{population}</p>
          <div className='additionalData' hidden={ (characters.length > 0) ? false : true }>
            <h4>Hometown Characters</h4>
            { characters.map(character => <p>{ character.name }</p> )}
          </div>
        </div>
      )
    }
    if (type === 'vehicles') {
      const { name, model, vehicle_class, passengers, films } = props.data;
      return (
        <div>
          <section className='card-header'>
            <h4>{name}</h4>
            <FavBtn { ...props } />
          </section>
          <p>{model}</p>
          <p>{vehicle_class}</p>
          <p>{passengers}</p>
          <div className='additionalData' hidden={ (films.length > 0) ? false : true }>
            <h4>Films Starred In</h4>
            { films.map(film => <p>{ film.name }</p> )}
          </div>
        </div>
      )
    }
  }

  return (
    <div className="data-card">
      { displayCard() }
    </div>
  );
}

export default Card;
