# Urlencoded Body Parser

Small parser for [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) that turns `application/x-www-form-urlencoded` data into a javascript object using [qs](https://github.com/ljharb/qs).

### Api

`parseFormData(req, {limit = '1mb'} = {}, callback)`

- Use `require('urlencoded-body-parser')`
- Returns a Promise (optional callback usage)
- Buffers and parses the incoming body and returns it.
- `limit` is how much data is aggregated before parsing at max. It can be a `Number` of bytes or [a string](https://www.npmjs.com/package/bytes) like `'1mb'`.
- The Promise is rejected when an error occurs

### Usage Examples

#### Promise Usage

```javascript
const http = require('http');
const parseFormData = require('urlencoded-body-parser')

const server = http.createServer((req, res) => {
  parseFormData(req)
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  res.end();
});

server.listen(8000);
```

#### Callback usage

```javascript
const http = require('http');
const parseFormData = require('urlencoded-body-parser')

const server = http.createServer((req, res) => {
  parseFormData(req, {limit: '1mb'}, (err, data) => {
    if(error) {
      console.log(error)
      return false;
    }

    console.log(data)
  })
  res.end();
});

server.listen(8000);
```
