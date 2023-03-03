
import { setUser } from '@/config/auth';
import registerFile from './registerFile';
import registerUser from './registerUser';


async function registerDataAdmin(event, setErrorMessage, userData, setUserData, navigate) {
    event.preventDefault();

    const email = userData.email;
    const password = userData.password;

    if (!email || !password) {
        setErrorMessage("E-mail e/ou senha não preenchidos.");
    } else {
        setErrorMessage('');
        console.log(userData.id);
        await registerUser(setErrorMessage, userData, setUserData); //cadastra o novo usuário
        await registerFile(userData.photo, userData.id); //cadastra foto/pdf
        console.log(userData.id);
        
        setUser(JSON.stringify(userData));
        navigate('/employees');
    }
}

export default registerDataAdmin;