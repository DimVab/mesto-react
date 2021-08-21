import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main (props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [isAvatarHovered, setAvatarHovered] = React.useState(false);

  React.useEffect(() => {
    api.getInitialData()
      .then((data) => {
        const [initialCardsData, userInfoData] = data;
        setUserName(userInfoData.name);
        setUserDescription(userInfoData.about);
        setUserAvatar(userInfoData.avatar);
        setCards(initialCardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mouseoverAvatar () {
    setAvatarHovered(true);
  }

  function mouseoutAvatar () {
    setAvatarHovered(false);
  }

  return(
    <main className="main">

      <section className="profile main__profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className={`profile__avatar ${isAvatarHovered && "profile__avatar_hovered"}`} src={userAvatar} onMouseEnter={mouseoverAvatar} alt="Текущий аватар" />
            <button className={`profile__avatar-edit-icon ${isAvatarHovered && "profile__avatar-edit-icon_hovered"}`} type="button" onClick={props.onEditProfile} onMouseLeave={mouseoutAvatar} aria-label="Изменить аватар"></button>
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