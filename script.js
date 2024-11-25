let password = [];
password.push("PassWOrd1IYOsmagrei","PaSSWord2mashams","PsWRD3")

for (let i = 0 ; i < password.length ; i++) {
    let currentPassword = password[i].toLowerCase();
    let passwordStrenght = currentPassword.length >=8 ? "Strong Password": "Weak Password";

    console.log(`${currentPassword}: ${passwordStrenght}`);
}

let counter = [];

for ( let c = 0 ; c < password.length; c++ ) {
counter.push(password[c].length) 
}
console.log("Numbers of letters in password", counter);


password.shift();
console.log("First Password Removed", password);

password.unshift ("isurchevniamamulsaromshvilisjobdesmamasa")
console.log("New password", password);