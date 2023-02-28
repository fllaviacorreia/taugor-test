import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Root() {
  return (
    <div>
      <Link to={"login"}>Faça login</Link>
      {'  '}
      <Link to={ "register" }>Cadastre-se</Link>
    </div>
  );
}
