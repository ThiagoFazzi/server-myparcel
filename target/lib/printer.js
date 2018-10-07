"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ipp = require("ipp");
const fs = require("mz/fs");
const common_1 = require("./common");
async function print(buffer, mime, name = 'Print job') {
    let printer = ipp.Printer(common_1.PRINTER_IPP);
    let file = {
        'operation-attributes-tag': {
            'job-name': name,
            'document-format': mime
        },
        data: buffer
    };
    return await new Promise((resolve) => {
        printer.execute("Print-Job", file, function (_, res) {
            resolve(res);
        });
    });
}
exports.printPDFFile = async (filename) => await print(await fs.readFile(filename), 'application/pdf', filename);
exports.printPDFBuffer = async (buffer) => await print(buffer, 'application/pdf');
//# sourceMappingURL=printer.js.map