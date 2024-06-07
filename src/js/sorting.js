export default function orderByProps(object, order = []) {
    const arr = [];
    if (order.length) {
      order.forEach((elem) => {
        if (elem in object) {
          arr.push({
            key: elem,
            value: object[elem],
          });
        }
      });
    }
  
    const arr1 = [];
    for (const prop in object) {
      if (order && !order.includes(prop)) {
        arr1.push({
          key: prop,
          value: object[prop],
        });
        arr1.sort((a, b) => {
          if (a.key > b.key) {
            return 1;
          }
          if (a.key < b.key) {
            return -1;
          }
          return 0;
        });
      }
    }
    return [...arr, ...arr1];
  }