import { Router } from "./router";

export class HealthRoute {
    constructor(private router: Router) { }

    init() {
        this.router.add('get', '/healthy', (req: any, res: any, next: any) => {
            res.json("Thanks for checking, I'm good and alive")
        })
        return this.router.get()
    }
}
