import exprress from 'express';
const app = express();
const PORT = process.env.PORT || 4000;

app.use()(express.static('client/dist'));

app.listen(PORT, () => console.log('Server is listening on http://localhost:${PORT}'));