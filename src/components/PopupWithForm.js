function PopupWithForm (props) {

  return(
    <section className={`popup popup_type_${props.name} ${props.isOpen}`} >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button className="popup__close-icon" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
        <form className="form" name={props.name} noValidate>
          {props.children}
          <input type="submit" className="form__submit-button" value={props.submit} />
        </form>
    </div>
    </section>
  )
}

export default PopupWithForm;