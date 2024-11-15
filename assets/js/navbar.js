$(document).ready(function () {
    // Fungsi untuk memindahkan slider ke ikon yang aktif
    function moveSliderToActiveIcon() {
        var activeIcon = $('.bottom-nav li a.active-icon');
        var position = activeIcon.position();
        var margin = 37; // Anda dapat menyesuaikan nilai margin ini
        $('.slider').css({ "left": position.left + margin, "transform": "translateX(-50%)" });
    }

    // Panggil fungsi setelah halaman selesai di-load sepenuhnya
    setTimeout(moveSliderToActiveIcon, 100); // Menunggu 100 milidetik sebelum menjalankan fungsi

    // Pindahkan slider saat ikon diklik
    $('.bottom-nav li a').click(function() {
        $('.bottom-nav li a').removeClass('active-icon');
        $(this).addClass('active-icon');
        moveSliderToActiveIcon();
    });
});
