const fetchAPI = async (date) => {
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

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(times);
        }, 1000);
    });
};

const submitAPI = async (formData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};

export { fetchAPI, submitAPI };
