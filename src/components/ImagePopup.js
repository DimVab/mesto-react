function ImagePopup (props) {



  return(
    <section className={`popup popup_type_open-image ${props.isOpen && "popup_opened"}`}>
      <figure className="popup__image-container">
        <button className="popup__close-icon" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;