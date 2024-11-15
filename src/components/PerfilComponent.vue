<template>
  <div class="container mt-5">
    <h1 class="text-center">Mi perfil (User {{ usuario.idUsuario }})</h1>
    <hr class="border border-danger opacity-100" />
    <table class="table">
      <thead class="border-danger">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary w-100 mt-3" @click="irACompras">
      Mostrar compras
    </button>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

const service = new ServiceCubos();

export default {
  name: "PerfilComponent",
  data() {
    return {
      usuario: {
        nombre: "",
        email: "",
      },
    };
  },
  methods: {
    irACompras() {
      this.$router.push("/compras");
    },
  },
  mounted() {
    service
      .getPerfilUsuario()
      .then((result) => {
        this.usuario = result;
        console.log("Perfil del usuario:", result);
      })
      .catch((error) => {
        console.error("Error al obtener el perfil del usuario:", error);
        alert("Hubo un problema al cargar el perfil.");
      });
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
}
</style>
