import express from 'express'

type RouterMethods = "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head";

export class Router {
    private router: express.Router
    constructor() {
        this.router = express.Router()
    }

    add (method: RouterMethods, path: string, ...middleware: any) {
        this.router[method](path, middleware)
    };

    get() {
        return this.router
    }
}