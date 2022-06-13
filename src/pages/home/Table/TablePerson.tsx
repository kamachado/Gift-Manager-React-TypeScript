import React, { useEffect, useState } from 'react';
import { Table, TableHeader, Tbody, Th, Td } from './stylesTable';


interface DataPerson {
  Id: number,
  Name: string,
  CPF: string,
  Birth_Date: string,
  Dad_Id: number,
  Mom_Id: number,
  is_employee: number
}




export default function TablePerson() {
  const [listPerson, setListPerson] = useState<DataPerson[]>([]);

  function searchPerson(): void {
    fetch('http://localhost:8081/person').then((res) => res.json()).then((json) => setListPerson(json));
  }
  useEffect(searchPerson, []);

  function removePersonByID(id: number) {
    fetch('http://localhost:8081/person/' + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8'}
    }).then((res) => res.json()).then((res) => {
      if (!res) {
        alert('Erro na requisição');
      } else {
        alert(`A pessoa de id: ${id} foi removida com sucesso`);
        return searchPerson();
      }
    });

  }

  return (
    <Table>
      <TableHeader>
        <tr>
          <Th>Id</Th>
          <Th>Nome</Th>
          <Th>CPF</Th>
          <Th>Data de nascimento</Th>
          <Th>Pai Id</Th>
          <Th>Mãe Id</Th>
          <Th>É funcionário (1-sim/ 0-não)</Th>
          <Th>Remover cadastro</Th>

        </tr>

      </TableHeader>
      <Tbody >
        {listPerson?.map(item => <tr key={item.Id}><Td>{item.Id}</Td><Td>{item.Name}</Td><Td>{item.CPF}</Td><Td>{item.Birth_Date}</Td><Td>{item.Dad_Id}</Td>
          <Td>{item.Mom_Id}</Td><Td>{item.is_employee}</Td><Td><button onClick={() => removePersonByID(item.Id)} style={{ width: '5em', background: '#004AAD', color: 'white', fontSize: '1em' }} >remove</button></Td></tr>)}
      </Tbody>

    </Table>



  );

}
