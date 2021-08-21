function PopupWithForm ({name, title, submit, isOpen, onClose, children}) {

  return(
    <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button className="popup__close-icon" type="button" onClick={onClose} aria-label="Закрыть"></button>
        <form className="form" name={name} noValidate>
          {children}
          <input type="submit" className="form__submit-button" value={submit} />
        </form>
    </div>
    </section>
  )
}

export default PopupWithForm;