function PopupWithForm (props) {



  return(
    <section className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
        <form className="form" name={props.name} novalidate>
          {props.children}
          <input type="submit" className="form__submit-button" value={props.submit} />
        </form>
    </div>
    </section>
  )
}

export default PopupWithForm;