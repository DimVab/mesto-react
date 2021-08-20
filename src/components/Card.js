function Card (props) {

function handleCardClick () {
  props.onCardClick(props.card);
}

  return(
    <li className="element">
      <img className="element__image" src={props.card.link} onClick={handleCardClick}/>
      <div className="element__container">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__likes-container">
          <button className="element__like" type="button" aria-label="Поставить лайк"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="element__delete" type="button" aria-label="Удалить элемент"></button>
    </li>
  )
}

export default Card;