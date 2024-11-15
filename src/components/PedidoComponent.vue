<template>
  <div class="container mt-5">
    <h1 class="text-center">Realizar pedido</h1>
    <hr class="border border-danger opacity-100" />
    <form @submit.prevent="realizarPedido">
      <div class="mt-3">
        <label class="form-label">Elige un cubo</label>
        <select
          v-model="idCuboSeleccionado"
          name="selectcubo"
          class="form-select"
        >
          <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo.idCubo">
            {{ cubo.nombre }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-100 mt-3">
        Comprar cubo
      </button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "PedidoComponent",
  data() {
    return {
      cubos: [],
      idCuboSeleccionado: null, // CUBO SELECCIONADO POR EL USUARIO
    };
  },
  methods: {
    realizarPedido() {
      if (this.idCuboSeleccionado) {
        service
          .realizarPedido(this.idCuboSeleccionado)
          .then(() => {
            alert("Pedido realizado con éxito.");
            this.$router.push("/compras");
          })
          .catch((error) => {
            console.error("Error al realizar el pedido:", error);
            alert("Hubo un error al realizar el pedido.");
          });
      } else {
        alert("Por favor, selecciona un cubo.");
      }
    },
  },
  mounted() {
    service.getAllCubos().then((cubos) => {
      this.cubos = cubos;
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
