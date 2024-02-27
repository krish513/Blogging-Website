import { Hono } from 'hono'
import { rootRouter } from './route'

const app = new Hono()

app.route("/api/v1/", rootRouter)

app.get('/', (c) => {
  return c.text('welcome to medium')
})

export default app
