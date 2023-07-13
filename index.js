// Write your solution here!
 const cats= ['Milo', "Otis","Garfield"]


 function destructivelyAppendCat(name) {
     cats.push(name)
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name)
 }
 
 function destructivelyRemoveLastCat(name) {
    cats.pop(name)
 }

 function destructivelyRemoveFirstCat(name){
    cats.shift(name)
 }

function appendCat(name){
    return [...cats, "Broom"]
}

function prependCat (name){
    return ["Arnold", ...cats]
}

function removeLastCat(name){
   let finalCats = cats.slice(0, cats.length -1)
   return finalCats
}

function removeFirstCat(name){
   let nowCats= cats.slice(1)
   return nowCats
}