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
  { index: { _index: 'test', _id: 1 } },
  { address: '162 N. Lafayette Dr.Leland', zip: '28451', city: 'NC' },

  { index: { _index: 'test', _id: 2 } },
  { address: '221 Rockaway St. Smyrna', zip: '30080', city: 'GA' },

  { index: { _index: 'test', _id: 3 } },
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
