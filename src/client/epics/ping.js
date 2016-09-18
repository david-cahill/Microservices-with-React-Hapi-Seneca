export default action$ =>
  action$.filter(action => action.type === 'PING')
    .delay(3000)
    .mapTo({ type: 'PONG' })
