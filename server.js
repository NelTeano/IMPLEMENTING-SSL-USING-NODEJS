import Express from "express";
import Https from "https"
import Fs from "fs";

// ROUTES
import testRoute from "./routes/testRoute.js";

const app = Express();
const PORT = 3443;

// SSL KEYS
const keyPath = './cert/key.pem';
const certPath = './cert/cert.pem';

// KEY AND CERT CONFIG
const options = {
    key: Fs.readFileSync(keyPath),
    cert: Fs.readFileSync(certPath),
};

// CREATE HTTPS SERVER
const server = Https.createServer(options, app);


// INIT LOCALHOST HTTPS
server.listen(PORT ,()=> {
    console.log(`Server is running from port https://localhost:${PORT}`);
});


app.use('/api', testRoute);

