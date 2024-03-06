import NoteUpdate from "./components/NoteUpdate.vue";
import NoteHome from "./components/NoteHome.vue";
import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name: 'NoteHome',
        component: NoteHome,
        path: '/',
    },
    {
        name: 'NoteUpdate',
        component: NoteUpdate,
        path: '/update/:id',
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
