
export default function Cadastro(){
  return(
    <div>
      <h2 >Formulário de cadastro de pessoas</h2>
      <form>
        <label >Nome</label>
        <input type = "text" id="Name" />

        <label >CPF</label>
        <input type = "text" id="CPF"  />

        <label >Data de nascimento</label>
        <input type ="date" id="Birth_Date" placeholder = "DD/MM/AAAA" />

        <label >Id do pai</label> 
        <input type ="text" ></input>

        <label >Id da mãe</label> 
        <input type ="text" />

        <label >É funcionário? [1-sim / 0-não]</label> 
        <input type ="text"  />
        <button>Cadastrar</button>
      </form>
    </div>
       
  );
}