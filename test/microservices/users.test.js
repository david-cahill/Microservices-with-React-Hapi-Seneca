'use strict'
import Lab from 'lab'
import { expect } from 'code'
import seneca from '../../src/server/microservices/users'
const lab = Lab.script()
const { experiment, test } = lab
const role = 'users'

experiment('microservice: users', () => {
  test('cmd:whazzup', (done) => {
    seneca.act({role, cmd:'whazzup'}, (err, { reply }) => {
      if (err) return done(err)
      expect(reply).to.equal('yo!')
      return done()
    })
  })
})

export { lab }
