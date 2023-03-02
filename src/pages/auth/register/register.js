import { login } from '@/config/auth';
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
                console.log(user);
                login(JSON.stringify(user.refreshToken));
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