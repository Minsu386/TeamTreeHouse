
function hiAndBye(func) {
	func()
	console.log("Bye")
}
hiAndBye(function sayHi(){
	console.log("Hello")
})