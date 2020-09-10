import { Request, Response } from 'express';
import { hash, genSalt } from 'bcryptjs';
import { uuid } from 'uuidv4';
import db from '../database/connection';
import { User } from '../models/User';
import verifyUserExists from '../utils/verifyUserExists';
import jwt from 'jsonwebtoken';
import authConfig from '../config/authConfig.json'

function generateToken(params = {}){
  return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400,
  } )
}

export default class UserController {
  
  async create (req: Request, res: Response){
    const user: User = req.body;

    const hashPass = async (pass: string, salt: string) => await hash(pass, salt);

    if (await verifyUserExists(user)) {
      return res.json({error: 'User already exists'})
    }

    const salt = await genSalt(10);

    const finalUser = {
      id: uuid(),
      name: user.name,
      email: user.email,
      salt,
      password: await hashPass(user.password, salt),
    };

    await db('users').insert(finalUser);

    return res.status(200).json({ message: 'User created seccesfuly' });
  }

  async authenticate (req: Request, res: Response){
    const { email, password } = req.body;
    
    const user: User = await db('users').where('email', email).first();

    if(!user){
      return res.json({'[ERROR]': 'User do not exists'});
    }
    if((await hash(password, user.salt)) !== user.password){
      return res.json({'[ERROR]': 'Invalid password'})
    }
    const token = generateToken({id: user.id})

    return res.json({
      name: user.name,
      email: user.email,
      id: user.id,
      token
    })
  } 

}
