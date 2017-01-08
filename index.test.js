require('async-to-gen/register')
const listen = require('test-listen').default
const fetch = require('node-fetch')
const micro = require('micro')

test('parse', async () => {
  const parse = require('./index')
  const server = micro(async (req) => {
    const data = await parse(req)
    return data
  })

  const url = await listen(server)

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'a=b'
  })

  const json = await res.json()
  expect(json.a).toBe('b')
})
