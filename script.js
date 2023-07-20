window.onload = () => {
    let button = document.querySelector("#btn");

    // Fungsi untuk menghitung BMI
    button.addEventListener("click", calculateBMI);
  };

  function calculateBMI() {
    /* Mengambil input dari user ke variabel height (string) */
    let height = parseInt(document.querySelector("#height").value);

    /* Mengambil input dari user ke variabel weight (string) */
    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    // Memeriksa apakah pengguna memberikan nilai yang tepat atau tidak
    if (height === "" || isNaN(height))
      result.innerHTML = "Masukkan tinggi badan yang valid!";
    else if (weight === "" || isNaN(weight))
      result.innerHTML = "Masukkan berat badan yang valid!";
    // Akan dilakukan perhitungan BMI, jika berat dan tinggi sudah valid
    else {
      let bmi = (weight / ((height * height) / 10000)).toFixed(2);

      // Rumus BMI
      if (bmi < 18.6)
        result.innerHTML = `Kekurangan berat badan : <span>${bmi}</span>`;
      else if (bmi >= 18.6 && bmi < 24.9)
        result.innerHTML = `Normal(ideal) : <span>${bmi}</span>`;
      else if (bmi >= 25.0 && bmi < 29.9)
        result.innerHTML = `Kelebihan berat badan : <span>${bmi}</span>`;
      else result.innerHTML = `Kegemukan(obesitas) : <span>${bmi}</span>`;
    }
  }
