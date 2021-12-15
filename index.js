
//express:thư viện đã tải
//=>nạp ra ngoài
const express = require('express')
//khởi tạo function
const app = express()
//cổng 
const port = 3000
//
app.get('/', (req, res) => { res.send('Hello World') }
)

app.listen(port, () => console.log(`tuyến đường http:localhost:${port}`))