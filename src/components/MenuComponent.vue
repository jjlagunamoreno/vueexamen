<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img
        src="https://appcubos2024-ayg5bkctbraeazac.francecentral-01.azurewebsites.net/assets/images/spiderman.png"
        alt="img-ico"
        style="width: 3%"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Cubos -->
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Cubos</router-link
            >
          </li>

          <!-- Marcas -->
          <li class="nav-item dropdown">
            <button
              class="btn dropdown-toggle text-white"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marcas
            </button>
            <ul class="dropdown-menu">
              <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/marca/' + marca">{{
                  marca
                }}</router-link>
              </li>
            </ul>
          </li>

          <!-- SI TENEMOS EL TOKEN MOSTRAMOS Seguridad -->
          <template v-if="Global.token">
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seguridad
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item btn btn-link" @click="logout">
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>

            <!-- SI TENEMOS EL TOKEN MOSTRAMOS Usuario -->
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuario
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/perfil"
                    >Perfil</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/compras"
                    >Compras</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/pedido"
                    >Realizar Pedido</router-link
                  >
                </li>
              </ul>
            </li>
          </template>
          <template v-else>
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle text-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seguridad
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/login"
                    >Iniciar Sesión</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/register"
                    >Registrarse</router-link
                  >
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue"; // IMPORTAR ref
import ServiceCubos from "../services/ServiceCubos";
import Global from "@/Global";

const service = new ServiceCubos();

export default {
  name: "MenuComponent",
  setup() {
    const marcas = ref([]);

    const logout = () => {
      Global.token = null;
      window.location.href = "/";
    };

    service.getMarcas().then((result) => {
      marcas.value = result;
    });

    return {
      marcas,
      Global,
      logout,
    };
  },
};
</script>
