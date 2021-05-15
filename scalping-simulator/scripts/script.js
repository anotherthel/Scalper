import { update } from "./utils/utils"
import { save, load } from "./utils/saveload";



let player = {
    money: 0,
    totalincome: 1,
    clicks: {
        clickspclick: 1,
        total: 0
    },
    tick: 1000,
    config: {

    },
    employees: {
        
    }
}

setInterval(() => {
    document.getElementById('playerbalance').innerHTML = player.money.toLocaleString('en-us');
    player.money += player.totalincome;
}, player.tick);

function clickMoney(){
    player.money += player.clicks.clickspclick;
}

function s(){
    save('_player', player);
}
function l(){
    if (load('_player')) return player = load('_player');
    else return;
}

function updateView(){
    update('playerbalance', player.money.toLocaleString('en-us'));
}