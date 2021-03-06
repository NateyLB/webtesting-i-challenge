module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
    return { ...item, enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20};
}

function fail(item) {
 if(item.enhancement< 15){
   return({...item, durability: item.durability > 5 ? item.durability - 5 : 0 })
 } else{
   if( item.enhancement> 16){
    return({...item, durability: item.durability > 10 ? item.durability - 10: 0, enhancement: item.enhancement - 1})
  }
  return({...item, durability: item.durability > 10 ? item.durability - 10: 0})
 }
}

function repair(item) {
  return { ...item, durability: 100,};
}

function get(item) {
  return { ...item, name: item.enhancement > 0? `[+${item.enhancement}] ${item.name}`: item.name };
}
