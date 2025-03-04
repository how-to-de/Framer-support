const cryptoJS = require('crypto-js');
const { StatusCodes } = require('http-status-codes');

const getSHA256 = async (req, res) => {
    if (!req.body.data) {
        return res.status(400).json({ message: "Data is required" });
    }

    const data = req.body.data;
    const hash = cryptoJS.SHA256(data).toString(cryptoJS.enc.Hex);

    return res.status(StatusCodes.OK).json({ hash });
};

module.exports = {
    getSHA256,
};