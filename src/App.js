import './App.css';

function App() {
  return (
    <>
      <header className="header root__header">
        <img src="<%=require('./images/icons/mesto.svg')%>" alt="Место. Россия" className="header__logo" />
      </header>

      <main className="main">

        <section className="profile main__profile">
          <div className="profile__container">
            <div className="profile__avatar-container">
              <img className="profile__avatar" src="#" alt="Текущий аватар" />
              <button className="profile__avatar-edit-icon" type="button" aria-label="Изменить аватар"></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__job"></p>
              <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="elements main__elements">
          <ul className="elements__list">

          </ul>
        </section>

      </main>

      <footer className="footer root__footer">
        <p className="footer__copyright">© 2021 Mesto Russia</p>
      </footer>

      <section className="popup popup_type_edit-profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
          <form className="form" name="about" novalidate>
            <div className="form__input-container">
              <input type="text" className="form__input form__input_type_name" id="name-input" placeholder="Введите своё имя" name="name" minlength="2" maxlength="40" required />
              <span className="form__input-error name-input-error"></span>
            </div>
            <div className="form__input-container">
              <input type="text" className="form__input form__input_type_job" id="job-input" placeholder="Ваша профессия" name="about" minlength="2" maxlength="200" required />
              <span className="form__input-error job-input-error"></span>
            </div>
            <input type="submit" className="form__submit-button" value="Сохранить" />
          </form>
        </div>
      </section>

      <section className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
          <form className="form" name="avatar" novalidate>
            <div className="form__input-container">
              <input type="url" className="form__input form__input_type_url" id="image-url-input" placeholder="Ссылка на картинку" name="avatar" required />
              <span className="form__input-error image-url-input-error"></span>
            </div>
            <input type="submit" className="form__submit-button" value="Сохранить" />
          </form>
        </div>
      </section>

      <section className="popup popup_type_add-image">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
          <form className="form" name="place" novalidate>
            <div className="form__input-container">
              <input type="text" className="form__input form__input_type_name-of-card" id="name-of-card-input" placeholder="Название" name="name" minlength="2" maxlength="30" required />
              <span className="form__input-error name-of-card-input-error"></span>
            </div>
            <div className="form__input-container">
              <input type="url" className="form__input form__input_type_url" id="avatar-url-input" placeholder="Ссылка на картинку" name="link" required />
              <span className="form__input-error avatar-url-input-error"></span>
            </div>
            <input type="submit" className="form__submit-button" value="Создать" />
          </form>
        </div>
      </section>

      <section className="popup popup_type_submit">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_submit">Вы уверены?</h2>
          <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
          <form className="form" name="submit" novalidate>
            <input type="submit" className="form__submit-button" value="Да" />
          </form>
        </div>
      </section>

      <section className="popup popup_type_open-image">
        <figure className="popup__image-container">
          <button className="popup__close-icon" type="button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </section>

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
