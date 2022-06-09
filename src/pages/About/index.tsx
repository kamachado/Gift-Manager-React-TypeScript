import styles from './about.module.scss';
import imgAbout from '../../assets/about.gif';

export default function About() {
  return (
    <section>
      <h3 className={styles.title}> Sobre </h3>
      <div className={styles.aboutUs}>
        <img src={imgAbout} alt="Gift Manager" />
        <div className={styles.aboutUs__text}>
          <p>
             Nós do Gift Manager oferecemos aos nossoa usuários, o software mais rapido e organizado para fazer a gestão de seus funcionário! Prezamos pela agilidade da entre dos cadastros armazenados em nosso sistema para assim atender da melhor maneira nossos usuários
          </p>
          <p>
            É um software ideal para a empresa lembrar dos aniversários de todos os colaboradores podendo assim realizar surpresas unicas e memoraveis. 
          </p>
          <p>
            Para entregar o melhor temos uma equipe de desenvolvimento totalmente dedicada para o controle do software, sempre buscando o melhor para o usuário. 
          </p>

        </div>
      </div>

    </section>
  );
}