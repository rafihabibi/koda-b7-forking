const calculator = (num1, num2, operator) => {
  let result;

  let number1 = Number(num1)
  let number2 = Number(num2)
  switch (operator) {
    case '+':
      result = number1 + number2
      break;
    case '-':
      result = number1 - number2
      break;
    case '*':
      result = number1 * number2
      break;
    case '/':
      result = number1 / number2
      break;
    default:
      throw 'Invalid Operator!'
  }

  return result;
}

export const main = async (rl) => {
  try {
    console.log('------ Simple Calculator ------');
    console.log('+ Penjumlahan');
    console.log('- Pengurangan');
    console.log('* Perkalian');
    console.log('/ Pembagian');

    const operator = await rl.question('Mau menghitung apa? ')
    const num1 = await rl.question('Masukkan nilai pertama: ')
    const num2 = await rl.question('Masukkan nilai kedua: ')

    const calc = calculator(num1, num2, operator)
    console.log(`Hasil dari perhitungan ${num1} ${operator} ${num2} = ${calc}`);
    console.log('\n');
  } catch (err) {
    console.log(err);
  }
}