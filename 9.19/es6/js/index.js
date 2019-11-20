


console.log(location.href)

// ?wd=周杰伦&rsv_spt=1&rsv_iqid=0x998c22db0099a6fb&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=js%2520throw&inputT=4350&rsv_t=b636tq3cAw7a1JRLS1D7SDxl%2F09zY3PTdUcOOuCxiFp9%2BlIpG2bPwbsRIIpFobk5U5wT&rsv_pq=9251312e00a1de0d&rsv_sug3=36&rsv_sug1=30&rsv_sug7=100&rsv_sug2=0&rsv_sug4=5020
// ?charset=utf-8&word=%E5%91%A8%E6%9D%B0%E4%BC%A6

function getQuery(key) {
  /*location.search.substr(1).split('&').forEach(item => {
    if (item.split('=')[0] === key) {
      return item.split('=')[1]
    }
  })*/

  let search = location.search.substr(1).split('&')
  for (let i = 0; i < search.length; i++) {
    if (search[i].split('=')[0] === key) {
      return search[i].split('=')[1]
    }
  }
}

console.log(getQuery('type'))



/*
let promise1 = new Promise((resolve, reject) => {
  // resolve：返回成功的结果
  // reject：返回错误的结果
  // ajax
  // 状态的监听
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});
*/

/*function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
      // reject('foo')
    }, 3000);
  });
}*/

/*promise1().then((res) => {
  console.log(res);
}, (res) => {
  console.log(res);
});*/

/*promise1().then((res) => {
  // 处理正确的情况
  console.log(res);
}).catch((res) => {
  // 处理错误的情况
  console.log(res)
}).finally(() => {
  console.log('finally')
})*/


// const p = Promise.all([p1, p2, p3]);


/*
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
}).then(result => result)
  .catch(e => e);

const p2 = new Promise((resolve, reject) => {
  reject(new Error('报错了'))
}).then(result => result)
  .catch(e => e);

Promise.all([p1, p2])
  .then(result => {

    console.log(result[0])
    console.log(result[1])

  })
  .catch(e => console.log(e));
*/

// console.log(promise1);

