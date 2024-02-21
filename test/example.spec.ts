import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user create new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'Transaction Test',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})
