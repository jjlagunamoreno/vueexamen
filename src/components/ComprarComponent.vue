<template>
  <div class="container mt-5">
    <h1 class="text-center">Tus compras</h1>
    <hr class="border border-danger opacity-100" />
    <table class="table">
      <thead class="border-danger">
        <tr>
          <th>Núm. Pedido</th>
          <th>ID Cubo</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compra in compras" :key="compra.idPedido">
          <td>{{ compra.idPedido }}</td>
          <td>{{ compra.idCubo }}</td>
          <td>{{ new Date(compra.fechaPedido).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
    <div class="row mb-3">
      <div class="col-6">
        <router-link class="btn btn-primary w-100 mt-3" to="/perfil"
          >Volver al perfil</router-link
        >
      </div>
      <div class="col-6">
        <router-link class="btn btn-primary w-100 mt-3" to="/pedido"
          >Realizar pedido</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "ComprarComponent",
  data() {
    return {
      compras: [],
    };
  },
  mounted() {
    service
      .getComprasUsuario()
      .then((compras) => {
        this.compras = compras;
      })
      .catch((error) => {
        console.error("Error al obtener las compras del usuario:", error);
        alert("Hubo un problema al cargar las compras.");
      });
  },
};
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
}
</style>
