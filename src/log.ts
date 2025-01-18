function log() {
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(console.log).catch(err => console.log('err',err))
}

log();
