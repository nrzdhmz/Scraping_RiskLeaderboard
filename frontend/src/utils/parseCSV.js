export default function parseCSV(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',').map(header => header.trim());

  return lines.slice(1).map(line => {
    const values = line.match(/(?:"[^"]*"|[^,]+)/g) || [];
    const obj = {};
    headers.forEach((header, i) => {
      let value = values[i] ? values[i].replace(/^"|"$/g, '').trim() : '';
      if (header === 'Stat') {
        obj[header] = Number(value.replace(/,/g, ''));
      } else {
        obj[header] = value;
      }
    });
    return obj;
  });
}
