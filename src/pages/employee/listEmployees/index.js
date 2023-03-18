import Button from '@/components/elements/button';
import Header from '@/components/header';
import { db } from '@/config/firebase';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizedTables from './list';
import '../style.css';


export default function List() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([])
  
  React.useEffect(() => {
    const data = db.collection('users').orderBy('savedAt', 'desc');
    data.onSnapshot((items) => {
      setUsers(items.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
  }, []);
 

  function handleGoTo(uri){
    navigate(uri);
  }

  function createData(id, photo, name, email, bornDate, phone, office, sector, admissionDate, levelAccess, action) {
    return { id, photo, name, email, bornDate, phone, office, sector, admissionDate, levelAccess, action };
  }

  const rows = users.filter(user  =>  user.data.status !== 'inactive').map((user) =>
    createData(
      user.id,
      user.data.urlImage,
      `${user.data.firstName} ${user.data.lastName}`,
      user.data.email,
      user.data.bornDate,
      user.data.phone,
      user.data.office,
      user.data.sector,
      user.data.admissionDate,
      user.data.levelAccess,
    )
  )

  return (
    <div className='containerListEmployees'>
      <Header />
      <br />
      <br />
      <br />

      <div className='containerButton'>
        <Button 
        title='Novo cadastro' 
        typeButton='input-button' 
        onClick={() => handleGoTo('/employees/create')} 
        />
      </div>
      <section className='containerTable'>
        {CustomizedTables(rows, handleGoTo)}
      </section>
    </div>
  );
}