/*let enterpices = [];
let friendList = document.querySelector(".friend-list");

fetch("./js/directory.json")
  .then((response) => response.json())
  .then((data) => {
    enterpices = data;
    createFriendList();
  })
  .catch((err) => console.log(err));

function createFriendList() {

  enterpices.forEach((friend) => {
    var liElement = document.createElement("LI");
    var imgElement = document.createElement("img");
    
    liElement.innerText = friend["name"];
    friendList.appendChild(liElement);

    imgElement.src = friend["img"];
    ulElement.appendChild(imgElement);
  });
}
*/

const requestURL = 'https://gislpzbyu.github.io/chamberOfCom/js/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const bus = jsonObject['businesses'];
    for (let i = 0; i < bus.length; i++ ) {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let h2 = document.createElement('h2');
        let a = document.createElement('a');
        let p_1 = document.createElement('p');
        let p_2 = document.createElement('p');
        let p_3 = document.createElement('p');

        logo.setAttribute('src', "images/bus/" + bus[i].logo);
        logo.setAttribute('alt', bus[i].name + 'logo');
        h2.textContent = bus[i].name;
        a.textContent = bus[i].website;
        a.setAttribute('href', bus[i].website)
        p_1.textContent = bus[i].address1;
        p_2.textContent = bus[i].address2;
        p_3.textContent = bus[i].phone;

        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(a);
        card.appendChild(p_1);
        card.appendChild(p_2);
        card.appendChild(p_3);

        document.querySelector('div#local-b').appendChild(card);
    }
  });

  
function toggleDirectoryGrid(){
  document.getElementById("local-b").className = "grid";
}

function toggleDirectoryList(){
  document.getElementById("local-b").className = "list";
}