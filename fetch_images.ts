import https from 'https';

const urls = [
  'https://ibb.co/xKYyjJxn',
  'https://ibb.co/DPryTTRq',
  'https://ibb.co/3mMbsBCk',
  'https://ibb.co/5XCWxKn3'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) {
        console.log(`${url} -> ${match[1]}`);
      } else {
        console.log(`${url} -> No match found`);
      }
    });
  }).on('error', (err) => {
    console.error(`Error fetching ${url}: ${err.message}`);
  });
});
