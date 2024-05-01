const axios = require('axios');
const readline = require('readline-sync');

const secret = readline.question('secret token : ');
const TgId = readline.question('TgId : ');

function postData() {
  const data = {
    clicksAmount: 1
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Secret': secret,
      'Tg-Id': TgId,
      'Origin': 'https://sexyzbot.pxlvrs.io',
      'Referer': 'https://sexyzbot.pxlvrs.io/',
      'Sec-Fetch-Site': 'cross-site'
    }
  };

  axios.post('https://api-clicker.pixelverse.xyz/api/users', data, config)
    .then((response) => {
      console.log('Response:', response.data);
      if (response.data.energy > 1) {
        console.log('Energy lebih dari 1. Melakukan loop berikutnya...');
        postData();
      } else {
        console.log('Energy kurang dari atau sama dengan 1. Menunggu 1 menit sebelum melakukan loop berikutnya...');
        setTimeout(postData, 60000);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

postData();
