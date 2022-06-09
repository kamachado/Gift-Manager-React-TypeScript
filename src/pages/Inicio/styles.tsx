import React from 'react';
import styled from 'styled-components';


export const Table = styled.table`
padding:0.05em;
background: #181717;
text-align: center;
width: 40em;
position: absolute;
left:10%;
`;

export const TableHeader = styled.thead`
background: #75a2f5;
padding:0.05em;
border: 0.05em solid #000000;
text-align: center;
font-family: 'Rubik', sans-serif;

`;

export const Tbody = styled.tbody`
background-color: aliceblue;
`;
export const Th = styled.th`
     padding:0.05em;
     width: 5em; 
     font-size:1em;
`;

export const Td = styled.td`
     color:#000000;
    padding:0.05em;
    font-family: 'Rubik', sans-serif; 
    font-size:1em;
`;