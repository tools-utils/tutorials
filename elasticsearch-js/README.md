# Introduction

Elasticsearch might be used for `primary` document database.
In this project we try setup a local `elasticsearch server` and index documents by using `bulk` method.

# Objectives

- Setup local `elasticsearch server`
- Use `javascript client` to index documents

# Implementation

- Start `elasticsearch server` locally

```sh
npm install @elastic/elasticsearch --save
# or
yarn add @elastic/elasticsearch
```

```
import { Client } from '@elastic/elasticsearch'

const ES_URL = 'http://localhost:9200'
const client = new Client({ node: ES_URL })

const init = async () => {
  try {
    const info = await client.info()
    console.log(JSON.stringify(info))
  } catch (e) {
    console.error(e)
  }
}

const body = [
  { index: { _index: 'test', _id: 1 }},
  { address: '162 N. Lafayette Dr.Leland', zip: '28451', city: 'NC' },

  { index: { _index: 'test', _id: 2 }},
  { address: '221 Rockaway St. Smyrna', zip: '30080', city: 'GA' },

  { index: { _index: 'test', _id: 3 }},
  { address: '922 Grant Avenue Marquette', zip: '49855', city: 'MI' },
]

const bulk = async () => {
  try {
    const resp = await client.bulk({ refresh: true, body })

    console.log(JSON.stringify(resp))
  } catch (e) {
    console.error(e)
  }
}

(async() => {
  await init()
  await bulk()
})()
```

- `info` response

```json
...
    "name": "es1",
    "cluster_name": "docker-cluster",
    "cluster_uuid": "mRjvZ7x1T4yGKfEUgJJPrg"
...
```

- `bulk` response

```json
{
    "body": {
        "took": 737,
        "errors": false,
        "items": [...]
    }
}
```

# Usages

```javascript
// matching
const match = async () => {
  const { body } = await client.search({
    index: 'test',
    body: {
      query: {
        match: {
          city: 'NC'
        }
      }
    }
  })

  console.log(body.hits.hits)
}
```

```javascript
// missing property
const missing = async () => {
  const { body } = await client.search({
    index: 'test',
    body: {
      query: {
        bool: {
          must_not: {
            exists: {
              field: 'district'
            }
          }
        }
      }
    }
  })

  console.log(body.hits.hits)
}
```

```javascript
// prefix matching
const prefix = async () => {
  const { body } = await client.search({
    index: 'test',
    body: {
      query: {
        prefix: {
          address: {
            value: '92'
          }
        }
      }
    }
  })

  console.log(body.hits.hits)
}
```

# References
- [elasticsearch-js](https://github.com/elastic/elasticsearch-js)
- [Elasticsearch Bulk](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html)
- [Bulk Example](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/bulk_examples.html)
- [Term level queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/term-level-queries.html)