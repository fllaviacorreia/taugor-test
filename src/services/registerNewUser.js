//o próprio usuário se cadsatra
import { login, setUser } from '@/config/auth';
import { auth } from '@/config/firebase';

async function register(event, setErrorMessage, navigate) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (!email || !password) {
        setErrorMessage("E-mail e/ou senha não preenchidos.");
    } else {
        setErrorMessage('')
        await auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const configureUser = {
                    id: user.uid,
                    firstName: data.get('firstName'),
                    lastName: data.get('lastName'),
                    email: data.get('email'),
                    levelAccess: 'minimun',
                    createdAt: new Date(),
                }
                
                login(JSON.stringify(user.refreshToken));
                setUser(JSON.stringify(configureUser));
                navigate('/home');
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage(errorCode);
            });
    }
}
export default register;