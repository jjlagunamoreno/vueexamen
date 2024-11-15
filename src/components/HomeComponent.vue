<template>
  <div>
    <h1 class="text-center my-4">Bienvenido</h1>
    <hr class="border border-danger opacity-100" />
    <div
      class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4"
      style="width: 90%; margin: 0 auto"
    >
      <div class="col" v-for="cubo of cubos" :key="cubo.idCubo">
        <div class="card h-100">
          <img
            :src="cubo.imagen"
            class="card-img-top mx-auto"
            style="width: 80%; height: auto"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{{ cubo.nombre }}</h5>
            <p class="card-text">Precio: {{ cubo.precio }} €</p>
          </div>
          <div class="card-footer text-center">
            <router-link
              :to="'/detalles/' + cubo.idCubo"
              class="btn btn-primary mx-1"
              >Detalles</router-link
            >
          </div>
          <div v-if="logueado" class="text-center mt-2">
            <button @click="comprar(cubo.idCubo)" class="btn btn-outline-info">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
import Global from "../Global";
const service = new ServiceCubos();

export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
      logueado: false,
    };
  },
  methods: {
    comprar(idCubo) {
      service.comprarCubo(idCubo).then((response) => {
        console.log(response.data);
        this.$router.push("/compras");
      });
    },
    comprobarLogin() {
      if (Global.key == null) {
        this.logueado = false;
      } else {
        this.logueado = true;
      }
    },
  },
  mounted() {
    service.getAllCubos().then((result) => {
      this.cubos = result;
      this.status = true;
    });
    this.comprobarLogin();
  },
};
</script>

<style>
.card-img-top {
  object-fit: cover;
  border-radius: 8px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.g-4 {
  gap: 1.5rem !important;
}

.row {
  justify-content: center;
}
</style>
