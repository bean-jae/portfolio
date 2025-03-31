document.querySelectorAll(".modal_img_wrap").forEach((modal) => {
    const slider = modal.querySelector(".modal_img_slider");
    const slides = modal.querySelectorAll(".modal_slide");
    const prevBtn = modal.querySelector(".modal_prev");
    const nextBtn = modal.querySelector(".modal_next");
    const paginationContainer = modal.querySelector(".modal_pagination");

    let index = 0;
    const totalSlides = slides.length;

    // 페이지네이션(동그라미) 생성
    paginationContainer.innerHTML = ""; // 기존 페이지네이션 초기화
    slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => updateSlide(i)); // 클릭 시 슬라이드 이동
        paginationContainer.appendChild(dot);
    });

    // 페이지네이션 요소 가져오기
    const dots = paginationContainer.querySelectorAll(".dot");

    // 슬라이드 이동 함수
    function updateSlide(newIndex) {
        index = newIndex;

        let slideWidth = window.innerWidth > 1920 ? window.innerWidth * 28.6 / 100 : 550;

        // 슬라이드 이동
        slider.style.transform = `translateX(-${index * slideWidth}px)`;

        // 페이지네이션 업데이트
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // 이전 버튼 클릭 시
    prevBtn.addEventListener("click", () => {
        index = index === 0 ? totalSlides - 1 : index - 1; // 첫 번째 슬라이드에서 이전 버튼 클릭하면 마지막 슬라이드로 이동
        updateSlide(index);
    });

    // 다음 버튼 클릭 시
    nextBtn.addEventListener("click", () => {
        index = index === totalSlides - 1 ? 0 : index + 1; // 마지막 슬라이드에서 다음 버튼 클릭하면 첫 번째 슬라이드로 이동
        updateSlide(index);
    });

    // 초기 페이지네이션 업데이트
    updateSlide(index);
});
