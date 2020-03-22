//server -> stringifies the data and sent it to us

const person ={
    name: 'jino'
}

console.log(typeof person)

const stringPerson = JSON.stringify(person)
console.log(stringPerson)   //'{"name":"jino"}'
console.log(typeof stringPerson)


const objPerson = JSON.parse(stringPerson)
console.log(objPerson)
console.log(typeof objPerson)

/*

object
{"name":"jino"}
string
{ name: 'jino' }
object

*/