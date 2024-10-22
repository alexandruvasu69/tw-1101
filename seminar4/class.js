const person =  {
    name: 'Adrian',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

function User(email, nume) {
    this.email = email;
    this.name = nume;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log('User has logged in');
}

const user = new User('email@gmail.com', 'Adrian');

console.log(user);
console.log(person);
user.login();