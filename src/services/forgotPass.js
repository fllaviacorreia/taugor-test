import { auth } from "@/config/firebase";

async function forgotPass(event, setMessage) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');

    if (!email) {
        setMessage({ messageUser: "E-mail e/ou senha não preenchidos.", error: true });
    } else {
        setMessage({ messageUser: '', error: false })
        await auth.sendPasswordResetEmail(email)
            .then(function () {
                setMessage({
                    messageUser: 'Verifique seu email.',
                    error: false
                });

            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setMessage({ messageUser: error.code, error: true });
            });
    }
}

export default forgotPass;