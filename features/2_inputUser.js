import Readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export async function inputUser() {
  const rl = Readline.createInterface({input,output});
  try {
    const nama = await rl.question('Siapa nama Anda? ');
    const umur = await rl.question('Berapa umur Anda? ');

    console.log(`Halo ${nama}, umur Anda ${umur} tahun.`);
  } catch (err) {
    console.error('Terjadi kesalahan:', err);
  } finally {
    rl.close();
  }
}
