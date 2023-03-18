import React from 'react';
import Header from '@/components/header';

import './style.css';
import { isAuthenticated } from '@/config/auth';
import { Link } from 'react-router-dom';
// import { isRegistered } from '@/config/auth';
// import registerUser from '../../services/registerData';

export default function Home() {
  // React.useEffect(() => {
  //     if(isRegistered){
  //       registerUser();
  //     }
  // }, [])

  return (
    isAuthenticated 
    ?
    <section className="containerHome">
      <Header />
      <br />
      <br />
      <br />

      Olá, seja bem vindo!
    </section>
    : <Link to={"login"}>Faça login</Link>
  )
}