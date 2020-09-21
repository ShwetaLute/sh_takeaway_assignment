const xlsx = require('xlsx');

const ExcelReader = function () {

    readExcelFile = function (filePath, tab) {

        const workbook = xlsx.readFile(filePath);
        return worksheet = workbook.Sheets[tab];
    }

    this.getExcelDataInJsonFormat = function (filePath, tab) {

        const worksheet = readExcelFile(filePath, tab);
        return xlsx.utils.sheet_to_json(worksheet, { raw: true, defval: "" });
    }
}

module.exports = new ExcelReader();