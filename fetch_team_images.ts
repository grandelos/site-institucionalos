import https from 'https';

const urls = [
  'https://ibb.co/xcR3b3n',
  'https://ibb.co/dYpf9GF',
  'https://ibb.co/JRMzX9MW',
  'https://ibb.co/JFRFF3wD'
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
