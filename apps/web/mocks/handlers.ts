import { rest } from 'msw'
export const handlers = [
    // Handles a POST /login request
    rest.post('/login', (req, res, ctx) => {

        return res(ctx.json({}));
    })
]
