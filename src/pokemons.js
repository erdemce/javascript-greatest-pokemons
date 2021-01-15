// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(arr){
    return arr.map(elem=>elem).filter(ele=>ele.type.includes("Fire"))
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(arr){
    if(arr.length==0){return 0}
    let shortest=arr[0].height;
    return arr[arr.reduce((shortIndex,elem,index)=>{
        if(elem.height<shortest){
            shortest=elem.height;
            return index;
        }else {return shortIndex}
    },0)].name; 
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(arr){
    if(arr.length==0){return 0}
     let sumCandy=arr.reduce((acc,elem)=>{
         if(elem.candy_count){
             return acc+elem.candy_count
         }else{
             return acc;
         }

    },0);
    
    return Number((sumCandy/arr.length).toFixed(2))
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arr){
    if(arr.length==0){return 0}
    return arr.filter(elem=>elem.type.includes("Ground"))
    .slice(0,10)
    .map(item=>item.img)

}
// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(arr){
   
    if(arr.length==0){return 0}
    let weig=parseFloat(arr.filter(item=>item.name==="Pikachu")[0].weight)
    let names= arr.filter(elem=>parseFloat(elem.weight)>weig)
    .map(item=>{
        return item.name}
        );
    return names;
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(arr){
    let clonedArr=arr.map(item=>item)
    let sortedArr= clonedArr.sort((first,second)=>{
        if(first.name<second.name){return -1}else if(first.name>second.name){return 1}else{0}
    });
    return sortedArr.slice(0,20).map(item=>item.name);
}


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(arr){
    return arr.filter(item=>item.weaknesses.length==1).map(item=>item.name).slice(0,15);
}