import './styles.css';
import FormDepartment from 'components/Form/formDepartment';
import FormPerson from 'components/Form/formPerson';
import { useEffect, useState } from 'react';

export default function Cadastro() {
  const [selectValue, setSelectValue]= useState<string>();
  

  return (
    <div>
      <h2 >Formulário de cadastro </h2>
      <div className='div_select'>
        <label >Selecione o tipo de cadastro que deseja realizar</label>
        <select name="select" onChange={ e =>{setSelectValue(e.target.value);}} className='selectCadastro'>
          <option value="person" >Pessoa</option>
          <option value="department" selected >Departamento</option>
        </select>
        {selectValue==='person'?<FormPerson/>:<FormDepartment/>}
      </div>
    </div>

  );
}