const getRawBody = require('raw-body')
const typer = require('media-typer')
const { parse } = require('qs')

module.exports = async function parseFormData (req, {limit = '1mb'} = {}) {
  const type = req.headers['content-type']
  const encoding = (type) ? typer.parse(type).parameters.charset : 'UTF-8'

  req.rawBody = req.rawBody || getRawBody(req, {limit, encoding})
  const str = await req.rawBody
  const data = parse(str.toString())

  return data
}
