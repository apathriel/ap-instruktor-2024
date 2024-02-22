class Tamagotchi {
    constructor() {
        this.happinessPercent = 50,
        this.hungerPercent = 100,
        this.boredomPercent = 0,
        this.playCount = 0
    }

    eatFood(food) {
        if (food == 'apple') {
            this.updateHunger(food, -10);
        } else if (food == 'cookie') {
            this.updateHunger(food, -20);
        } else if (food == 'sandwich') {
            this.updateHunger(food, -30);
        }
    }

    updateHunger(foodType, percent) {
        this.playCount = 0;
        this.hungerPercent = this.validateValueBoundaries(this.hungerPercent, percent);
        console.log(`Badtz Maru ate ${foodType}! Hunger level is now at ${this.hungerPercent}%!`)
    }

    play() {
        const hungerIncrease = 10;
        const boredomDecrease = -10;
        const happinessIncrease = this.validatePlayCount()

        this.happinessPercent = this.validateValueBoundaries(this.happinessPercent, happinessIncrease);
        this.hungerPercent = this.validateValueBoundaries(this.hungerPercent, hungerIncrease);
        this.boredomPercent = this.validateValueBoundaries(this.boredomPercent, boredomDecrease);

        this.playCount++;
        console.log(`Badtz Maru played! Happiness level is now at ${this.happinessPercent}%, hunger level is now at ${this.hungerPercent}%, and boredom level is now at ${this.boredomPercent}%.`)
    }

    validatePlayCount() {
        if (this.playCount < 3) {
            return 20;
        } else {
            return 5;
        }
    }

    validateValueBoundaries(valueToValidate, addedValue) {
        if (valueToValidate + addedValue > 100) {
            return 100;
        } else if (valueToValidate + addedValue < 0) {
            return 0;
        } else {
            return valueToValidate += addedValue;
        }
    }
}

// instantiate (create) new Tamatochi object, name it badtzMaru
const badtzMaru = new Tamagotchi();
