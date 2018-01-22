'use strict';
import config, {nodeEnv} from './config';

//import https from 'https';
import http from 'http';
import express from 'express';

const server = express();

server.set('view engine', 'ejs');

/*server.get('/',(req,res)=>{
	res.send('Express Server');
});*/

server.get('/',(req,res)=>{
	res.render('index',{
		content:'Hello EJS'
	});
});

server.use(express.static('public'));



server.listen(8080,()=>{
	console.log('Server has started');
});


//https.get('https://google.com',res =>{
//	console.log(res.statusCode);
//});


/*const server = http.createServer((req,res)=>{
     res.write('Hello\n');
     setTimeout(()=>{
res.write('World');
res.end();
},3000);
});

server.listen(8080);*/

console.log(config, nodeEnv);


