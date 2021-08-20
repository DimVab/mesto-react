import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {

  const [isEditProfilePopupOpen, setOpenProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setOpenAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setOpenEditAvatarPopup] = React.useState(false);

  function handleEditAvatarClick () {
    setOpenEditAvatarPopup(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleEditProfileClick () {
    setOpenProfilePopup(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function handleAddPlaceClick () {
    setOpenAddPlacePopup(true);
    document.addEventListener('keydown', handleEscClose);
  }

  function closeAllPopups () {
    setOpenEditAvatarPopup(false);
    setOpenProfilePopup(false);
    setOpenAddPlacePopup(false);
    document.removeEventListener('keydown', handleEscClose);
  }

  const exitKey = "Escape";
  function handleEscClose(evt) {
    if (evt.key === exitKey) {
      closeAllPopups();
    }
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditAvatarClick}
        onAddPlace={handleEditProfileClick}
        onEditAvatar={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        submit="Сохранить"
        isOpen={isEditProfilePopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        children={
          <><div className="form__input-container">
            <input type="text" className="form__input form__input_type_name" id="name-input" placeholder="Введите своё имя" name="name" minlength="2" maxlength="40" required />
            <span className="form__input-error name-input-error"></span>
          </div>
          <div className="form__input-container">
            <input type="text" className="form__input form__input_type_job" id="job-input" placeholder="Ваша профессия" name="about" minlength="2" maxlength="200" required />
            <span className="form__input-error job-input-error"></span>
          </div></>
        } />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        submit="Сохранить"
        isOpen={isEditAvatarPopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        children={
          <div className="form__input-container">
            <input type="url" className="form__input form__input_type_url" id="image-url-input" placeholder="Ссылка на картинку" name="avatar" required />
            <span className="form__input-error image-url-input-error"></span>
          </div>
        } />

      <PopupWithForm
        name="add-image"
        title="Новое место"
        submit="Создать"
        isOpen={isAddPlacePopupOpen && "popup_opened"}
        onClose={closeAllPopups}
        children={
          <><div className="form__input-container">
            <input type="text" className="form__input form__input_type_name-of-card" id="name-of-card-input" placeholder="Название" name="name" minlength="2" maxlength="30" required />
            <span className="form__input-error name-of-card-input-error"></span>
          </div>
          <div className="form__input-container">
            <input type="url" className="form__input form__input_type_url" id="avatar-url-input" placeholder="Ссылка на картинку" name="link" required />
            <span className="form__input-error avatar-url-input-error"></span>
          </div></>
        } />

      <PopupWithForm
        name="type_submit"
        title="Вы уверены?"
        submit="Да"
      />

      <PopupWithImage />
    </>
  );
}

export default App;
