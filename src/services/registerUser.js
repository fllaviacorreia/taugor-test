//administrador cadastra um novo funcionário
import { auth } from '@/config/firebase';

async function registerUser(setErrorMessage, userData, setUserData) {
    await auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUserData({ ...userData, ['id']: user.uid });
        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            setErrorMessage(errorCode);
        });
}
export default registerUser;