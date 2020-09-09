import { User } from '../models/User';
import db from '../database/connection';

const verifyUserExists = async (user: User) => {
    const selected = await db.select().from<User>('users').where('email', user.email);

    const exists = (selected.length > 0)

    return exists
};

export default verifyUserExists;