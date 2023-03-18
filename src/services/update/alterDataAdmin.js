import { getUrl, logout, removeItem, removeUrl } from '@/config/auth';
import { auth } from '@/config/firebase';
import registerUser from '../auth/registerUser';
import registerDoc from '../create/registerDoc';
import registerImage from '../create/registerImage';
import alterDoc from './alterDoc';

async function alterByAdmin(data, setErrorMessage, userData) {
    if (userData.levelAccess === 'medium' && data.get('password')) {
        //cadastra o novo usuário no auth
        await registerUser(userData.email, data.get('password'), setErrorMessage);
        const newUser = auth.currentUser.uid;
        await alterDoc(userData, newUser);
    }
    else {
        await alterByEmployee(data, userData)
    }
}

async function alterByEmployee(userData, id) {
    await alterDoc(userData, id);
}


export default async function alterDataAdmin(event, setErrorMessage, handleRedirect, userCopy, id, url, changedImg) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const atualUser = auth.currentUser.email;
    const levelAccess = data.get('levelAccess') ? data.get('levelAccess') : 'minimum'

    if (changedImg && data.get('photo') && data.get('photo').type.match('image.*'))
        await registerImage(data.get('photo'), data.get('email')); //cadastra foto/pdf

    const urlImage = changedImg ? getUrl() : url;

    const userData = {
        urlImage,
        gender: data.get('gender'),
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: userCopy.email,
        address: data.get('address'),
        phone: data.get('phone'),
        bornDate: data.get('bornDate'),
        office: data.get('office'),
        sector: data.get('sector'),
        admissionDate: data.get('admissionDate'),
        salary: data.get('salary'),
        levelAccess,
        status: 'activated',
        alteredBy: atualUser,
        alteredAt: new Date(),
        previousRecord: id,
    }

        await registerDoc(userCopy, 'referencesAlterations')
    // único que pode criar novos usuários com login e senha
    if (atualUser === 'administrador@taugor.teste.com') {
        await alterByAdmin(data, setErrorMessage, userData);
        removeItem();
        removeUrl();
        if (data.get('password')) {
            logout();
            auth.signOut
            handleRedirect('/login')
        } else { handleRedirect('/employees') }
    }
    //funcionário gerando novo funcionário
    else {
        await alterByEmployee(userData, id)
        removeUrl();
        removeItem();
        handleRedirect('/employees');
    }
}


