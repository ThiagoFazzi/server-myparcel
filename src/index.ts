import 'reflect-metadata'
import { useKoaServer } from 'routing-controllers'
import setupDb from './db'
import * as Koa from 'koa'

const app = new Koa()
const port = process.env.PORT || 4000


useKoaServer(app, {
  cors: true,
  controllers: [

  ],
})

setupDb()
.then(_ =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))






