' use strict '

const btns = document.querySelectorAll("button");

// html tagdagi elementning classlarini chiqarib berish
// console.log(btns[0].classList.length);

// // taglardagi classlarning nomlarini aniqlash
// console.log(btns[0].classList.item(0)); // bu indexi bo'yicha aniqlanadi

// // class qo'shish
// btns[1].classList.add('blue');

// // classni ochirish
// btns[0].classList.remove('blue');

// // bor bo'lsa yo'q qildi yo'q bo'lsa bor qiladi
// btns[0].classList.toggle('blue');

// // qo'shimcha class qo'shish
// btns[1].classList.add('blue','some');

// tagda biror bir klass bor yoki yo'qligini tekshirish
if(btns[0].classList.contains('blue')){
    console.log('bor | containes metodi ishladi');
}
if(btns[0].classList.contains('red')){
    console.log("yo'q");
}

// tagga hodisa qo'shish
btns[0].addEventListener('click',()=>{
    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red')
    // }
    // else{
    //     btns[1].classList.remove('red');
    // }
    // Yuqoridagi kodni optimallashtirish
    btns[1].classList.toggle('red');
})


