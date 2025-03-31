// 변수 지정
const bgImage = document.querySelector(".bg_img");
const fgImage = document.querySelector(".fg_img");

const bgImage2 = document.querySelector(".bg_img2");
const fgImage2 = document.querySelector(".fg_img2");

const bgImage3 = document.querySelector(".bg_img3");
const fgImage3 = document.querySelector(".fg_img3");

const bgImage4 = document.querySelector(".bg_img4");
const fgImage4 = document.querySelector(".fg_img4");

const bgImage5 = document.querySelector(".bg_img5");
const fgImage5 = document.querySelector(".fg_img5");

// 마우스 중앙 설정
let mouseX = window.innerWidth / 4, mouseY = window.innerHeight / -1;
let currentX = mouseX, currentY = mouseY;

let mouseX2 = window.innerWidth / 4, mouseY2 = window.innerHeight / -1;
let currentX2 = mouseX2, currentY2 = mouseY2;

let mouseX3 = window.innerWidth / 4, mouseY3 = window.innerHeight / -1;
let currentX3 = mouseX3, currentY3 = mouseY3;

let mouseX4 = window.innerWidth / 4, mouseY4 = window.innerHeight / -1;
let currentX4 = mouseX4, currentY4 = mouseY4;

let mouseX5 = window.innerWidth / 4, mouseY5 = window.innerHeight / -1;
let currentX5 = mouseX5, currentY5 = mouseY5;

// 원 크키
const clipSize = 90;

document.addEventListener("mousemove", (e) => {
    
    const rect1 = fgImage.getBoundingClientRect();
    mouseX = e.clientX - rect1.left;
    mouseY = e.clientY - rect1.top;

    
    const rect2 = fgImage2.getBoundingClientRect();
    mouseX2 = e.clientX - rect2.left;
    mouseY2 = e.clientY - rect2.top;

    
    const rect3 = fgImage3.getBoundingClientRect();
    mouseX3 = e.clientX - rect3.left;
    mouseY3 = e.clientY - rect3.top;

    
    const rect4 = fgImage4.getBoundingClientRect();
    mouseX4 = e.clientX - rect4.left;
    mouseY4 = e.clientY - rect4.top;

    const rect5 = fgImage5.getBoundingClientRect();
    mouseX5 = e.clientX - rect5.left;
    mouseY5 = e.clientY - rect5.top;
});

// 애니메이션 부드러움 설정
function animate() {
    
    currentX += (mouseX - currentX) * 0.5;
    currentY += (mouseY - currentY) * 0.5;
    fgImage.style.clipPath = `circle(${clipSize}px at ${currentX}px ${currentY}px)`;

    
    currentX2 += (mouseX2 - currentX2) * 0.5;
    currentY2 += (mouseY2 - currentY2) * 0.5;
    fgImage2.style.clipPath = `circle(${clipSize}px at ${currentX2}px ${currentY2}px)`;

    
    currentX3 += (mouseX3 - currentX3) * 0.5;
    currentY3 += (mouseY3 - currentY3) * 0.5;
    fgImage3.style.clipPath = `circle(${clipSize}px at ${currentX3}px ${currentY3}px)`;

    
    currentX4 += (mouseX4 - currentX4) * 0.5;
    currentY4 += (mouseY4 - currentY4) * 0.5;
    fgImage4.style.clipPath = `circle(${clipSize}px at ${currentX4}px ${currentY4}px)`;

    
    currentX5 += (mouseX5 - currentX5) * 0.12;
    currentY5 += (mouseY5 - currentY5) * 0.12;
    fgImage5.style.clipPath = `circle(${clipSize}px at ${currentX5}px ${currentY5}px)`;

    requestAnimationFrame(animate);
}

animate();

