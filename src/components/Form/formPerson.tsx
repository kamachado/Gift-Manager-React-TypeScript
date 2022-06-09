import { useState } from 'react';

interface dataPerson {
    Name: string,
    CPF: string,
    Birth_Date: string,
    Dad_Id: string | null,
    Mom_Id: string | null,
    is_employee: string,

}


export default function FormPerson() {

  const [nameInput, setNameInput] = useState('');
  const [cpfInput, setCpfInput] = useState('');
  const [birthInput, setBirthInput] = useState('');
  const [dadInput, setDadInput] = useState('');
  const [momInput, setMomInput] = useState('');
  const [isEmployeeInput, setIsEmployeeInput] = useState('');



  async function submitPerson(ev: React.MouseEvent<HTMLButtonElement>) {

    ev.preventDefault();
    const Name = nameInput;
    const CPF = cpfInput;
    const Birth_Date = birthInput;
    let Dad = dadInput || null;
    let Mom = momInput || null;
    const is_employee = isEmployeeInput;

    const Dad_Id = (Dad == '' ? Dad = null : Dad);
    const Mom_Id = (Mom == '' ? Mom = null : Mom);

    const result = await postPerson({ Name, CPF, Birth_Date, Dad_Id, Mom_Id, is_employee });
    if (result) {
      setBirthInput('');
      setCpfInput('');
      setDadInput('');
      setMomInput('');
      setNameInput('');
      setIsEmployeeInput('');

    }

  }

  async function postPerson(data: dataPerson) {

    const res = await fetch('http://localhost:8081/person', {
      method: 'post',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    });
    if (!res) {
      alert('Erro na requisição');
      return false;
    }
    return true;
  }


  return (
    <form className="form_api">
      <label >Nome</label>
      <input type="text" id="Name" name="Name" value={nameInput} onChange={e => setNameInput(e.target.value)} />

      <label >CPF</label>
      <input type="text" id="CPF" value={cpfInput} onChange={e => setCpfInput(e.target.value)} />

      <label >Data de nascimento</label>
      <input type="date" id="Birth_Date" value={birthInput} placeholder="DD/MM/AAAA" onChange={e => setBirthInput(e.target.value)} />

      <label >Id do pai</label>
      <input type="text" id="Dad_Id" value={dadInput} onChange={e => setDadInput(e.target.value)} />

      <label >Id da mãe</label>
      <input type="text" id="Mom_Id" value={momInput} onChange={e => setMomInput(e.target.value)} />

      <label >É funcionário? [1-sim / 0-não]</label>
      <input type="text" id="is_employee" value={isEmployeeInput} onChange={e => setIsEmployeeInput(e.target.value)} />
      <button type="submit" id="button_send_person" className="button_send" onClick={ev => submitPerson(ev)}>Cadastrar</button>
    </form>

  );
}