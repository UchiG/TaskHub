import TaskPage from '../pages/TaskPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SummaryPage from '../pages/SummaryPage.vue';
import NotFoundErrorPage from '../pages/errors/NotFoundErrorPage.vue';

const routes = [
    {
        path: '/tasks',
        component: TaskPage,
        name: 'tasks',
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login',
    },
    {
        path: '/register',
        component: RegisterPage,
        name: 'register',
    },
    {
        path: '/summary',
        component: SummaryPage,
        name: 'summary',
    },
    {
        path: '/:notFound(.*)',
        component: NotFoundErrorPage,
        name: 'error.404',
    },
]

export default routes;