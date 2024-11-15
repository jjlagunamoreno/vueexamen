<template>
  <div class="container mt-5">
    <h1 class="text-center">Iniciar Sesión</h1>
    <hr class="border border-danger opacity-100" />
    <form @submit.prevent="iniciarSesion">
      <div class="mt-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          v-model="credentials.email"
          id="email"
          name="controlemail"
          class="form-control"
          required
        />
      </div>
      <div class="mt-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          type="password"
          v-model="credentials.password"
          id="password"
          name="controlpassword"
          class="form-control"
          required
        />
      </div>
      <button class="btn btn-primary w-100 mt-3" type="submit">
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
import Global from "@/Global";

const service = new ServiceCubos();

export default {
  name: "LoginComponent",
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async iniciarSesion() {
      try {
        const response = await service.login(this.credentials);
        // GUARDAMOS EL TOKEN EN GLOBAL
        Global.token = response.response; 
        console.log("Token recibido:", Global.token);
        alert("Inicio de sesión exitoso.");
        //REDIRIJE AL PERFIL
        this.$router.push("/perfil");
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("Usuario o contraseña incorrectos.");
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
