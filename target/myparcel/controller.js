"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const printer_1 = require("../lib/printer");
const common_1 = require("../lib/common");
const AxiosAuth = async () => axios_1.default.create({
    baseURL: common_1.BASE_URL,
    headers: {
        Authorization: await axios_1.default.post(common_1.BASE_URL_AUTH, common_1.CREDENTIALS).then(resp => `${resp.data.token_type} ${resp.data.access_token}`),
        Accept: 'application/vnd.api+json',
        ContentType: 'application/vnd.api+json'
    }
});
exports.getShipments = (axios, date) => {
    return axios
        .get(`${common_1.BASE_URL}/shipments?filter[search]=2018-10-05&include=shipment_status`)
        .then(response => response.data)
        .catch(err => console.error(err));
};
exports.registerShipment = (axios, shipment) => {
    shipment.attributes.register_at = 0;
    const ship = {
        data: shipment
    };
    return axios
        .patch(`${common_1.BASE_URL}/shipments/${shipment.id}`, ship)
        .then(response => response.data)
        .catch(err => console.error(err));
};
exports.getFile = (axios, shipment) => {
    return axios
        .get(`${common_1.BASE_URL}/shipments/${shipment}/files`)
        .then(response => response.data)
        .catch(err => console.error(err));
};
exports.getContent = (axios, fileId) => {
    return axios.get(`${common_1.BASE_URL}/files/${fileId}`, {
        headers: {
            Accept: 'application/pdf',
            ContentType: 'application/pdf'
        }
    })
        .then(response => { printer_1.printPDFBuffer(Buffer.from(response.data, 'base64')); })
        .catch(err => console.log(err));
};
exports.printLabels = () => {
    return 'Labels printed';
};
//# sourceMappingURL=controller.js.map