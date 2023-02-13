const http = require('http');
const moment = require('moment')
const member = require('./members')
const user = require('./users')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    const url = req.url
    if(url === '/about'){
        res.write(JSON.stringify({
            'Status': 'success',
            'Message': 'response success',
            'Description': 'Exercise #3',
            'Date': moment().format(),
            'Data': member.data()
        }));
    } else if(url === '/users'){
        res.write(JSON.stringify(
            user.user()
        ))
    }
    else{
        res.write('This is the home page');
    }
    res.end();
    
})

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})