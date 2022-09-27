import * as jwt from 'jsonwebtoken';
import User from '../models/User.model';

/**
 * generate token JWT for auth
 */
const generateToken = (infos: object) => {
    if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be set in environment');
    }

    const token = jwt.sign(infos, process.env.SECRET_KEY, {
        expiresIn: '7d',
    });

    return token;
};

/**
 * generate token JWT for change password
 */
export const generateTokenResetPassword = (user: User) => {
    if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be set in environment');
    }

    const { id, name, email } = user;
    return jwt.sign({ id, name, email }, process.env.SECRET_KEY);
};

/**
 * Get user logged
 */
export const getUser = (token: string) => {
    if (process.env.SECRET_KEY) {
        let payload = null;

        if (token) {
            try {
                payload = jwt.verify(token, process.env.SECRET_KEY);
            } catch (e: any) {
                payload = null;
            }
        }
        return payload;
    }

    return null;
};

export default generateToken;
