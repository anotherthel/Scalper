import { update } from "./utils/utils"
import { save, load } from "./utils/saveload";

let player = {
    money: 0,
    totalincome: 0,
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