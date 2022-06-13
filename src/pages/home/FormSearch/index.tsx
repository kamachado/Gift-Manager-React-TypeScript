import React, { useEffect, useState } from 'react';
import './stylesSearch.css';





interface DataDepartment {
    Name: string,
    Person_Responsible_Id: string

}

interface DataPerson {
    Name: string,
    CPF: string,
    Birth_Date: string,
    Dad_Id: number,
    Mom_Id: number,
    is_employee: number
}


export default function FormSearch() {

  const [Person, setPerson] = useState<DataPerson>();
  const [search, setSearch] = useState('');

  const [Department, setDepartment] = useState<DataDepartment>();

  function searchPerson(id: string): void {
    fetch('http://localhost:8081/person/' + id).then((res) => res.json()).then((json) => setPerson(json));

  }
  async function submitSearchPerson(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    setDepartment(undefined);
    const search_person = search;
    if (search_person === '') {
      alert('É preciso informar um ID para buscar o cadastro');
    } else {
      searchPerson(search_person);
      setSearch('');
    }
  }


  function searchDepartment(id: string) {
    fetch('http://localhost:8081/department/' + id).then((res) => res.json()).then((json) => setDepartment(json));
  }

  async function submitSearchDepartment(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    setPerson(undefined);
    const search_department = search;
    if (search_department === '') {
      alert('É preciso informar um ID para buscar o cadastro');
    } else {
      searchDepartment(search_department);
      setSearch('');
    }
  }




  return (
    <form className="form_api">
      <label className='label_search' >Informe o ID que deseja buscar</label>
      <input className='input_search' type="text" name="Search" value={search} onChange={e => setSearch(e.target.value)} />
      <button className='button_submit' type='submit' onClick={ev => (submitSearchPerson(ev))}>Buscar pessoa</button>
      <button className='button_submit' type='submit' onClick={ev => (submitSearchDepartment(ev))}>Buscar departamento</button>
      {Person ? <div className='information'>
        <h1 className='information_title'>Informações da busca realizada</h1>
        <p className='information_content'>{Person.Name == undefined ? 'Nenhum cadastro encontrado' : 'Nome: ' + Person.Name}</p>
        <p className='information_content'>{Person.Birth_Date == undefined ? '' : 'Data de nascimento: ' + Person.Birth_Date}</p>
        <p className='information_content'>{Person.CPF == undefined ? '' : 'CPF: ' + Person.CPF}</p>
        <p className='information_content'>{Person.Dad_Id == undefined ? ' ' : Person.Dad_Id ? 'Id do Pai: ' + Person.Dad_Id : 'Id do Pai: Não informado'}</p>
        <p className='information_content'>{Person.Mom_Id == undefined ? ' ' : Person.Mom_Id ? 'Id da Mãe: ' + Person.Mom_Id : 'Id da Mãe: Não informado'}</p>
        <p className='information_content'>{Person.is_employee == undefined ? ' ' : Person.is_employee == 1 ? 'É um funcionario: Sim' : 'É um funcionario: Não'}</p>
      </div> : <p></p>}
      {Department ? <div className='information'><h1 className='information_title'>Informações da busca realizada</h1>
        <p className='information_content'>{Department.Name == undefined ? 'Nenhum cadastro encontrado' : 'Nome do departamento: ' + Department.Name}</p>
        <p className='information_content'>{Department.Person_Responsible_Id == undefined ? '' : 'Id do responsável: ' + Department.Person_Responsible_Id}</p>
      </div> : <p></p>}
    </form>

  );
}