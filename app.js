const allPlayer=()=>{
   const searchValue = document.getElementById("search-box").value ;
   const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
fetch(url)
.then(res => res.json())
.then(data => displayPlayer(data.player) )
}
displayPlayer = players =>{
    console.log(players)
for (const player of players) {
    const playerContainer = document.getElementById('player-container')
    const div = document.createElement('div')
    div.innerHTML=` <div class="card m-3 p-3" style="width: 18rem;">
    <img src="${player.strThumb}" alt="">
    <div class="card-body">
      <h5 class="card-title">Name :${player.strPlayer}</h5>
      <p class="card-text">Country :${player.strNationality}</p>
      <p class="card-text">Gender :${player.strGender}</p>
      <p class="card-text">Age :${player.strNumber}</p>
      <button class="btn btn-outline-denger">Delete</button>
      <button class="btn btn-outline-sucess">Details</button>
    </div>
  </div>`
    playerContainer.appendChild(div)
    
}
}
