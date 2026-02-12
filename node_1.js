console.log("Hello Welcome To Node JS - Server Side Scripting.....")

a=20
b=30
console.log(a+b)

const Demo=(a=0,b=0)=>{
    return a+b;
    // console.log(a+b)

}
console.log(Demo(20,40))
console.log(Demo(100))


// callback function

// behave like async i.e parrael execution i.e it doesnt wait for function exectuion
// i will call back later

// passing one function inside into another function as a a argument

// OR Execute one function into another function
// one function execute after another function finish their execution

// eg


function A(){
    console.log("Hello FUnction A")
}
// A()


function B(callback)
{
    callback()
    console.log("hello FUnction B.....")
}


B(A)

// or

// B(function A(){
//     console.log("Hello function A....")
// })

// *********************

const Calci=(a,b)=>{
    // console.log(a+b)    
    return a+b
}

const Addition=(callback,x,y)=>{
    result=callback(20,30)+(x+y)
    console.log("Addition Function",result)
}

Addition(Calci,100,200)


// HOF- Higher Order Functions

// 1- Such a function which we passing one function into another function as a argument
// eg-callback function

//2 - one function return another function
// eg

function Mult(x){

    return function B(y){
        console.log(x*y)
    }
}

Mult(20)(10)



// map

// data.map(()=>{
    
// })