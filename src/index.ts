import express from 'express';

const app = express();
const port = 3000;

app.use('/include',express.static('./public'))
app.use('/', express.static('./public/html'));

app.listen(port, () => console.log(`server started at localhost:${port}`));