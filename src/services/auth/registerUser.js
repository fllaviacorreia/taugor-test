//administrador cadastra um novo funcionário
import { auth } from '@/config/firebase';


export default async function registerUser(email, password, setErrorMessage) {
    await auth.createUserWithEmailAndPassword(email, password)
        .then(() => { })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setErrorMessage(errorCode);
        });
}