

// Decorator function to add a prefix to all properties
function addPrefix(prefix: string) {
    return function (target: any, key: string) {
        let value = target[key];

        const getter = () => value;
        const setter = (newValue: string) => {
            value = prefix + newValue;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

// Create a class with properties and apply the decorator
class Person {
    @addPrefix("Name: ")
    name: string;

    @addPrefix("Age: ")
    age: number;
}

// Create an instance of the class
const person = new Person();

// Use the spread operator to set property values
const newValues = {
    name: "John",
    age: 30,
};

// Use the spread operator to set property values
Object.assign(person, newValues);

// Access the decorated properties
console.log(person.name); // Output: "Name: John"
console.log(person.age);  // Output: "Age: 30"