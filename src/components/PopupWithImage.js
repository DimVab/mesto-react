function PopupWithImage () {



  return(
    <section className="popup popup_type_open-image">
      <figure className="popup__image-container">
        <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </section>
  )
}

export default PopupWithImage;