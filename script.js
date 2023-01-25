var drops = [];
for (var i = 0; i < 300; i++) {
  var drop = document.createElement("div");
  drop.className = "raindrop";
  drop.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(drop);
  drops.push(drop);
}
function moveDrops() {
  for (var i = 0; i < drops.length; i++) {
    var drop = drops[i];
    var top = parseInt(drop.style.top);
    top += 5;
    if (top > window.innerHeight) {
      top = -10;
    }
    drop.style.top = top + "px";
  }
}
setInterval(moveDrops, 10);
