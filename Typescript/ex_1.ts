export interface User {
    name: string;
    age: number;
    occupation: string;
}; // implementare interfata conform atributelor de mai jos

export const users: User[] = [ // schimbat unkown cu User
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) { // schimbat unkown cu User
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);