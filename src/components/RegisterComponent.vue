<template>
  <div class="container mt-5">
    <h1 class="text-center">Registrar usuario</h1>
    <hr class="border border-danger opacity-100" />
    <form @submit.prevent="registrarUsuario">
      <div class="mt-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          v-model="usuario.nombre"
          id="nombre"
          name="controlnombre"
          class="form-control"
          required
        />
      </div>
      <div class="mt-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          v-model="usuario.email"
          id="email"
          name="controlemail"
          class="form-control"
          required
        />
      </div>
      <div class="mt-3">
        <label for="pass" class="form-label">Contraseña</label>
        <input
          type="password"
          v-model="usuario.pass"
          id="pass"
          name="controlpass"
          class="form-control"
          required
        />
      </div>
      <button class="btn btn-primary w-100 mt-3" type="submit">
        Registrarse
      </button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

const service = new ServiceCubos();

export default {
  name: "RegisterComponent",
  data() {
    return {
      usuario: {
        idUsuario: 0,
        nombre: "",
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    async registrarUsuario() {
      try {
        await service.registrarUsuario(this.usuario);
        alert("Usuario registrado con éxito.");
        this.$router.push("/login"); // REDIRIGIMOS AL LOGIN DESPUÉS DE REGISTRARSE
      } catch (error) {
        console.error("Error al registrar el usuario:", error);
        alert("Hubo un error al registrar el usuario.");
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
}
</style>
