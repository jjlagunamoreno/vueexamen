<template>
  <div class="container-fluid mt-3 mx-auto" style="width: 90%">
    <h1 class="text-center my-4">
      Cubos de la marca <span class="text-danger">{{ marca }}</span>
    </h1>
    <hr class="border border-danger opacity-100" />
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="cubo in cubos" :key="cubo.idCubo">
        <div class="card h-100">
          <img
            :src="cubo.imagen"
            class="card-img-top mx-auto"
            style="width: 80%; height: auto"
            alt="Imagen del cubo"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{{ cubo.nombre }}</h5>
            <p class="card-text">Precio: {{ cubo.precio }} €</p>
          </div>
          <div class="card-footer text-center">
            <router-link
              :to="'/detalles/' + cubo.idCubo"
              class="btn btn-primary w-100 mt-3"
              >Detalles</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "CubosMarca",
  data() {
    return {
      marca: "",
      cubos: [],
    };
  },
  methods: {
    cargarCubos() {
      // LLAMADA AL SERVICIO CUBOS
      service
        .getCubosByMarca(this.marca)
        .then((result) => {
          this.cubos = result;
        })
        .catch((error) => {
          console.error("Error al obtener los cubos de la marca:", error);
        });
    },
  },
  watch: {
    // DETECTAR CAMBIOS EN LA URL PARA VOLVER A CARGAR
    "$route.params.marca"(newMarca) {
      this.marca = newMarca;
      this.cargarCubos();
    },
  },
  mounted() {
    // INICIALIZAR EL VALOR DE LA MARCA MEDIANTE LOS PARAMETROS DE LA URL
    this.marca = this.$route.params.marca;
    this.cargarCubos();
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

.row {
  justify-content: center;
}

.container-fluid {
  margin-top: 20px;
}
</style>
