import { createApp } from 'vue'
import App from './App.vue'
import router from '@/scripts/router'

// font awsome
import '@/scripts/fa_icons.js'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

// Base components
import BaseButton from "@/components/UI/BaseButton"
import BaseInput from "@/components/UI/BaseInput"
import BaseIcon from "@/components/UI/BaseIcon"

const app = createApp(App)

app.component("BaseButton", BaseButton)
    .component("font-awesome-icon", FontAwesomeIcon)
    .component("BaseInput", BaseInput)
    .component("BaseIcon", BaseIcon)

app.use(router)
app.mount('#app')
