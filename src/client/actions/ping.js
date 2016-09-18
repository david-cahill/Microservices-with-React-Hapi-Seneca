export function ping () {
  console.log('** ping called **')
  return {
    type: 'PING'
  }
}

export function pong () {
  return {
    type: 'PONG'
  }
}