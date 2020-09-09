import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import { uuid } from 'uuidv4';
import db from '../database/connection';
import { User } from '../models/User';
import verifyUserExists from '../utils/verifyUserExists';

export default class UserController {
  create = async (req: Request, res: Response) => {
    const user: User = req.body;

    const hashPass = async (pass: string) => hash(pass, 10);

    if (await verifyUserExists(user)) {
      return res.json({error: 'User already exists'})
    }

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
