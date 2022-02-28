const allPlayer=()=>{
    
   const searchValue = document.getElementById("search-box").value ;
   document.getElementById("search-box").value = '';
   document.getElementById('player-container').innerHTML='';
   document.getElementById('spinner').style.display='block'
   document.getElementById('player-info').innerHTML='';
   const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
fetch(url)
.then(res => res.json())
.then(data => displayPlayer(data.player) )
}
displayPlayer = players =>{
    document.getElementById('spinner').style.display='none'
    console.log(players)
for (const player of players) {
    const playerContainer = document.getElementById('player-container')
    const div = document.createElement('div')
    div.innerHTML=` <div class="card m-3 p-3" style="width: 18rem;">
    <img src="${player.strThumb}" alt="">
    <div class="card-body">
      <h5 class="card-title">Name  :${player.strPlayer}</h5>
      <p class="card-text">Country :${player.strNationality}</p>
      <p class="card-text">Gender  :${player.strGender}</p>
      <p class="card-text">Age     :${player.strNumber}</p>
      <button onclick="getPlayerDetails('${player.idPlayer}')" class="btn btn-outline-success">Details</button>
      <button onclick="deletePlayer()" class="btn btn-outline-danger">Delete</button>
    </div>
  </div>`
    playerContainer.appendChild(div)
    
}
}

const getPlayerDetails = (id) =>{
   
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => playerDetails(data.players[0]))

} 

const playerDetails = info =>{
    console.log(info);
    const playerInfo = document.getElementById('player-info')
    const div = document.createElement('div')
    div.innerHTML=`
        <div class="card m-3 p-3" style="width:90%;">
        <img src="${info.strThumb}" alt="">
    <div class="card-body">
      <h5 class="card-title">Name  :${info.strPlayer}</h5>
      <p class="card-text">Country :${info.strNationality}</p>
      <p class="card-text">Gender  :${info.strGender}</p>
      <p class="card-text">Age     :${info.strNumber}</p>
      <p class="card-text">Height   :${info.strHeight}</p>
      <p class="card-text">Weight   :${info.strWeight}</p>
      <p class="card-text">Date of Birth :${info.dateBorn}</p>
      <p class="card-text">Description    :${info.strDescriptionEN}</p>
      </div>
    </div> `
    playerInfo.appendChild(div)
}
const deletePlayer = () =>{
    // alert('delete clicked')
    document.getElementById('player-info').style.display='none'
} 


