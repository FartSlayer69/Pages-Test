import {Tween,Easing,Group} from 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/25.0.0/tween.esm.js'

setTimeout(() => {
  const p = document.createElement("p");
  p.innerText = "and it's dynamic, too!";
  document.body.insertBefore(p, document.getElementById("clickme"));
}, 2000);
setTimeout(() => {
  const h1 = document.createElement("h1");
  h1.innerText = "you should like scroll down";
  document.body.insertBefore(h1, document.getElementById("clickme"));
}, 4000);

const box = document.getElementById('clickme') // Get the element we want to animate.

const coords = {x: 150, y: 15000}
console.log(coords)
function update() {
		// Called after tween.js updates 'coords'.
		// Move 'box' to the position described by 'coords' with a CSS translation.
	box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)')
}
const tween = new Tween(coords, false) // Create a new tween that modifies 'coords'.
	.to({x: coords.x + 800, y: coords.y}, 1000) // Move to (300, 200) in 1 second.
	.easing(Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
	.onUpdate(update)
const tween2 = new Tween(coords, false) // Create a new tween that modifies 'coords'.
	.to({x: coords.x, y: coords.y}, 1000) // Move to (300, 200) in 1 second.
	.easing(Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
	.onUpdate(update)
tween.chain(tween2)
tween2.chain(tween)
tween.start() // Start the tween immediately.
const group = new Group(tween,tween2)
// Setup the animation loop.
function animate(time) {
	group.update(time)
	tween3.update(time)
	requestAnimationFrame(animate)
}
var size = {size: 175};
const sound = document.getElementById("sound")
const sound2 = document.getElementById("sound2")
const tween3 = new Tween(size, false) // Create a new tween that modifies 'coords'.
	.to({size:125}, 500) // Move to (300, 200) in 1 second.
	.easing(Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	.onUpdate(function(){
		console.log(size)
		box.style.fontSize = size.size + "px"
	})
sound.preservesPitch = false;
var clickTimes = 1
box.addEventListener("click", function(){
	if (clickTimes == 40){
		clickTimes += 1
		sound2.play()
		tween3.stop();
		tween3.start();
		box.innerHTML = "HAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAHHAHAHAHAAHAHHAHAHAHAHAHAHAHAHAHAH"
		for (let i = 0; i < 350; i++) {
			let newText = document.createElement("h1")
			setTimeout(() => {
				newText.innerHTML = "HAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAHHA"
				newText.style.color = "rgb("+String(Math.floor(Math.random()*255) + 1)+","+String(Math.floor(Math.random()*255) + 1)+","+String(Math.floor(Math.random()*255) + 1)+")"
				newText.style.paddingLeft = String(Math.floor(Math.random()*50) + 1)+"%"
				document.body.appendChild(newText)
				setInterval(function(){
					newText.style.color = "rgb("+String(Math.floor(Math.random()*255) + 1)+","+String(Math.floor(Math.random()*255) + 1)+","+String(Math.floor(Math.random()*255) + 1)+")"
				},75)
			},5 * i)
		}
		setTimeout(() => {
			window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
		},5000)
	}else{ if (clickTimes < 40){
		var lesText = "CLICK ME MORE"
		if (clickTimes > 5) {
			lesText = "ClICK ME "+String(40 - clickTimes)+" MORE TIMES"
		}
		for (let i = 0; i < clickTimes; i++) {
			lesText = lesText + "!"
		}
		clickTimes += 1
		box.innerHTML = lesText
		box.style.fontSize = "175px";
		if (sound.paused) {
			sound.play();
		}else{
			sound.currentTime = 0
		}
		sound.playbackRate += 0.075;
		tween3.stop();
		tween3.start();
	}
	}
});
requestAnimationFrame(animate);