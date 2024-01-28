import { Router } from "express";

const testRoute = Router();

testRoute.get('/', (req, res) => {

    res.send('Hello, secure world!');

});

export default testRoute