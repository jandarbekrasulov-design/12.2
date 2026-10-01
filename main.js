
///////////////// 1 //////////////// 




function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new Error(`Некорректный возраст: ${age}. Возраст должен быть от 0 до 120.`);
  }
  return age;
}

try {
  checkAge(150);
  console.log("Возраст корректный");
} catch (error) {
  console.log("Ошибка:", error.message);
}


///////////////// 2 //////////////////// 


function loadData(){
    const rand = Math.random() 

    if (rand < 0.4){
        throw new Error('Не удалось загрузить данные');
    }

}

let seccessCount = 0;
let errorCount = 0;

for (let i = 0; i<10 ; i+=1){
    try {
        loadData()
        seccessCount+=1;

    } catch(error){
        console.log(error.message)
        errorCount+=1;
    }

}

console.log(seccessCount)
console.log(errorCount)

/////////////////// 3 ///////////////////

function withdraw(balance, amount) {
    if (amount < 0) {
        const err = new Error("Сумма не может быть отрицательной");
        err.code = "NEGATIVE_AMOUNT";
        throw err;
    }

    if (amount > balance) {
        const err = new Error("Недостаточно средств на счёте");
        err.code = "NOT_ENOUGH_MONEY";
        throw err;
    }

    return balance - amount;
}

function tryWithdraw(balance, amount) {
    try {
        const newBalance = withdraw(balance, amount);
        console.log(`Снятие ${amount} прошло успешно. Остаток: ${newBalance}`);
    } catch (error) {
        if (error.code === "NEGATIVE_AMOUNT") {
            console.log("Ошибка (NEGATIVE_AMOUNT):", error.message);
        } else if (error.code === "NOT_ENOUGH_MONEY") {
            console.log("Ошибка (NOT_ENOUGH_MONEY):", error.message);
        } else {
            console.log("Неизвестная ошибка:", error.message);
        }
    }
}

tryWithdraw(1000, 300);   
tryWithdraw(1000, -50);   
tryWithdraw(1000, 5000);  
