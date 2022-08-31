// import { PrismaClient } from '@prisma/client';
import * as Express from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IContext {
    req: Express.Request;
    res: Express.Response;
    userLogged: string | JwtPayload | null;
    prisma: any;
}
