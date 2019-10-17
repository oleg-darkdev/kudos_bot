export default (data) => {
    let resultText = []
    for (let i = 0; i < data.length; i++) {
        resultText.push(`✔ ${data[i]}`)
    }

    return resultText.join('\n')
}
