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
    player.money += player.totalincome;
    updateView();
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

function update(id, value){
    return document.getElementById(id).innerHTML = value;
}
function updateView(){
    update('playerbalance', player.money.toLocaleString('en-US'));
}