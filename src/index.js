// const http = require('http')

import express from 'express'
import { config } from 'dotenv'
import userRouter from './routers/user.js'
import shopRouter from './routers/shop.js'

config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/static', express.static('public'))

app.use('/user',userRouter)
app.use('/shop', shopRouter)

// app.use((req, res, next) => {
//     console.log('middleware')
//     // res.json({
//     //     middleware: true
//     // })
//     req.asdfasdf = 234234234
//     next()
// })


// const routers = [
//     {
//         path: '/',
//         handle: [
//             Function,
//             Function
//         ]
//     },
//     {
//         path: '/form',
//         handle: [
//             Function,
//         ]
//     },
// ]

// app.get('/', (req, res, next) => {
//     console.log('1')
//     res.json({
//         a: req.asdfasdf
//     })
//     // if(...if.){
//     //     return res.json({
//     //         a: 1,
//     //         b: 2
//     //     }) 
//     // }
//     // next()

// })
// app.get('/', (req, res, next) => {
//     console.log('2')
//     next()
//     // res.json({
//     //     c: 1,
//     //     d: 2
//     // })
// })

// app.post('/form', (req, res) => {
//     console.log(req.body)
//     res.json(req.body)
// })

// app.get('/form', (req, res) => {
//     res.write(`
//         <!doctype html>
//         <html>
//         <body>
//             <form action="/form" method="post" enctype="application/json">
//                 <input type="text" name="name" /><br />
//                 <input type="number" name="age" /><br />
//                 <button>Save</button>
//             </form>
//         </body>
//         </html>
//     `)
// })

app.all('*', (req, res) => {
    res.status(404)
    res.json({
        error: 'Page not found'
    })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


// const server = http.createServer((req, res) => {
//     // res.writeHead(400)
//     // res.writeHead(200, {"Content-Type": "application/json"});
//     // res.write('Hello worldaaaaaaaaaaaaa' + req.url);


//     // console.log(req.url)


//     // if(req.url === '/a'){
//     //     res.write(JSON.stringify({a: true}))
//     // }else if(req.url === '/b'){
//     //     res.write(JSON.stringify({b: true}))
//     // }
//     if (req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString(); // convert Buffer to string
//             // console.log(body)
//             const temp = parse(body)
//             console.log(temp.name)
//             // const txt = q.year + ' ' + q.month
//             res.write(temp.name)
//         });
//     } else {
//         res.write(`
//             <!doctype html>
//             <html>
//             <body>
//                 <form action="/" method="post">
//                     <input type="text" name="name" /><br />
//                     <input type="number" name="age" /><br />
//                     <button>Save</button>
//                 </form>
//             </body>
//             </html>
//         `)
//     }




//     res.end()
// })

// server.listen(PORT)
