'use strict';

const html = require('choo/html');
const choo = require('choo');

function mainView(state, emit) {
  function onClick() {
    emit('increment', 1);
  }

  return html`
    <div>
      <h1>count is ${state.count}</h1>
      <button onclick=${onClick}>Increment</button>
    </div>
  `;
}

function logger(state, emitter) {
  emitter.on('*', (msgName, data) => console.log('event', msgName, data));
}

function countStore(state, emitter) {
  state.count = 0;
  emitter.on('increment', (count) => {
    state.count = state.count + count;
    emitter.emit('render');
  });
}

const app = choo();
app.use(logger);
app.use(countStore);
app.route('/', mainView);
app.mount('#app');
