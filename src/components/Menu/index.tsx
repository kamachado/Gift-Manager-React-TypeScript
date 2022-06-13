import  Logo  from 'assets/logo.png';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cadastro',
    to: '/registration'
  }, {
    label: 'Sobre',
    to: '/about'
  }];
  return (
    <nav className={styles.menu}>
      <img src={Logo} />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}