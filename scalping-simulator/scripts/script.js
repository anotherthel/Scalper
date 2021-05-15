



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
    update('money', player.money.toLocaleString('en-US'));
}

function load(key){
    if (!window.localStorage.getItem(key)) return false;
    return JSON.parse(window.localStorage.getItem(key))
}

function save(key, obj){
    const _obj = JSON.stringify(obj);
    window.localStorage.clear();
    window.localStorage.setItem(key, _obj);
    return;
}





// related
const employees = {
    "cashiers": {
        amount: 0,
        base: 10,
        multiplier: 1.1
    }
}