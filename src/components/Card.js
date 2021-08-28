import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card ({card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleCardClick () {
    onCardClick(card);
  }

  return(
    <li className="element">
      <img className="element__image" src={card.link} onClick={handleCardClick} alt={card.name}/>
      <div className="element__container">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__likes-container">
          <button className={`element__like ${isLiked && "element__like_active"}`} type="button" aria-label="Поставить лайк"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && <button className="element__delete" type="button" aria-label="Удалить элемент"></button>}
    </li>
  )
}

export default Card;