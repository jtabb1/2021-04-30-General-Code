
function qunpack(receiver, arr) {
    console.log('doing qunpack now:');
    for (let val of arr)
      receiver.push(val)
  }
  
  let i1=100,i2=200,i3=300,i4=400;
  function qflatten(collection, shallow, newArr=[]) {
    console.log('array check');
    console.log(collection);
    console.log(shallow);
    console.log([...newArr]);
    console.log([...newArr].length);
    console.log(`i1 = ${++i1}`);
  if (!Array.isArray(collection)) return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        console.log('before shallow iteration');
        console.log(`i4 = ${++i4}`);
        Array.isArray(val) ? qunpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        console.log('starting iteration');
        console.log(collection);
        console.log(val);
        console.log([...newArr]);
        console.log([...newArr].length);
        console.log(`i2 = ${++i2}`);
        qflatten(val, false, newArr)
        console.log('iteration after qflatten');
        console.log(collection);
        console.log(val);
        console.log([...newArr]);
        console.log([...newArr].length);
        console.log(`i3 = ${++i3}`);
      }
    }
    return newArr
  }
  
  console.log([1, [2, 3], [[4, 5]]]);
  console.log(qflatten([1, [2, 3], [[4, 5]]]));
  