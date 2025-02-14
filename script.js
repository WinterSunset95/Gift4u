const getPetals = document.querySelectorAll(".petal")
const getBuds = document.querySelectorAll(".bud")
const getPetals2 = document.querySelectorAll(".petal-2")
const getBuds2 = document.querySelectorAll(".bud-2")
const getPetals3 = document.querySelectorAll(".petal-3")
const getBuds3 = document.querySelectorAll(".bud-3")
const leaves = document.querySelectorAll(".leaf")
const leaves2 = document.querySelectorAll(".leaf-2")
const leaves3 = document.querySelectorAll(".leaf-3")
const stems = document.querySelectorAll(".stem, .stem-2, .stem-3")

const loader = document.querySelector("#loader")
const toHide = document.querySelectorAll(".article, .button")

document.onreadystatechange = function() {
	console.log(document.readyState)
	if (document.readyState == "complete") {
		loader.style.display = "none"
	}
}

function startAnimation() {
	console.log("Animated!!")

	toHide.forEach((item) => {
		item.style.display = "none"
	})

	stems.forEach((item, index) => {
		item.style.animation = `stemMain 1s linear`
		item.style.scale = "1"
		item.style.top = "1rem"
	})

	getPetals.forEach((item,index) => {
		item.style.animation = `petal${index+1} 1s linear`;
		item.style.scale = "1"
	})

	getBuds.forEach((item,index) => {
		item.style.animation = `bud${index+1} 1s linear`;
	})

	getPetals2.forEach((item,index) => {
		item.style.animation = `petal${index+1} 1s linear`;
		item.style.scale = "1"
	})

	getBuds2.forEach((item,index) => {
		item.style.animation = `bud${index+1} 1s linear`;
	})

	getPetals3.forEach((item,index) => {
		item.style.animation = `petal${index+1} 1s linear`;
		item.style.scale = "1"
	})

	getBuds3.forEach((item,index) => {
		item.style.animation = `bud${index+1} 1s linear`;
	})

	leaves.forEach((item, index) => {
		item.style.animation = `leaf${index+1}-intro 1s linear`;
		item.style.scale = "1"
	})

	leaves2.forEach((item, index) => {
		item.style.animation = `leaf${index+1}-intro 1s linear`;
		item.style.scale = "1"
	})

	leaves3.forEach((item, index) => {
		item.style.animation = `leaf${index+1}-intro 1s linear`;
		item.style.scale = "1"
	})
}

getPetals.forEach((item,index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `petal${index+1}-live 2s alternate-reverse infinite`;
	})
})

getBuds.forEach((item,index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `bud${index+1}-live 2s alternate-reverse infinite`;
	})
})

getPetals2.forEach((item,index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `petal${index+1}-live 2s alternate-reverse infinite`;
	})
})

getBuds2.forEach((item,index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `bud${index+1}-live 2s alternate-reverse infinite`;
	})
})

getPetals3.forEach((item,index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `petal${index+1}-live 2s alternate-reverse infinite`;
	})
})

getBuds3.forEach((item,index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `bud${index+1}-live 2s alternate-reverse infinite`;
	})
})

leaves.forEach((item, index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `leaf${index+1} 1s alternate-reverse infinite`;
	})
})

leaves2.forEach((item, index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `leaf${index+1} 1s alternate-reverse infinite`;
	})
})

leaves3.forEach((item, index) => {
	item.addEventListener("animationend", (element) => {
		element.target.style.animation = `leaf${index+1} 1s alternate-reverse infinite`;
	})
})
