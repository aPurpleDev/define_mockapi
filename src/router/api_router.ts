import express, { Response, Request, Router } from "express";
import cors from 'cors'
import { fetchDefinitions } from "../service/definition";

const api_router:Router = express.Router();

api_router.get('/', (req: Request, res: Response): any => {
    res.send('Base API Boilerplate');
});

api_router.get('/about', (req: Request, res: Response): any => {
    res.send('Just an API fiddle as Node exercise');
});

api_router.get('/define/:word', cors(), async (req: Request, res: Response): Promise<any> => {
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