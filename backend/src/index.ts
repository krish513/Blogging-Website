import { Hono } from 'hono'
import { rootRouter } from './route'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())
app.route("/api/v1/", rootRouter)

app.get('/', (c) => {
  return c.text('welcome to medium')
})

export default app
