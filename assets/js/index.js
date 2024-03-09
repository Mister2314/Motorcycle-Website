document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');

    slider.classList.add('visible');

    slider.addEventListener('click', function () {
        scrollToTop();
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            slider.classList.add('visible');
        } else {
            slider.classList.remove('visible');
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const pointsContainer = document.querySelector('.points-container');

    // Nokta renkleri
    const pointColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Örnek renkler

    // Nokta oluşturma ve ekleme fonksiyonu
    function createPoint(color) {
        const point = document.createElement('span');
        point.style.backgroundColor = color;
        pointsContainer.appendChild(point);
    }

    // Başlangıçta noktaları oluştur
    pointColors.forEach(function (color) {
        createPoint(color);
    });

    // Örnek bir olayı dinleyerek points container'ı güncelleme
    const updatePointsButton = document.querySelector('#update-points-button');
    updatePointsButton.addEventListener('click', function () {
        // Mevcut noktaları temizle
        pointsContainer.innerHTML = '';

        // Yeni nokta renkleri oluştur
        const newPointColors = shuffleArray(pointColors); // Nokta renklerini karıştır

        // Yeni noktaları oluştur ve ekle
        newPointColors.forEach(function (color) {
            createPoint(color);
        });
    });
});

// Diziyi karıştırma fonksiyonu
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}