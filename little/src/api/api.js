// Copia el contenido de https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
const fetchAPI = (date) => {
    // Simulación de tiempos de reserva
    const times = [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30"
    ];
    return times;
};

const submitAPI = (formData) => {
    // Simulación de envío exitoso
    return true;
};

export { fetchAPI, submitAPI };
