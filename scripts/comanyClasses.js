class Person{
    constructor(first_name, last_name, age, address){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.address = address;
    } 
}
class Employee extends Person{
    constructor(first_name, last_name, age, address, emp_id, position, salary){
        super(first_name, last_name, age, address);
        this.emp_id = emp_id;
        this.position = position;
        this.salary = salary;
    }
}
class roles extends Employee{
    constructor(first_name, last_name, age, address, emp_id, position, salary, role){
        super(first_name, last_name, age, address, emp_id, position, salary);
        this.role = role;
    }
}
non_Employees=[
    new Person("John", "Doe", 30, "123 Main St"),
    new Person("Jane", "Smith", 25, "456 Oak Ave"),
    new Person("Alice", "Johnson", 28, "789 Pine Rd")   
]
employees=[
    new Employee("Bob", "Brown", 35, "321 Maple St", "E001", "Manager", 60000),
    new Employee("Charlie", "Davis", 40, "654 Cedar Ave", "E002", "Developer", 80000),
    new Employee("Eve", "Wilson", 32, "987 Birch Rd", "E003", "Designer", 70000)
]
roles_list=[]

// Promises Practice
const fruits = ["Apple", "Banana", "Cherry"];
function getFruits(){
    
    return new Promise((resolve, reject) => {
        if (fruits.includes("Mango")) {
            return resolve("Mango is available");
        } else {
            return reject("Mango is not available");
        }
    });
}
async function checkFruits(){
    try {
        const message = await getFruits();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
checkFruits();
fruits.push("Grapes");
checkFruits();
fruits.push("Peach");
checkFruits();
fruits.push("Mango");
checkFruits();
fruits.push("Orange");
checkFruits();