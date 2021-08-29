import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setOpenProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setOpenAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setOpenEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setOpenImagePopup] = React.useState(false);
  // пришлось создать новую переменную состояния, тк если изначально в SelectedCard создать пустой объект, то он будет восприниматься как true и при рендеринге страницы будет открываться пустой попап с картинкой; при изначальном значении null появляется ошибка
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      });
  }, []);

  function handleEditAvatarClick () {
    setOpenEditAvatarPopup(true);
  }

  function handleEditProfileClick () {
    setOpenProfilePopup(true);
  }

  function handleAddPlaceClick () {
    setOpenAddPlacePopup(true);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setOpenImagePopup(true);
  }

  function closeAllPopups () {
    setOpenEditAvatarPopup(false);
    setOpenProfilePopup(false);
    setOpenAddPlacePopup(false);
    setOpenImagePopup(false);
    setSelectedCard({});
  }

  function handleUpdateUser(userData) {
    api.editUserInfo(userData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        submit="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <div className="form__input-container">
            <input type="url" className="form__input form__input_type_url" id="image-url-input" placeholder="Ссылка на картинку" name="avatar" required />
            <span className="form__input-error image-url-input-error"></span>
          </div>
      </PopupWithForm>

      <PopupWithForm
        name="add-image"
        title="Новое место"
        submit="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <><div className="form__input-container">
            <input type="text" className="form__input form__input_type_name-of-card" id="name-of-card-input" placeholder="Название" name="name" minLength="2" maxLength="30" required />
            <span className="form__input-error name-of-card-input-error"></span>
          </div>
          <div className="form__input-container">
            <input type="url" className="form__input form__input_type_url" id="avatar-url-input" placeholder="Ссылка на картинку" name="link" required />
            <span className="form__input-error avatar-url-input-error"></span>
          </div></>
      </PopupWithForm>

      <PopupWithForm
        name="type_submit"
        title="Вы уверены?"
        submit="Да"
      />

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
