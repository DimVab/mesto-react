import React from 'react';

function Footer () {

  const [years, setYears] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setYears(date.getFullYear());
    });
  });

  return(
    <footer className="footer root__footer">
      <p className="footer__copyright">© {years} Mesto Russia</p>
    </footer>
  )
}

export default Footer;