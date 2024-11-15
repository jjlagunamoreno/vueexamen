import axios from "axios";
import Global from "@/Global";

export default class ServiceCubos {
    // UTILIDAD PARA CONFIGURAR LAS SOLICITUDES
    createHeaders() {
        if (!Global.token) {
            console.warn("El token no está definido.");
            return {};
        }
        return {
            Authorization: `Bearer ${Global.token}`,
        };
    }

    // OBTENER TODOS LOS CUBOS
    getAllCubos() {
        return new Promise((resolve, reject) => {
            const request = "api/Cubos";
            const url = `${Global.apiUrl}${request}`;
            console.log("Solicitando cubos a:", url);

            axios
                .get(url)
                .then((response) => {
                    console.log("Cubos recibidos:", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener los cubos:", error);
                    reject(error);
                });
        });
    }

    // OBTENER TODAS LAS MARCAS
    getMarcas() {
        return new Promise((resolve, reject) => {
            const request = "api/Cubos/Marcas";
            const url = `${Global.apiUrl}${request}`;
            console.log("Solicitando marcas a:", url);

            axios
                .get(url)
                .then((response) => {
                    console.log("Marcas recibidas:", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener las marcas:", error);
                    reject(error);
                });
        });
    }

    // OBTENER TODOS LOS CUBOS SEGÚN MARCAS
    getCubosByMarca(marca) {
        return new Promise((resolve, reject) => {
            const request = `api/Cubos/CubosMarca/${marca}`;
            const url = `${Global.apiUrl}${request}`;
            console.log(`Solicitando cubos de la marca ${marca} a:`, url);

            axios
                .get(url)
                .then((response) => {
                    console.log(`Cubos de la marca ${marca}:`, response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener cubos por marca:", error);
                    reject(error);
                });
        });
    }

    // OBTENER DETALLES DE UN CUBO POR ID
    getCuboById(id) {
        return new Promise((resolve, reject) => {
            const request = `api/Cubos/${id}`;
            const url = `${Global.apiUrl}${request}`;
            console.log(`Solicitando detalles del cubo con ID ${id} a:`, url);

            axios
                .get(url)
                .then((response) => {
                    console.log(`Detalles del cubo ${id}:`, response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener los detalles del cubo:", error);
                    reject(error);
                });
        });
    }

    // REGISTRAR USUARIO
    registrarUsuario(usuario) {
        return new Promise((resolve, reject) => {
            const request = "api/Manage/RegistroUsuario";
            const url = `${Global.apiUrl}${request}`;
            console.log("Enviando datos de registro a:", url);

            axios
                .post(url, usuario)
                .then((response) => {
                    console.log("Usuario registrado:", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al registrar usuario:", error);
                    reject(error);
                });
        });
    }

    // LOGIN
    login(credentials) {
        return new Promise((resolve, reject) => {
            const request = "api/Manage/Login";
            const url = `${Global.apiUrl}${request}`;
            console.log("Enviando credenciales de login a:", url);

            axios
                .post(url, credentials)
                .then((response) => {
                    console.log("Token recibido:", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al realizar login:", error);
                    reject(error);
                });
        });
    }

    // OBTENER PERFIL DEL USUARIO
    getPerfilUsuario() {
        return new Promise((resolve, reject) => {
            const request = "api/Manage/PerfilUsuario";
            const url = `${Global.apiUrl}${request}`;
            console.log("Solicitando perfil del usuario a:", url);

            axios
                .get(url, { headers: this.createHeaders() })
                .then((response) => {
                    console.log("Perfil del usuario:", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener el perfil del usuario:", error);
                    reject(error);
                });
        });
    }

    // REALIZAR PEDIDO
    realizarPedido(idCubo) {
        return new Promise((resolve, reject) => {
            const request = `api/Compra/InsertarPedido/${idCubo}`;
            const url = `${Global.apiUrl}${request}`;
            console.log(`Enviando pedido para el cubo con ID ${idCubo} a:`, url);

            axios
                .post(url, null, { headers: this.createHeaders() })
                .then((response) => {
                    console.log(`Pedido realizado para el cubo ${idCubo}`);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al realizar pedido:", error);
                    reject(error);
                });
        });
    }

    // OBTENER COMPRAS DEL USUARIO
    getComprasUsuario() {
        return new Promise((resolve, reject) => {
            const request = "api/Compra/ComprasUsuario";
            const url = `${Global.apiUrl}${request}`;
            console.log("Solicitando compras del usuario a:", url);

            axios
                .get(url, { headers: this.createHeaders() })
                .then((response) => {
                    console.log("Compras del usuario:", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener las compras del usuario:", error);
                    reject(error);
                });
        });
    }

    // OBTENER COMENTARIOS DE UN CUBO POR ID
    getComentariosCubo(idCubo) {
        return new Promise((resolve, reject) => {
            const request = `api/ComentariosCubo/GetComentariosCubo/${idCubo}`;
            const url = `${Global.apiUrl}${request}`;
            console.log(`Solicitando comentarios del cubo con ID ${idCubo} a:`, url);

            axios
                .get(url)
                .then((response) => {
                    console.log(`Comentarios del cubo ${idCubo}:`, response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener comentarios del cubo:", error);
                    reject(error);
                });
        });
    }
}
