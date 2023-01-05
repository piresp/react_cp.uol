import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header({onShowCart}) {
  return (
    <>
      <header className={classes.header}>
        <h1>Comidinhas</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </>
  );
}
