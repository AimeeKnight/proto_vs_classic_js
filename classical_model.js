////////// 1 //////////
function Answer(value) {
	this._val = value;
}
////////// 2 //////////
Answer.prototype.get = function fn1() {
	return this._val;
};

////////// 3 //////////
var lifeAnswer = new Answer(42);
lifeAnswer.get(); // 42

////////// 4 //////////
var dessertAnswer = new Answer(3.14159);
dessertAnswer.get(); // 3.14159

////////// 5 //////////
function FirmAnswer(value) {
	Answer.call(this, value);
}
// Trash auto created FirmAnswer.prototype (garbage collected),
// set FirmAnswer.prototype to new object we create by extending Answer.prototype
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

////////// 6 //////////
FirmAnswer.prototype.get = function fn2() {
	return Answer.prototype.get.call(this) + "!!";
};

////////// 7 //////////
var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get(); // "7!!"

////////// 8 //////////
var magicAnswer = new FirmAnswer(3);
magicAnswer.get(); // "3!!"