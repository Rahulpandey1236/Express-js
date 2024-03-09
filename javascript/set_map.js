// unordered collection

//unque values

// const setexample = new Set()
// setexample.add(10)
// setexample.add(20)
// setexample.add(30)
// // setexample.clear()
// setexample.delete(10)
// console.log(setexample.size);
// console.log(setexample);



const data = new Set()


// data.add("john")
// data.add({
//     name:"javascropt"
// })
// console.log(data.entries());

data.add(10)
data.add(20)
data.add(30)
data.add(40)

// function multiply(val1,val2){
// console.log(`data[${val1}:data[${val2*2}]]`);
// }

// data.forEach(multiply)


//console.log(data.has(20));//to chek that data is present or not in the set

//console.log(data.keys());//give th all valus

//console.log(data.values());//this is for iterative  key and values are same


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//




//convert a array into set

let arr = [10,20,30,40,10,20,30,40,10,20,30,40,10,20,30,40]
 
const set = new Set(arr)
console.log(typeof set);
console.log(set);
console.log(Array.from(set));





//++++++++++++++++++    MAP  ++++++++++++++++++++++

//store data in key value pair
//map alow keys of any type

let map = new Map()

map.set('1','stringvslue')
map.set(1,'numbervlue')
map.set(true,'booleanvluae')
console.log(map.get(1));
console.log(map.get('1'));
console.log(map);


//hm objects ko bhi key bna skte h 


// let user= {
//     name:"john"
// }

// let visitmap = new Map()
// visitmap.set(user,100)
// console.log(visitmap);

// console.log(visitmap.get(user));




//CHAINING METHOD IN MAP

// const map2 = new Map()

// map2.set('1',"stringvalue")
//     .set(1,"numbervaue")
//      .set(true,'boolaeanvlaue')

//      console.log(map2);




//ITERATE IN MAP
let items = new Map(
    [
        ['tomatoes',100],
        ['onions',200],
        ['paato',300]
    ]
)

console.log(items.keys());//now this is map itertor we can loop easily

for(let vegies of items.keys()){
    console.log(vegies);
}

console.log(items.values());//now this is map itertor we can loop easily

for(let vegies of items.values()){
    console.log(vegies);
}



//for key value pair we can use entries

for(let vegies of items.entries()){
    console.log(vegies);
}



//for each to find key values pairs
items.forEach((value,key,map)=>{
    console.log(`${key},${value}`);
})


//MAP from objects

let user2 =  {
    name:"john",
    age:45
}

let newmap = new Map(Object.entries(user2))
console.log(newmap);

