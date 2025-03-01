import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/susbcription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => { res.send({ title: 'get all subscriptions' })});
subscriptionRouter.get('/:id', (req, res) => { res.send({ title: 'get subscriptions details' })});
subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.put('/:id', (req, res) => { res.send({ title: 'update subscriptions' })});
subscriptionRouter.delete('/:id', (req, res) => { res.send({ title: 'delete subscriptions' })});
subscriptionRouter.get('/user/:id', authorize, getUserSubscription);
subscriptionRouter.put('/:id/cancel', (req, res) => { res.send({ title: 'cancel subscriptions' })});
subscriptionRouter.get('/upcoming-renewals', (req, res) => { res.send({ title: 'get upcoming renewals' })});

export default subscriptionRouter;