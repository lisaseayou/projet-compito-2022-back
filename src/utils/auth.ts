import * as jwt from 'jsonwebtoken';

/**
 * generate token JWT
 */
const generateToken = (infos: any) => {
    if (!process.env.SECRET_KEY) {
        throw new Error('SECRET_KEY must be set in environment');
    }

    const token = jwt.sign(infos, process.env.SECRET_KEY, {
        expiresIn: '7d',
    });

    return token;
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
