import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import LoaderData from './components/UI/LoaderData.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('loader-data', LoaderData);

app.mount('#app');
