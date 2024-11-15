document.addEventListener('DOMContentLoaded', function() {
    // Daftar gambar latar belakang
    const backgrounds = [
      'assets/image/gambar_1.jpeg',
      'assets/image/gambar_2.jpeg',
      'assets/image/gambar_3.jpg'
    ];
  
    // Variabel untuk indeks saat ini
    let currentIndex = 0;
    
    // Seleksi elemen dengan kelas linniel_1 dan linniel_2
    const linniel1Element = document.querySelector('.linniel_1');
    const linniel2Element = document.querySelector('.linniel_2');
  
    // Fungsi untuk mengubah latar belakang
    function changeBackground() {
      // Ubah latar belakang untuk linniel_1
      if (linniel1Element) {
        linniel1Element.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
      }
      
      // Ubah latar belakang untuk linniel_2
      if (linniel2Element) {
        linniel2Element.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
      }
      
      // Memutar ke gambar berikutnya
      currentIndex = (currentIndex + 1) % backgrounds.length;
    }
  
    // Periksa jika elemen-elemen ditemukan
    if (linniel1Element || linniel2Element) {
      // Panggil fungsi pertama kali untuk mengatur latar awal
      changeBackground();
  
      // Ubah latar belakang setiap 3 detik
      setInterval(changeBackground, 3000);
    } else {
      console.error('Elemen .linniel_1 atau .linniel_2 tidak ditemukan.');
    }
  });
  
  window.addEventListener("load", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

   
    setTimeout(function() {
        
        loading.classList.add("blur-out");

       
        setTimeout(function() {
            loading.style.display = "none";
            content.style.display = "block";
        }, 500); 
    }, 5000); 
});

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}


const namaTamu = getParameterByName('untuk') || getParameterByName('kepada');


if (namaTamu) {
  document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('nama-tamu').textContent = namaTamu;
  });
} else {

  document.getElementById('nama-tamu').textContent = "Tamu yang Terhormat";
}