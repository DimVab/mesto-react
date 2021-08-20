import React from 'react'
import api from '../utils/Api';
import Card from './Card';

function Main (props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      });
  }, []);

  return(
    <main className="main">

      <section className="profile main__profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Текущий аватар" />
            <button className="profile__avatar-edit-icon" type="button" onClick={props.onEditProfile} aria-label="Изменить аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
            <button className="profile__edit-button" type="button" onClick={props.onAddPlace} aria-label="Редактировать"></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onEditAvatar} aria-label="Добавить"></button>
      </section>

      <section className="elements main__elements">
        <ul className="elements__list">

          {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          })}

        </ul>
      </section>

    </main>

  )
}

export default Main;