import Button from '@/components/elements/button';
import Header from '@/components/header';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizedTables from './list';

import './style.css';
export default function List() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/employees/create');
  };

  return (
    <div className='containerListEmployees'>
      <Header/>
      <br/>
      <br/>
      <br/>
      
      <div className='containerButton'>
        <Button title='Novo cadastro' typeButton='input-button' onClick={handleSubmit}/>
      </div>
      <section className='containerTable'>
          <CustomizedTables/>
      </section>

      
    employees
    </div>
  );
}

// const mapStateToProps = ({ auth }) => {
//   return {
//     auth
//   };
// };

// export default Connect(mapStateToProps)(List);