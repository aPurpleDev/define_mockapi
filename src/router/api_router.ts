import express from "express";
import { fetchDefinitions } from "../service/definition";

const api_router = express.Router();

api_router.get('/', (req, res) => {
    res.send('Base API Boilerplate');
});

api_router.get('/about', (req, res) => {
    res.send('Just an API fiddle as Node exercise');
});

api_router.get('/define/:word', async (req, res) => {
    try {
        const definition = await fetchDefinitions(req.params.word);
        if (definition) {
            res.status(200);
            res.send(definition);
        } else {
            res.status(400);
            res.send('No results for this search');
        }
    } catch (e) {
        res.status(500);
        res.send(e.message);
    }
})

export default api_router;