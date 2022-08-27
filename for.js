var data = {
    Name: "Keerthi Saagar", 
    Qualification: "B.E",
    Address: "Chennai-96",
    Communication: "Tamil, English, Kannada"
}

// JSON
console.log(JSON.stringify(data))

let json = [{"Name":"Keerthi Saagar",
"Qualification":"B.E",
"Address":"Chennai-96",
"Communication":"Tamil, English, Kannada"
}]

// for loop
for(let i = 0; i < json.length; i++) {
console.log(json);
}

// for...in 
for (let i in json) {
    console.log("index = ", json[i])
 }

// for...of
for(let value of json)  {
    console.log(json)
}

// forEach 
json.forEach(function(value) { 
    console.log(json); 
});