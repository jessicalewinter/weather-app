module.exports = {
    add: (a,b) => {
        return a + b;
    },
    square: (x) => {
        return x * x;
    },
    setName: (user, fullName) => {
        var names = fullName.split(' ');
        user.firstName = names[0];
        user.lastName = names[1];
        return user;
    }
}

