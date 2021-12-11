// const http = require('http')

import express from 'express'
import { config } from 'dotenv'
import userRouter from './routers/user.js'
import shopRouter from './routers/shop.js'
import authRouter from './routers/auth.js'

config()

const PORT = process.env.PORT || 8080

//User validation
// var auth = express.basicAuth(function (user, pass) {
//     return (user == "super" && pass == "secret");
// }, 'Super duper secret area');

const app = express()

// Authenticator
// app.use(function(req, res, next) {
//     var auth;

//     // check whether an autorization header was send    
//     if (req.headers.authorization) {
//       // only accepting basic auth, so:
//       // * cut the starting "Basic " from the header
//       // * decode the base64 encoded username:password
//       // * split the string at the colon
//       // -> should result in an array
//       auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
//       // use Buffer.from in with node v5.10.0+ 
//       // auth = Buffer.from(req.headers.authorization.substring(6), 'base64').toString().split(':');
//     }

//     // checks if:
//     // * auth array exists 
//     // * first value matches the expected user 
//     // * second value the expected password
//     if (!auth || auth[0] !== 'testuser' || auth[1] !== 'testpassword') {
//         // any of the tests failed
//         // send an Basic Auth request (HTTP Code: 401 Unauthorized)
//         res.statusCode = 401;
//         // MyRealmName can be changed to anything, will be prompted to the user
//         res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
//         // this will displayed in the browser when authorization is cancelled
//         res.end('Unauthorized');
//     } else {
//         // continue with processing, user was authenticated
//         next();
//     }
// });



app.use(express.json())
app.use('/public', express.static('public'))

app.use('/user', userRouter)
app.use('/shop', shopRouter)
app.use('/auth', authRouter)

// app.get('/demo', auth, (req, res) => {
//     return res.json({
//         success: true
//     })
// })

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
