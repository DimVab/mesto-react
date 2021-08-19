import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        submit="Сохранить"
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

      <template className="card-template">
        <li className="element">
          <img className="element__image" />
          <div className="element__container">
            <h2 className="element__name"></h2>
            <div className="element__likes-container">
              <button className="element__like" type="button" aria-label="Поставить лайк"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
          <button className="element__delete" type="button" aria-label="Удалить элемент"></button>
        </li>
      </template>
    </>
  );
}

export default App;
