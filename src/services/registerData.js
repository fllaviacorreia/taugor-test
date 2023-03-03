import { getUser } from '@/config/auth';
import { db } from '@/config/firebase';

async function registerUser() {
    await db
        .collection('users')
        .add({
            ...JSON.parse(getUser()),
            savedAt: new Date()
        });
}

export default registerUser;