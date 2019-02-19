// Please make a function named "add" that has the following behavior:
//
// add(x)(y) === (x + y)
// add(4)(5) === 9

const add = (x) => {
  let result;
  result = function (y) {
    console.log(x+y);
    return (x + y);
  }

  return result;
}

if (verify()) {
  console.log('Verified!');
} else {
  console.log('Try again.');
}

function verify() { 
  try {
    var x = Math.random()
      , y = Math.random();

    return (add(x)(y) === (x + y));
  } catch (e) {
    return false;
  }
}
