let panel = document.querySelector(".panel");
let btns = document.querySelectorAll(".btns li");
let ring = document.querySelector("#ring");

// 버튼에 반복을
btns.forEach((el, index) => {
  // 각 버튼요소에 클릭이벤트를 입히고
  el.addEventListener("click", (e) => {
    // a 태그 이전 이벤트를 막아주고
    e.preventDefault();
    // 패널을 움직이게 하고
    panel.style.marginLeft = "-100" * index + "%";
    panel.style.transition + "0.5s";
    // 모든 버튼을 비활성화 한 뒤
    for (let el of btns) el.classList.remove("on");
    // 클릭한 대상의 버튼만 활성화
    btns[index].classList.add("on");

    ring.className = "";
    ring.classList.add("rot" + index);
  });
});
