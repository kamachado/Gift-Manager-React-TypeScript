import pessoas from '../../assets/pessoas.png';
import departamentos from '../../assets/departamentos.png';
import busca from '../../assets/busca.png';
import styles from './home.module.scss';
import { useState } from 'react';
import { Modal } from 'components/modal';
import TablePerson from './Table/TablePerson';
import TableDepartment from './Table/TableDepartment';
import FormSearch from './FormSearch';

export default function Home() {
  const [isModalVisiblePerson, setIsModalVisiblePerson] = useState(false);
  const [isModalVisibleDepartment, setIsModalVisibleDepartment] = useState(false);
  const [isModalVisibleSearch, setIsModalVisibleSearch] = useState(false);
 

  const startModalPerson = () => {
    setIsModalVisiblePerson(true);
  };

  const closeModalPerson = () => {
    setIsModalVisiblePerson(false);
  };

  const startModalDepartment = () => {
    setIsModalVisibleDepartment(true);
  };
  const closeModalDepartment = () => {
    setIsModalVisibleDepartment(false);
  };

  const startModalSearch = () => {
    setIsModalVisibleSearch(true);
  };
  const closeModalSearch = () => {
    setIsModalVisibleSearch(false);
  };


  return (
    <section>
      <h3 className={styles.title_page}>
        Histórico de cadastros
      </h3>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.item__image}>
            <img src={pessoas} alt="Pessoas" />
          </div>
          <button onClick={startModalPerson} className={styles.item__button}>
            Pessoas cadastradas
          </button>
          {isModalVisiblePerson ? <Modal onClick={closeModalPerson} title="Lista de Pessoas cadastradas"><TablePerson /></Modal> : null}
        </div>
        <div className={styles.item}>
          <div className={styles.item__image}>
            <img src={departamentos} alt="Pessoas" />
          </div>
          <button onClick={startModalDepartment} className={styles.item__button}>
            Departamentos cadastrados
          </button>
          {isModalVisibleDepartment ? <Modal onClick={closeModalDepartment} title="Lista de Departamentos cadastrados"><TableDepartment /></Modal> : null}
        </div>
        <div className={styles.item}>
          <div className={styles.item__image}>
            <img src={busca} alt="Pessoas" />
          </div>
          <button className={styles.item__button} onClick={startModalSearch}>
            Buscar cadastro
          </button>
          {isModalVisibleSearch ? <Modal onClick={closeModalSearch} title="Busca de cadastro"><FormSearch /></Modal> : null}
        </div>
      </div>

    </section>
  );
}