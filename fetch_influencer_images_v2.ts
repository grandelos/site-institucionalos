import https from 'https';

const urls = [
  'https://ibb.co/N6jtTytP',
  'https://ibb.co/8LVTppLY',
  'https://ibb.co/JjLQxRF2',
  'https://ibb.co/LXNP1WHX',
  'https://ibb.co/gL750LF4',
  'https://ibb.co/7NjWkkWs'
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
