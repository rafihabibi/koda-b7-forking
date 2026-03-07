export async function inputUser(rl) {
  try {
    const nama = await rl.question('Siapa nama Anda? ');
    const umur = await rl.question('Berapa umur Anda? ');

    console.log(`Halo ${nama}, umur Anda ${umur} tahun.`);
  } catch (err) {
    console.error('Terjadi kesalahan:', err);
  } 
  }