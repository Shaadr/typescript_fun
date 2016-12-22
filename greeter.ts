interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = {firstname: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user)
