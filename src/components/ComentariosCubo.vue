<template>
  <div class="row mb-3">
    <h3>Comentarios</h3>
    <hr class="border border-danger opacity-100" />
    <table class="table">
      <tbody>
        <tr v-for="comentario in comentarios" :key="comentario.idComentario">
          <td>Usuario {{ comentario.idUsuario }}</td>
          <td>{{ comentario.comentario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "ComentariosCubo",
  props: {
    idCubo: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comentarios: [],
    };
  },
  watch: {
    idCubo: {
      immediate: true,
      handler(newIdCubo) {
        this.loadComentarios(newIdCubo);
      },
    },
  },
  methods: {
    loadComentarios(idCubo) {
      service
        .getComentariosCubo(idCubo)
        .then((result) => {
          this.comentarios = result;
        })
        .catch((error) => {
          console.error("Error al cargar los comentarios del cubo:", error);
        });
    },
  },
};
</script>

<style>
.table {
  margin-top: 20px;
}
</style>
