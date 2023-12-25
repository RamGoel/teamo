import {publicProcedure, router} from './trpc'

export const appRouter = router({
    sayHi: publicProcedure.query(() => {
        return "Hi";
    })
})

export type AppRouter=typeof appRouter