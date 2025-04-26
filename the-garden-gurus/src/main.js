import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/css/style.css'
import '@/assets/scss/style.scss'
import components from '@/components/UI'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab)
dom.watch();


const app = createApp(App);

for (const [key, value] of Object.entries(components)) {
    app.component(key, value);
}

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router).mount('#app');
