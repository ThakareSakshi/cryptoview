let coin_list=document.querySelector(".coin_list");
let input=document.querySelector("input");
let search_btn=document.querySelector(".search_btn");


search_btn.addEventListener("click",async ()=>{
    let coins=await fetchApi(input.value);
    console.log(coins)
    displayListOFCoins(coins.coins)
})

async function fetchApi(coin_name){
    let response=await fetch(`https://api.coingecko.com/api/v3/search?query=${coin_name}`);
    let result=await response.json();
    return result;


}

function displayListOFCoins(coinList){
    coin_list.innerHTML=""
    coinList.forEach(element => {
        let eachCoin=document.createElement("div");
        eachCoin.classList.add("list-item");
        eachCoin.innerHTML=`
        <div class="name_container"><img src="${element.thumb}"><span class="name" > ${element.name} ${element.symbol}</span></div> <button onclick='moreInfo("${element.id}")'>more info</button>`
         coin_list.appendChild(eachCoin);
    });

}

async function moreInfo(coinname){
let coin_info=await fetch(`https://api.coingecko.com/api/v3/coins/${coinname}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
let result=await coin_info.json();
console.log(result);
const inr = result.market_data.current_price.inr;
  const usd = result.market_data.current_price.usd;
  const eur = result.market_data.current_price.eur;
  const gbp = result.market_data.current_price.gbp;
document.querySelector("main").style.display="none";
document.querySelector("#more_info").style.display="flex"
document.querySelector("#more_info").innerHTML=`
<h1>${result.name}</h1>
<div><img src="${result.image.large}"></div>
<h2>Price</h2>
<div class="prices"><span>INR: ${inr} </span> <span>USD: ${usd}</span> <span>EUR: ${eur}</span> <span>GBP: ${gbp}</span></div>
<div><h2>Description:</h2><p>${result.description.en}<p><div>`
}