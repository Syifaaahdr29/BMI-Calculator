function calculateBMI() {
    let weight = document.getElementById("weight").value; // mengambil nilai berat dengan ID weight
    let height = document.getElementById("height").value; // mengambil nilai tinggi dengan ID height

    let bmi = weight / Math.pow(height / 100, 2); // menghitung nilai BMI = berat / (tinggi badan/100)^2
    bmi = bmi.toFixed(1); // membatasi nilai dibelakang koma

    let result = document.getElementById("result"); // mengambil nilai hasil dengan ID result

    if (bmi < 18.5) {
        result.innerHTML = "BMI = " + bmi + " (Underweight)"; // menampilkan result ketika BMI underweight
        result.className = "underweight"; // class untuk styling css (underweight = merah)
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = "BMI = " + bmi + " (Normal Weight)"; // menampilkan result ketika BMI normal
        result.className = "normal"; // class untuk styling css (normal = hijau)
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = "BMI = " + bmi + " (Overweight)"; // menampilkan result ketika BMI overweight
        result.className = "overweight"; // class untuk styling css (overweight = kuning)
    } else {
        result.innerHTML = "BMI = " + bmi + " (Obesity)"; // menampilkan result ketika BMI obesitas
        result.className = "obesity"; // class untuk styling css (obesitas = merah)
    }
}