const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2
      break;
    case '-':
      result = num1 - num2
      break;
    case '*':
      result = num1 * num2
      break;
    case '/':
      result = num1 / num2
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

    const operator = rl.question('Mau menghitung apa? ')
    const num1 = rl.question('Masukkan nilai pertama: ')
    const num2 = rl.question('Masukkan nilai kedua: ')

    const calc = calculator(num1, num2, operator)
    console.log(`Hasil dari perhitungan ${num1} ${operator} ${num2} = ${calc}`);
  } catch (err) {
    console.log(err);
  }
}