import { createRouter, createWebHistory } from 'vue-router'
import CoachDetails from "@/pages/coaches/CoachDetails";
import ContactCoach from "@/pages/requests/ContactCoach";
import CoachList from "@/pages/coaches/CoachList";
import CoachRegistration from "@/pages/coaches/CoachRegistration";
import RequestsReceived from "@/pages/requests/RequestsReceived";
import NotFound from "@/pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    { path: '/coaches/:id', component: CoachDetails, children: [
        {path: 'contact', component: ContactCoach},
      ] },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
