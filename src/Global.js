import { reactive } from "vue";
//Cambiaremos Global para que use reactive desde Vue, asegurando que cualquier cambio en el token sea reactivo.

const Global = reactive({
    apiUrl: "https://apitiendacubos2024a.azurewebsites.net/",
    token: null, //GUARDAMOS AQUI EL TOKEN
});

export default Global;
