import React, { Children, ReactComponentElement } from 'react';
import './styles.css';

export interface ModalProps {
    title: string;
    children?: | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    onClick:()=>void;

}

export function Modal(props: ModalProps) {
  const { title, children, onClick } = props;
  return (
    <div className="modal">
      <div className="container">
        <button onClick={onClick} className="close">X</button>
        <h1 className="title">{title}</h1>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );

}