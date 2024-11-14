function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new Error("Вы передали не массив"));
    }
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Первый выполнен"), 100);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Второй выполнен"), 50);
  //setTimeout(() => reject('Второй отклонен'), 50);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Третий выполнен"), 150);
});

PromiseRace([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
