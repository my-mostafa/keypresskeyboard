
let locationKey = document.querySelector('#location')
let keiy = document.querySelector('#key')
let locationi = document.querySelector('#location')
let whichi = document.querySelector('#which')
let codei = document.querySelector('#code')
let keyCodei = document.querySelector('#keyCode')

document.body.addEventListener('keydown', function (ev) {
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	ev.preventDefault()
	keiy.innerHTML = ev.key	
	locationi.innerHTML = ev.location	
	whichi.innerHTML = ev.keyCode	
	codei.innerHTML = ev.code	
	keyCodei.innerHTML = ev.keyCode	

})