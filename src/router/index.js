import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'
import AddRoom from '../views/AddRoom'
import SignUp from '../views/SignUp'
import AddTodo from '../components/AddTodo'
import CheckUser from '../views/CheckUser'
import EditAreas from '../views/EditAreas'
import CleanerList from '../views/CleanerList'

Vue.use(Router);

const routes = [
    {
        path: '/addtodo',
        name: 'AddTodo',
        component: AddTodo,
        props: true,
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        props: (route) => ({ query: route.query.q })
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        props: true,
    }, {
        path: '/addroom',
        name: 'AddRoom',
        component: AddRoom,
        props: true,
    }, {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        props: true,
    }, {
        path: '/checkuser',
        name: 'CheckUser',
        component: CheckUser,
        props: true,
    }, {
        path: '/editareas',
        name: 'EditAreas',
        component: EditAreas,
        props: true,
    }, {
        path: '/cleanerList',
        name: 'CleanerList',
        component: CleanerList,
        props: (route) => ({ query: route.query.q })
    }
];

const index = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default index;