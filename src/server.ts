import dotenv from 'dotenv';
import app from '../app';

dotenv.config();
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`API rodando na porta http://localhost:${PORT}`)
})