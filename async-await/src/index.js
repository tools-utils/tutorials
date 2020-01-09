function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

(async() => {
  await sleep(2000)
  console.log('async/await in node with babel...')
})()
