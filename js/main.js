//?==========--- Практична робота ---============
const carus = [
   { name: 'BMW', model: 'x5', prodaction: 2015, price: 45000, run: 310000, status: true, },
   { name: 'BMW', model: 'x6', prodaction: 2015, price: 45000, run: 310000, status: false },
   { name: 'MB', model: 's700', prodaction: 2017, price: 55000, run: 400000, status: true },
   { name: 'BMW', model: 'x87', prodaction: 2015, price: 45000, run: 310000, status: false },
   { name: 'SAAB', model: '9-3', prodaction: 2016, price: 40000, run: 350000, status: true },
   { name: 'MAN', model: 'tgx', prodaction: 2019, price: 70000, run: 200000, status: false },
   { name: 'Mazda', model: 'rx7', prodaction: 2018, price: 25000, run: 300000, status: true },
]


//! toLog(Назва массиву)
function toLog(obj) {
   const objKey = Object.keys(obj).length
   for (i = 0; i <= objKey - 1; i++) {
      const entries = Object.entries(obj[i])
      const entriesLenth = Object.entries(obj[i]).length
      for (r = 0; r <= entriesLenth - 1; r++) {
         const ent = Object.values(entries[r])
         ent[0] === 'status' ? ent[1] === true ? console.log(`${ent[0]} : У гаражі`) : console.log(`${ent[0]} : Десь поїхала`) : ent[1] === null ? console.log(`${ent[0]} : Немає значення`) : console.log(`${ent[0]} : ${ent[1]}`);
         
      }
      console.log('--------------------');
   }
}
// toLog(carus)

//! howCars(Назва массиву)
function howCars(obj) {
   const count = Object.keys(obj).length
   console.log(`У нашому гаражі є ${count} авто`);
}
// howCars()


//! toPrice(Назва массиву)
function toPrice(obj) {
   const sortCar = obj.sort((a, b) => a.price - b.price)
   toLog(sortCar)
}
// toPrice(carus)

//! toProdaction(Назва массиву)
function toProdaction(obj) {
   const sortCar = obj.sort((a, b) => b.prodaction - a.prodaction)
   toLog(sortCar)
}
// toProdaction(carus)

//! toRun(Назва массиву)
function toRun(obj) {
   const sortCar = obj.sort((a, b) => a.run - b.run)
   toLog(sortCar)
}
// toRun(carus)

//! searchCar(Назва массиву, імя машини, модель) || 
function searchCar(obj, name, model) {
   const nameCar = obj.filter((item) => { return item.name === name })
   const modelCar = obj.filter((item) => { return item.model === model })
   if (nameCar.length == 1) {
      toLog(nameCar)
   } else if (nameCar.length > 1) {
      if (model === undefined) {
         toLog(nameCar)
      } else if (modelCar.length == 0) {
         console.log('no');
      } else {
         toLog(modelCar)
      }
   } else {
      console.log('no');
   }
}
// searchCar(carus,'BMW')


//! addCar(Назва массиву, імя машини, модель, продакшин, ціна, пробіг) || для пропуску властивості "",
function addCar(obj, nameCar, modelCar, prodCar, priceCar, runCar) {
   let newCar = {
      name: nameCar,
      model: modelCar,
      prodaction: prodCar,
      price: priceCar,
      run: runCar,
   }
   const s = Object.entries(newCar)
   s.sort((a, b) => {
      if (a[1] === undefined) return 1
      if (b[1] === undefined) return -1
      return a[1] - b[1]
   })
   s.sort((a, b) => {
      if (a[1] === '') return 1
      if (b[1] === '') return -1
      return a[1] - b[1]
   })
   for (i = 0; i <= s.length - 1; i++) {
      if (s[i][1] === undefined || s[i][1] === '') {
         s.splice(i, Infinity)
      }
   }
   let newCarObj = Object.fromEntries(s)
   obj.push(newCarObj)
}
// addCar(carus,'tesla','xd','',23000)
// searchCar(carus,'tesla')


//! removeCar(Назва массиву, імя машини, модель) || для пропуску властивості "",
function removeCar(obj, name, model) {
   carus.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
   const nameCar = obj.filter((item) => { return item.name === name })
   const nameCarLength = obj.filter((item) => { return item.name === name }).length
   const modelCar = obj.filter((item) => { return item.model === model })
   const modelCarLength = obj.filter((item) => { return item.model === model }).length
   if (nameCar.length == 1) {
      const objKey = obj.findIndex(item => item.name === name)
      objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength)
   } else if (nameCar.length > 1) {
      if (model === undefined) {
         const objKey = obj.findIndex(item => item.name === name)
         objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength)
      } else if (modelCar.length == 0) {
         console.log('no');
      } else {
         const objKey = obj.findIndex(item => item.name === name && item.model === model)
         objKey === -1 ? console.log('no') : obj.splice(objKey, modelCarLength)
      }
   } else {
      console.log('no');
   }
}
// removeCar(carus,'BMW',)
// console.log(carus);


//! changeRun(Назва массиву,нове значення,імя машини, модель) || для пропуску властивості "",
function changeRun(obj, newRun, name, model) {
   carus.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
   const nameCar = obj.filter((item) => { return item.name === name })
   const modelCar = obj.filter((item) => { return item.model === model })
   if (nameCar.length == 1) {
      const objKey = obj.findIndex(item => item.name === name)
      objKey === -1 ? console.log('no') : obj[objKey].run = newRun
   } else if (nameCar.length > 1) {
      if (model === undefined) {
         const objKey = obj.findIndex(item => item.name === name)
         const objKeyLast = obj.findLastIndex(item => item.name === name)
         for (i = 0; i <= objKeyLast; i++) {
            objKey === -1 ? console.log('no') : obj[i].run = newRun
         }
      } else if (modelCar.length == 0) {
         console.log('no');
      } else {
         const objKey = obj.findIndex(item => item.name === name && item.model === model)
         objKey === -1 ? console.log('no') : obj[objKey].run = newRun
      }
   } else {
      console.log('no');
   }
}
// changeRun(carus,2400,'BMW','x87')
// toLog(carus)


//! changeValue(Назва массиву,Новий ключ,нове значення,імя машини, модель) || для пропуску властивості "",
function changeValue(obj, Val, newValue, name, model) {
   const testToVal = obj.findIndex(item => item.Val === Val)
   carus.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
   const nameCar = obj.filter((item) => { return item.name === name })
   const nameCarLength = obj.filter((item) => { return item.name === name }).length
   const modelCar = obj.filter((item) => { return item.model === model })
   const modelCarLength = obj.filter((item) => { return item.model === model }).length
   if (nameCar.length == 1 && testToVal !== -1) {
      const objKey = obj.findIndex(item => item.name === name)
      const newArr = Object.entries(obj[objKey])
      const newArrIndex = Object.keys(obj[objKey])
      const arrKey = newArrIndex.indexOf(Val)
      newArr[arrKey].splice(1, 1, newValue)
      let newObj = Object.fromEntries(newArr)
      objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength, newObj)
   } else if (nameCar.length > 1  && testToVal !== -1) {
      if (model === undefined) {
         const objKey = obj.findIndex(item => item.name === name)
         const objKeyLast = obj.findLastIndex(item => item.name === name)
         for (i = 0; i <= objKeyLast; i++) {
            const newArr = Object.entries(obj[i])
            const newArrIndex = Object.keys(obj[i])
            const arrKey = newArrIndex.indexOf(Val)
            newArr[arrKey].splice(1, 1, newValue)
            let newObj = Object.fromEntries(newArr)
            objKey === -1 ? console.log('no') : obj.splice(i, 1, newObj)
         }
      } else if (modelCar.length == 0) {
         console.log('no');
      } else {
         const objKey = obj.findIndex(item => item.name === name && item.model === model)
         const newArr = Object.entries(obj[objKey])
         const newArrIndex = Object.keys(obj[objKey])
         const arrKey = newArrIndex.indexOf(Val)
         newArr[arrKey].splice(1, 1, newValue)
         let newObj = Object.fromEntries(newArr)
         objKey === -1 ? console.log('no') : obj.splice(objKey, modelCarLength, newObj)
      }
   } else {
      console.log('no');
   }
}
// changeValue(carus,'price','NO OFFER','BMW')
// toLog(carus)


//! newMean(Назва массиву,новий ключ,імя машини, модель) || для пропуску властивості "",
function newMean(obj, newKey, name, model) {
   carus.sort((a, b) => (a.name === b.name ? 0 : a.name < b.name ? -1 : 1));
   const nameCar = obj.filter((item) => { return item.name === name })
   const nameCarLength = obj.filter((item) => { return item.name === name }).length
   const modelCar = obj.filter((item) => { return item.model === model })
   const modelCarLength = obj.filter((item) => { return item.model === model }).length
   if (nameCar.length == 1) {
      const objKey = obj.findIndex(item => item.name === name)
      const carArr = Object.entries(carus[objKey])
      const newMean = [newKey, null]
      carArr.push(newMean)
      const newObj = Object.fromEntries(carArr)
      objKey === -1 ? console.log('no') : obj.splice(objKey, nameCarLength, newObj)
   } else if (nameCar.length > 1) {
      if (model === undefined) {
         const objKey = obj.findIndex(item => item.name === name)
         const objKeyLast = obj.findLastIndex(item => item.name === name)
         for (i = 0; i <= objKeyLast; i++) {
            const carArr = Object.entries(carus[i])
            const newMean = [newKey, null]
            carArr.push(newMean)
            const newObj = Object.fromEntries(carArr)
            objKey === -1 ? console.log('no') : obj.splice(i, 1, newObj)
         }
      } else if (modelCar.length == 0) {
         console.log('no');
      } else {
         const objKey = obj.findIndex(item => item.name === name && item.model === model)
         const carArr = Object.entries(carus[objKey])
         const newMean = [newKey, null]
         carArr.push(newMean)
         const newObj = Object.fromEntries(carArr)
         objKey === -1 ? console.log('no') : obj.splice(objKey, modelCarLength, newObj)
      }
   } else {
      console.log('no');
   }
}
// newMean(carus, 'Dot', 'BMW', 'x6')


//! newMean(Назва массиву,імя машини, модель) || для пропуску властивості "",
function carStstus(obj, name, model) {
   searchCar(obj, name, model)
   //! Виконується звичайний пошук, бо тут нічого доповнити 
}
// carStstus(carus,'BMW','x5')