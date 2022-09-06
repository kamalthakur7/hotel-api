const express = require('express');
const cors = require('cors');
const routes = require('./routes/hotelRouter')
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/hotels', routes)

app.get('/', (req, res) => {
    res.json({ message: 'hello' });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});