//aos 영역
AOS.init();

//header 메뉴 내렸을때
const header = document.querySelector("#header");
const allCont = document.querySelectorAll(".acont");
const allGnb = document.querySelectorAll(".gnb > li");

let contStart = [];

window.addEventListener("scroll",function(){
    let scMove = window.scrollY;

    if(scMove > 0){
        header.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
    }

    for(let p = 0; p < allCont.length; p++){
        contStart[p] = allCont[p].offsetTop;
        if(scMove >= contStart[p]){
            for(let j = 0; j < allGnb.length; j++){
                allGnb[j].classList.remove("active");
            }
            allGnb[p].classList.add("active");
        }
    }
    
});

//header 메뉴 클릭했을때 이동
for(let i = 0; i < allCont.length; i++){
    allGnb[i].addEventListener("click",function(e){
        e.preventDefault();

        for(let j = 0; j < allCont.length; j++){
            allGnb[j].classList.remove("active");
        }
        allGnb[i].classList.add("active");

        let moveMenu = allCont[i].offsetTop;
        window.scrollTo({
            top: moveMenu,
            behavior: "smooth"
        });
    });
}

//cont4 영역 탭메뉴
const portBtns = document.querySelectorAll(".port_btns > li");
const allPortfolio = document.querySelectorAll(".portfolio_all");

for(let i = 0; i < portBtns.length; i++){
    portBtns[i].addEventListener("click",function(e){
        e.preventDefault();
        for(let j = 0; j < portBtns.length; j++){
            portBtns[j].style.background = "transparent";
            portBtns[j].querySelector("a").style.color = "#000";
            
            allPortfolio[j].style.display = "none";
        }
        portBtns[i].querySelector("a").style.color = "#fff";
        portBtns[i].style.background = "#92d9ff";
        portBtns[i].style.borderRadius = "6px";
        allPortfolio[i].style.display = "flex";
    });
}

//첫번째 포트폴리오 데스크탑
let port1Openpc;
function port1Desk(){
    port1Openpc = window.open('http://zflip1.dothome.co.kr/portfolio','portfolio001','width=1920px, height=1080px, left=200px, scrollbars=yes');
}

//첫번째 포트폴리오 태블릿
let port1Open;
function port1Tab(){
    port1Open = window.open('http://zflip1.dothome.co.kr/portfolio','portfolio1','width=1024px, height=800px, scrollbars=yes, top=60px, left=200px');
}

//첫번째 포트폴리오 모바일
let port1Open2;
function port1Mob(){
    port1Open2 = window.open('http://zflip1.dothome.co.kr/portfolio','portfolio01','width=415px, height=600px, scrollbars=yes, top=60px, left=200px');
}

//두번째 포트폴리오 데스크탑
let port2Openpc;
function port2Desk(){
    port2Openpc = window.open('http://zflip1.dothome.co.kr/portfolio2','portfolio002','width=1920px, height=1080px, left=200px, scrollbars=yes');
}

//두번째 포트폴리오 태블릿
let port2Open;
function port2Tab(){
    port2Open = window.open('http://zflip1.dothome.co.kr/portfolio2','portfolio2','width=984px, height=800px, top=60px, left=200px, scrollbars=yes');
}

//두번째 포트폴리오 모바일
let port2Open1;
function port2Mob(){
    port2Open1 = window.open('http://zflip1.dothome.co.kr/portfolio2','portfolio02','width=415px, height=600px, top=60px, left=200px, scrollbars=yes');
}

//세번째 포트폴리오 데스크탑
let port3Openpc;
function port3Desk(){
    port3Openpc = window.open('http://zflip1.dothome.co.kr/portfolio3','portfolio003','width=1920px, height=1080px, left=200px, top=60px, scrollbars=yes');
}

//네번째 포트폴리오 데스크탑
let port4Openpc;
function port4Desk(){
    port4Openpc = window.open('http://zflip1.dothome.co.kr/portfolio4','portfolio004','width=1920px, height=1080px, left=200px, top=60px, scrollbars=yes');
}

//다섯번째 포트폴리오 데스크탑
let port5Openpc;
function port5Desk(){
    port5Openpc = window.open('http://zflip1.dothome.co.kr/portfolio5','portfolio005','width=1920px, height=1080px, left=200px, top=60px, scrollbars=yes');
}

//site_move 방지
const siteMove = document.querySelectorAll(".site_move");

for(let i = 0; i < siteMove.length; i++){
    siteMove[i].addEventListener("click",function(e){
        e.preventDefault();
    });
}

//up 영역
const up = document.querySelector("#up a");
window.addEventListener("scroll",function(){
    let scrollMove = window.scrollY;
    
    if(scrollMove > 0){
        up.classList.add("top");
    }
    else{
        up.classList.remove("top");
    }
});

up.addEventListener("click",function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});