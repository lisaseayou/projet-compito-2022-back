import * as nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '3569601b87946c',
        pass: '290e7c75b10f0b',
    },
});

export const passwordResetEmail = (text: string) => `
    <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
    ">
        <h2>Bonjour</h2>
        <p>${text}</p>
        <p>Merci et à bientôt.</p>
        <p>L'équipe Compito.</p>
    </div>
`;

export default transport;
