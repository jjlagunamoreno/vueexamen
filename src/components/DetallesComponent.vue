<template>
  <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 600px">
      <img :src="cubo.imagen" class="card-img-top" alt="Imagen del cubo" />
      <div class="card-body">
        <h5 class="card-title text-center">{{ cubo.nombre }}</h5>
        <p class="card-text"><strong>Marca:</strong> {{ cubo.marca }}</p>
        <p class="card-text"><strong>Modelo:</strong> {{ cubo.modelo }}</p>
        <p class="card-text">
          <strong>Valoración:</strong> {{ cubo.valoracion }}
        </p>
        <p class="card-text"><strong>Precio:</strong> {{ cubo.precio }} €</p>
      </div>
      <div class="card-footer text-center">
        <router-link to="/" class="btn btn-secondary">Volver</router-link>
      </div>
    </div>
    <ComentariosCubo :idCubo="cubo.idCubo" />
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
import ComentariosCubo from "./ComentariosCubo";

export default {
  name: "DetallesComponent",
  components: {
    ComentariosCubo,
  },
  data() {
    return {
      cubo: {},
    };
  },
  mounted() {
    const idCubo = parseInt(this.$route.params.idcubo, 10);
    const service = new ServiceCubos();

    service
      .getCuboById(idCubo)
      .then((result) => {
        this.cubo = result;
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del cubo:", error);
      });
  },
};
</script>

<style>
.container {
  margin-top: 70px; /* Ajusta este valor según la altura del menú */
}
.card-img-top {
  object-fit: cover;
  border-radius: 8px;
  height: 300px;
}

.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
