import https from 'https';

const url = 'https://ibb.co/6cmRFDcK';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('No match found');
    }
  });
}).on('error', (err) => {
  console.error(`Error fetching ${url}: ${err.message}`);
});
