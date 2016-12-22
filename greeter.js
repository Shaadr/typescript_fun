function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstname: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
