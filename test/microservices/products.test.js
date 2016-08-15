'use strict'
import Lab from 'lab'
import { expect } from 'code'
const lab = Lab.script()
const { experiment, test } = lab
import seneca from '../../src/server/microservices/products'
const role = 'products'

experiment('microservice: products', () => {
  test('cmd:list', (done) => {
    seneca.act({role, cmd:'list'}, (err, result) => {
      if (err) return done(err)
      expect(result).to.be.a.array()
      expect(result[0].id).to.equal(1)
      expect(result[0].name).to.equal('product 1')
      return done()
    })
  })
})

export { lab }
