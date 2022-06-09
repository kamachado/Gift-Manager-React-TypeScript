import { useState } from 'react';


interface dataDepartment{
    Name:string,
    Person_Responsible_Id:string
}




export default function FormDepartment() {

  const [nameInput,setNameInput]=useState('');
  const [responsibleIdInput,setResponsibleIdInput]=useState('');


  async function submitDepartment(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    const Name = nameInput;
    const Person_Responsible_Id = responsibleIdInput;
   
    const result = await postDepartment({ Name,Person_Responsible_Id });

    if (result) {
      setNameInput('');
      setResponsibleIdInput('');
    }
  }


  async function postDepartment(data:dataDepartment) {
    
    const res = await fetch('http://localhost:8081/department',{
      method:'post',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    });
    if (!res) {
      alert('Erro na requisição');
      return false;
    }
    return true;
  }
  return (
    <form className="form_api">
      <label >Nome do setor</label>
      <input type="text" id="Name_department" value={nameInput} onChange={e => setNameInput(e.target.value)}/>

      <label >Id Responsavel</label>
      <input type="text" id="Person_Responsible_Id" value={responsibleIdInput} onChange={e => setResponsibleIdInput(e.target.value)} />

      <button type="submit" id="button_send_person" className="button_send" onClick={ev => submitDepartment(ev)}>Cadastrar</button>

    </form>

  );
}