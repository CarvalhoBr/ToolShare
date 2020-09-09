import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import { uuid } from 'uuidv4';
import db from '../database/connection';
import { User } from '../models/User';

export default class UserController {
  create = async (req: Request, res: Response) => {
    const user: User = req.body;

    const hashPass = async (pass: string) => hash(pass, 10);

    const verifyUserExists = async (user: User) => {
      const selected = await db.select().from<User>('users').where('email', user.email);

      return !!selected;
    };

    if (verifyUserExists) {
      const finalUser = {
        id: uuid(),
        name: user.name,
        email: user.email,
        password: await hashPass(user.password),
      };

      await db('users').insert(finalUser);

      return res.status(200).json({ message: 'User created seccesfuly' });
    }
  }
}
