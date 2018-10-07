export const sendToPrinter = (labels) => {
    //post to Printer server
    console.log(labels)
    return Promise.resolve('LABELS PRINTED')
}