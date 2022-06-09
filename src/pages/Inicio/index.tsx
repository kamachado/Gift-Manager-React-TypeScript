import pessoas from '../../assets/pessoas.png';
import departamentos from '../../assets/departamentos.png';
import busca from '../../assets/busca.png';
import styles from './Inicio.module.scss';
import { useState } from 'react';
import { Modal } from 'components/modal';
import TablePerson from './TablePerson';
import TableDepartment from './TableDepartment';

export default function Inicio() {
  const [isModalVisiblePerson,setIsModalVisiblePerson]=useState(false);
  const startModalPerson = ()=>{
    setIsModalVisiblePerson(true);
  };
  const closeModalPerson = ()=>{
    setIsModalVisiblePerson(false);
  };
  const [isModalVisibleDepartment,setIsModalVisibleDepartment]=useState(false);
  const startModalDepartment = ()=>{
    setIsModalVisibleDepartment(true);
  };
  const closeModalDepartment = ()=>{
    setIsModalVisibleDepartment(false);
  };
  return (
    <section>
      <h3 className={styles.titulo}>
        Histórico de cadastros
      </h3>
      <div className={styles.recomendados}>
        <div className={styles.recomendado}>
          <div className={styles.recomendado__imagem}>
            <img src={pessoas} alt="Pessoas" />
          </div>
          <button onClick={startModalPerson} className={styles.recomendado__botao}>
            Pessoas cadastradas
          </button>
          {isModalVisiblePerson?<Modal onClick={closeModalPerson} title="Lista de Pessoas cadastradas"><TablePerson/></Modal>: null}
        </div>
        <div className={styles.recomendado}>
          <div className={styles.recomendado__imagem}>
            <img src={departamentos} alt="Pessoas" />
          </div>
          <button  onClick={startModalDepartment} className={styles.recomendado__botao}>
            Departamentos cadastrados
          </button>
          {isModalVisibleDepartment?<Modal onClick={closeModalDepartment} title="Lista de Departamentos cadastrados"><TableDepartment/></Modal>: null}
        </div>
        <div className={styles.recomendado}>
          <div className={styles.recomendado__imagem}>
            <img src={busca} alt="Pessoas" />
          </div>
          <button className={styles.recomendado__botao}>
            Buscar cadastro
          </button>
        </div>
      </div>

    </section>
  );
}