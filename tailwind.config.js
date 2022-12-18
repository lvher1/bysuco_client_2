module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                display: ["group-hover"],
                myGreen: "#016344",
            },
        },
        plugins: [require("autoprefixer")],
    },
};
