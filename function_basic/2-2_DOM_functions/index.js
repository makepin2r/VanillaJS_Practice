//selecting html elements with JS

const title = document.getElementById("title");

console.log(title);

title.innerHTML = "Hi! From JS";

// querySelector: 자식의 첫번째 노드를 반환
const title2 = ocument.querySelector("#title"); // title인 자식들 중 첫 번째 노드