



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

setInterval(() => {
    player.money += player.totalincome;
    updateView();
}, player.tick);

function clickMoney(){
    player.money += player.clicks.clickspclick;
    player.clicks.total ++;
    updateView();
}

function s(){
    save('_player', player);
}
function l(){
    if (load('_player')) return player = load('_player');
    else return;
}










//etc not game 
function nFmt(n, t='en-US'){
    return n.toLocaleString(t);
}
function update(id, value){
    return document.getElementById(id).innerHTML = value;
}
function updateView(){
    update('money', nFmt(player.money));
    update('incomepsec', nFmt(player.totalincome));
    update('tickcalced', nFmt(player.tick));
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