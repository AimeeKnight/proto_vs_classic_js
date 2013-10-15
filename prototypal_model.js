////////// 1 //////////
var AnswerPrototype = {
	constructor: function fn0(value) {
		this._val = value;
	},
	////////// 2 //////////
	get: function fn1() {
		return this._val;
	}
};

////////// 3 //////////
var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get(); // 42

////////// 4 //////////
var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14159);
dessertAnswer.get(); // 3.14159

////////// 5 //////////
var FirmAnswerPrototype = Object.create(AnswerPrototype);

////////// 6 //////////
FirmAnswerPrototype.get = function fn2() {
	return AnswerPrototype.get.call(this) + "!!";
};

////////// 7 //////////
var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get(); // "7!!"

////////// 8 //////////
var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get(); // "3!!"