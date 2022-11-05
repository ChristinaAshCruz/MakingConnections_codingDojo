function acceptRequest(id) {
  let element = document.querySelector(id);
  let connectionRequestTotal = document.querySelector("#connectRequestTotal");
  let yourConnectionsTotal = document.querySelector("#yourConnectionsTotal");
  element.remove();
  connectionRequestTotal.innerText--;
  yourConnectionsTotal.innerText++;
}
function denyRequest(id) {
  let element = document.querySelector(id);
  let connectionRequestTotal = document.querySelector("#connectRequestTotal");
  element.remove();
  connectionRequestTotal.innerText--;
}
