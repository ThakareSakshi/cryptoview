let top_coins_container=document.querySelector("#top-coins");


fetchApi()
top_coins()
async function fetchApi(){
    let response=await fetch("https://api.coingecko.com/api/v3/search/trending");
    let result=await response.json();
    console.log(result);
    return result;
}

 async function top_coins(){
    let coins_list=await fetchApi();
    displayCoins(coins_list.coins);
}

function displayCoins(coins){
    
 coins.forEach(element => {
    
    let coin_container=document.createElement("div");
    coin_container.classList.add("top");
    
    coin_container.innerHTML=`<img src="${element.item.small}"><div><h3>${element.item.name}</h3><p>₹ ${(2884587.19*element.item.price_btc).toFixed(4)}</p></div>`
    top_coins_container.appendChild(coin_container)
 });
}