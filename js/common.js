$(function(){
   //start
    $('header').load('https://graphicnovel.github.io/coffeeforyou/inc_head_foot.html header .h_container',menuTrigger);
    $('footer').load('https://graphicnovel.github.io/coffeeforyou/inc_head_foot.html footer .f_container', scrollTop);
    
    var body = document.querySelector('body');
    var menuList = document.querySelectorAll('.h_container a');
    var btn = document.querySelectorAll('button');


    function menuTrigger(){
        // menu-trigger active 클래스 추가
        var menu = document.querySelector('.menu-trigger');
        var nav = document.querySelector('nav');
        
        menu.addEventListener('click',function(){
            menu.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    function scrollTop(){
        //top 버튼
        setTimeout(function(){
            var topButton = document.querySelector('.topBtn');

            topButton.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        });
        },500);
    }
        

    //------- 화면 전환 효과 -------
        //시간지연 => body에 active 클래스 추가
        // setTimeout(function(){
        //     body.classList.add('active');
        // },10);
        // setTimeout(function(){
        //     body.classList.remove('active');
        // },1000);

        // menuList 누를 때 body active 클래스 제거
        // menuList href 불러옴
        // menuList.forEach(function(el){
        //     el.addEventListener('click', function(e){
        //         e.preventDefault();

        //         setTimeout(function() {
                    
        //             location.href = el.href;
        //         },500);
        //     });
        // });
        
        btn.forEach(function(el){
            el.addEventListener('click', function(e){
                   e.preventDefault();
                    body.classList.remove('active');

                    setTimeout(function() {
                        location.href = el.dataset.link;
                    },500);
                });
        });


    //end
});

    