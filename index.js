const express = require('express')
const app = express();
const path = require('path')

app.get('/main', (req, res) => {
    res.send("welcome to the  World!!")
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
console.log('__dirname', path.join(__dirname));
res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}`)
})