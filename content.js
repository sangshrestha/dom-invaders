(function () {
  console.log("dom-invaders content.js");

  const ship = document.createElement("div");
  ship.id = "dom-invaders-ship";
  ship.style.backgroundImage = `url("${chrome.runtime.getURL("assets/ship.png")}")`;
  document.body.appendChild(ship);

  console.log(ship);
})();
