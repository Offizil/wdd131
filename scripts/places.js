const temp = document.querySelector("#tempP");
const velocity =  document.querySelector("#velP");
const winchill = document.querySelector("#windchill");


function Windchill() {
   
        if (temp <= 50 || velocity > 4.8) {
        let Ta = temperature;
        // Calculate
        let T = 35.74 + (0.6215 * Ta) - (35.75 * velocity) ** 0.16 + (0.4275 * Ta) ** 0.16;
        winchill.textContent = `Wind Chill: ${T.toFixed(2)} ℉ `;
    } else {
        winchill.textContent = "N/A";
    }
}


document.addEventListener("DOMContentLoaded", Windchill()); 