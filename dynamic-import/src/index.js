import _ from 'lodash'
import trough from 'trough'

const getLib = async (name) => {
  const lib = await import(name)
  return lib
}

const getMethod = async ({ libName, methodName }) => {
  const lib = await getLib(libName)
  let method
  if (methodName) method = _.get(lib, methodName, undefined)
  else method = _.get(lib, 'default', undefined)
  return method
}

const run = async () => {
  const method = await getMethod({ libName: 'lodash', methodName: 'add' })

  const sum = method(6, 4)
  // 10
  console.log(sum)
}

const pipeline = async () => {
  let p = trough()
  const array = ['mean', 'floor']

  for (let name of array) {
    const method = await getMethod({ libName: 'lodash', methodName: name })
    p = p.use(function(data) {
      const value = method(data)
      return value
    })
  }

  return p
}

(async() => {
  await run()
  const p = await pipeline()
  p.run([1.2, 2.4, 3.45, 6, 7, 18.5, 29.5], function(err, data) {
    console.log(`End of pipeline ${data}`)
  })
  console.log('async/await in node with babel...')
})()
