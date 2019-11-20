/*
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hhh')
    }, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  await timeout(ms);
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 3000);*/
/*
async function f() {
  throw new Error('出错了');

  // return 'hello world1';
}


f()
  .then(v => console.log(v))
  .catch(e => console.log(e))*/

/*async function f1() {
  try {
    await ''
  } catch (e) {

  } finally {

  }
}*/




/*try {
  throw new Error('error!!!')

} catch (e) {
  console.log(e)
} finally {
  console.log('over!!')
}*/







