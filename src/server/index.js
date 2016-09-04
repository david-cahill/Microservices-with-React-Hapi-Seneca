'use strict'
import { Server } from 'hapi'
import Inert from 'inert'
import chairo from 'chairo'
import { fork } from 'child_process'
import { resolve } from 'path'
import options from '../../config/chairo-options'
import routes from './routes'
const server = new Server()
const port = process.env.port || 3000

const products = fork(resolve(__dirname, './microservices/products'))
const users = fork(resolve(__dirname, './microservices/users'))

server.connection({ port })

server.register({ register: chairo, options }, (err) => {
  if (err) throw console.log(err)
  server.register(Inert, () => server.route(routes))
  const { seneca } = server
  options.client.forEach((microservice) => seneca.client(microservice))
  server.start((err) => {
    if (err) throw console.log(err)
    console.log(`Server running on ${server.info.uri}`)
    users.on('message', (m) => {
      if (m === 'ready') requestDataFromUsersMicroservice(seneca)
    })
    products.on('message', (m) => {
      if (m === 'ready') requestDataFromProductsMicroservice(seneca)
    })
  })
})

function requestDataFromUsersMicroservice(seneca) {
  seneca.act({ role: 'users', cmd: 'whazzup'}, (err, res) => {
    if (err) console.log(err)
    console.log('Users response =', res)
  })
}

function requestDataFromProductsMicroservice(seneca) {
  seneca.act({role: 'products', cmd: 'list'}, (err, res) => {
    if (err) console.log(err)
    console.log('Products response = ', res)
  })
}
