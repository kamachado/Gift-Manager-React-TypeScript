import React, { useEffect, useState } from 'react';
import {Table,TableHeader,Tbody,Th,Td} from './styles';


interface DataDepartment {
    id: number,
    Name: string,
    Person_Responsible_Id: number

}


export default function TableDepartment() {
  const [listPerson, setListPerson] = useState<DataDepartment[]>([]);
  function searchDepartment(): void {
    fetch('http://localhost:8081/department').then((res) => res.json()).then((json) => setListPerson(json));
  }
  useEffect(searchDepartment, []);

  function removeDepartmentByID(id: number) {
    fetch('http://localhost:8081/department/' + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8'}
    }).then((res) => res.json()).then((res) => {
      if (!res) {
        alert('Erro na requisição');
      } else {
        alert(`O setor de id: ${id} foi removida com sucesso`);
        return searchDepartment();
      }
    });

  }



  return (
    <Table>
      <TableHeader>
        <tr>
          <Th>Id</Th>
          <Th>Nome do Departamento</Th>
          <Th>Id do responsável</Th>
          <Th>Remover cadastro</Th>
        </tr>
      </TableHeader>
      <Tbody >
        {listPerson?.map(item => <tr key={item.id}><Td>{item.id}</Td><Td>{item.Name}</Td><Td>{item.Person_Responsible_Id}</Td><Td><button onClick={()=>removeDepartmentByID(item.id)} style={{  width: '5em',background:'#004AAD',color:'white',fontSize:'1em'}} >remove</button></Td></tr>)}
      </Tbody>
    </Table>
  );

}
