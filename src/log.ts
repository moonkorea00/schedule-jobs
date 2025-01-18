function log() {
  fetch('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=맞춤법검사기').then(res => res.text()).then(res => {
    const match = /passportKey=([a-zA-Z0-9]+)/.exec(res)
    if (match) return match[1]}).catch(err => console.log('api err', err))
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(console.log).catch(err => console.log('err',err))
}

log();
