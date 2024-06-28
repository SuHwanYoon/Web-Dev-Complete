const hobbies = ['sport','cooking',1,true];

// hobbies.forEach(hobby => {
//     console.log(hobby);
// });

for (const hobby of hobbies) {
    console.log(hobby);
}

console.log(
    hobbies.map(hobby => {
        return 'Hobby: ' + hobby
    })
);


