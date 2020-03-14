// Create a class called Desserts with two properties
class Desserts {
    constructor(type, calories) {
        this.type = type;
        this.calories = calories;
    }
}    

// Create a subclass called IceCream that extends Desserts with two additional properties
    class IceCream extends Desserts {
        constructor(type, calories, flavor, scoops) {
            super(type, calories); 
                this.flavor = flavor;
                this.scoops = scoops;
            }
            
// Create a method
        includeSpoon() {
           if(this.type === 'Ice Cream') {
            console.log('Here is your spoon!');
           }
        }
    }
// Create a variable that's a new instance of IceCream
const vanillaIceCream = new IceCream('Ice Cream',340,'Vanilla',3);

console.log(vanillaIceCream);

// Call includeSpoon method
vanillaIceCream.includeSpoon();

