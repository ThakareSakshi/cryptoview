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
        <div class="name_container"><img src="${element.thumb}"><span class="name" > ${element.name} ${element.symbol}</span></div> <button>more info</button>`
         coin_list.appendChild(eachCoin);
    });

}

function moreInfo(){
    
}