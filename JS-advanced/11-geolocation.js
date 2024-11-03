function promisifiedFunc() {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          res(position);
        },
        (err) => {
          rej(err);
        }
      );
    });
  }
  
  promisifiedFunc()
    .then((position) => {
      console.log(position); 
    })
    .catch((error) => {
      console.error("Ошибка при получении позиции:", error);
    });
  