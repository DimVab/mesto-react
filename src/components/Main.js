import kustoAvatar from '../images/kusto.jpg';

function Main () {
  return(
    <main className="main">

      <section className="profile main__profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={kustoAvatar} alt="Текущий аватар" />
            <button className="profile__avatar-edit-icon" type="button" aria-label="Изменить аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив-Кусто</h1>
            <p className="profile__job">Исследователь океана</p>
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
  )
}

export default Main;