// // element 생성
// const li = document.createElement('li');

const { Button } = require("bootstrap");

// // class 추가하기
// ㅣi.className = 'list-group-item';

// // id추가
// li.id = 'new-item';

// // attrubute 추가
// li.setAttribute('name', 'New list item');

// // 새로운 text node 생성하고 더하기
// li.appendChild(document.createTextNode('New list item'));

// // 새로운 link element 생성
// const link = document.createElement('a');

// //class 추가
// link.className = 'alarm-item';

// // icon html 추가
// link.innerHTML = '<i class="bi-alarm"></i>';

// // link를 li에 더하기
// li.appendChild(link);

// // li를 ui의 자식으로 더하기
// document.querySelector('ul.list-group').appendChild(li);

// console.log(li);


// js코드에서 프로퍼티로 등록
window.onload = function() {
    //문서가 load 될 때 이 함수 실행
    let text = document.getElementById("text");

    //아이디가 "text"인 요소를 return
    text.innerHTML = "HTML 문서 loaded";
}

// addEventListener 메소드를 사용
const aElement = document.querySelector('a');
aElement.addEventListener('click', () => {
    alert('a element clicked');
});

// Event 객체
const buttonElement = document.querySelector('.btn'); // 클래스 선택자로 변경
buttonElement.addEventListener('click', handleClick);

function handleClick(event) {
    let val;
    val = event; // Event object

    //Event target element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    //Event type
    val = event.type;

    // 윈도우로부터의 거리 좌표
    val = event.clientY;
    val = event.clientX;

    // 요소로부터의 거리 좌표
    val = event.offsetY;
    val = event.offsetX;

    console.log(val);
}