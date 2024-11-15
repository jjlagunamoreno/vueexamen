import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesComponent from "./components/DetallesComponent";
import LoginComponent from "./components/LoginComponent.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue"
import CubosMarca from "./components/CubosMarca.vue";
import PerfilComponent from "./components/PerfilComponent.vue"
import ComprasComponent from "./components/ComprarComponent.vue"
import PedidoComponent from "./components/PedidoComponent.vue"

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/detalles/:idcubo", component: DetallesComponent },
    { path: "/marca/:marca", component: CubosMarca },
    { path: "/login", component: LoginComponent },
    { path: "/register", component: RegisterComponent },
    { path: "/perfil", component: PerfilComponent },
    { path: "/compras", component: ComprasComponent },
    { path: "/pedido", component: PedidoComponent },
    // Ruta 404 para cualquier otra URL no definida
    { path: "/:pathMatch(.*)*", component: NotFoundComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
