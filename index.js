const getRawBody = require('raw-body')
const typer = require('media-typer')
const { parse } = require('qs')

module.exports = function parseFormData(req, {limit = '1mb'} = {}, callback) {
  return new Promise((resolve, reject) => {
    const type = req.headers['content-type']
    const encoding = typer.parse(type).parameters.charset

    getRawBody(req, {limit, encoding})
      .then((str) => parse(str.toString()))
      .then((data) => {
        resolve(data)
        if(typeof callback !== 'undefined') {
          callback(false, data)
        }
      })
      .catch((error) => {
        reject(error)
        if(typeof callback !== 'undefined') {
          callback(error, false)
        }
      })
  })
}
