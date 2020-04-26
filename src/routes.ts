import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req : Request, res: Response) {
  const user = createUser({  
    name : 'H',
    email : 'h@gmail.com', 
    password: '123456',
    techs: [
      'Node',
      {
        title: 'ReactJS',
        experience: 100,
      }
    ],
  }) ;

  return res.json({ message : 'Hello Again'});
}