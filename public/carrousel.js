function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].getBoundingClientRect().width;
    const currentTransform = getComputedStyle(track).transform;
    const matrix = new DOMMatrix(currentTransform);
    const currentOffset = matrix.m41;

    const newOffset = currentOffset + direction * itemWidth;

    track.style.transform = `translateX(${newOffset}px)`;
}