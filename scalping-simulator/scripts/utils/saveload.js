export function save(key, obj){
    const _obj = JSON.stringify(obj);
    window.localStorage.clear();
    window.localStorage.setItem(key, _obj);
    return;
}

export function load(key){
    if (!window.localStorage.getItem(key)) return false;
    return JSON.parse(window.localStorage.getItem(key))
}