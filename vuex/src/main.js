import { createApp } from 'vue'
import { createStore } from 'vuex';

import App from './App.vue'

const store = createStore( {
    state() {
        return {
            counter: 0
        };
    },

    mutations: {
        increment(state) {
            state.counter = state.counter + 2;
        }
    }
});

const app = createApp(App);

app.mount('#app')

app.use(store);