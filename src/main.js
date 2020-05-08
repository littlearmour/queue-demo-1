const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");
let n = 0;
let queue = [];
btnCreateNumber.onclick = () => {
  n += 1;
  //   queue.push(n);
  queue.push.call(queue, n);
  spanNewNumber.innerText = n;
  spanQueue.innerText = JSON.stringify(queue);
};
btnCallNumber.onclick = () => {
  if (queue.length === 0) {
    alert("叫个屁啊");
    return;
  }
  //   const n = queue.shift();
  const n = queue.shift.call(queue);
  divScreen.innerText = `请 ${n} 号就餐`;
  spanQueue.innerText = JSON.stringify(queue);
};
