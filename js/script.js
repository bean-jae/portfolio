// 사이트 진입시 실행되는 첫 메인페이지 텍스트이미지들 시간다르게 설정
document.querySelectorAll('.img_container').forEach((el, index) => {
    el.style.animationDelay = `${0.3 + (index * 0.12)}s`;
});


// 자기소개 스크롤 관련
const hover = document.querySelector('.introduce_text p');
const target = document.querySelector('.introduce_dot');

hover.addEventListener('mouseenter', () => {
  target.style.opacity = '0';
});

hover.addEventListener('mouseleave', () => {
  target.style.opacity = '1';
});

// 아트워크 카테고리별 표시 관련
document.querySelector('.category').addEventListener('click', (event) => {
    // 카테고리 외 클릭시 작동x
    if (!event.target.matches('[data-filter]')) return;

    const category = event.target.dataset.filter;
    const items = document.querySelectorAll('.my_artwork');
    const buttons = document.querySelectorAll('.category button');

    buttons.forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
    
    // 버전1
    items.forEach(item => {
        if (category === 'all' || item.dataset.type === category) {
            item.classList.remove('li_hidden');
        } else {
            item.classList.add('li_hidden');
        }
    });
    // 버전2 (아예 display none 처리)
    /*
    items.forEach(item => {
        item.classList.toggle('hidden', category !== 'all' && item.dataset.type !== category);
    });
    */

});
// 기본으로 all 선택
document.querySelector('.category button[data-filter="all"]').classList.add('selected');


const modal_item = document.querySelectorAll(".my_artwork");
const modals = document.querySelectorAll(".modal_container");

    // 모달 열기
    modal_item.forEach(item => {
        item.addEventListener("click", () => {
            const modalId = item.dataset.modal;
            document.getElementById(modalId).classList.add("show");

            $('body').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
            $('.modal_container').css('pointer-events', 'auto');
            $('body').css('pointer-events', 'none');

            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
            $.fn.fullpage.setMouseWheelScrolling(false);
            
        });
    });

  // 바깥 영역 클릭 시 모달 닫기
  document.querySelectorAll('.modal_container').forEach(modal => {
    modal.addEventListener('click', (e) => {
        const content = modal.querySelector('.modal_img');
        if (!content.contains(e.target)) {
            // 모달 닫기
            modal.classList.remove('show');

            //
            const iframe = modal.querySelector('.modal_img');
            if (iframe) {
                const src = iframe.src;
                iframe.src = '';       
                iframe.src = src;        
            }

            // fullPage 관련 스크롤 다시 활성화
            $('body').off('scroll touchmove mousewheel');
            $('body').css('pointer-events', 'auto');

            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
            $.fn.fullpage.setMouseWheelScrolling(true);
        }
    });
});

  





