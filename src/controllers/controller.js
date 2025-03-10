const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');

const getSHA256 = async (req, res) => {
  const payload = req.body;
  console.log('pay:', payload);
  const secretKey = "T3mpP@w0rd";

  const filteredEntries = Object.entries(payload).filter(([key, value]) => {
    return value !== null && value !== undefined && value !== '';
  });

  // 2. Sort entries alphabetically by key
  filteredEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

  // 3. Concatenate sorted key-value pairs into one string (no separators)
  let message = '';
  for (const [key, value] of filteredEntries) {
    message += `${key}${value}`;
  }

  // 4. Create HMAC-SHA256 hash of the message using the secret key
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(message, 'utf8');  // ensure UTF-8 encoding
  const signatureHex = hmac.digest('hex');  // 5. hex-encoded output

  console.log('sign:', signatureHex);

  return res.status(StatusCodes.OK).json(signatureHex);
};

module.exports = {
  getSHA256,
};
