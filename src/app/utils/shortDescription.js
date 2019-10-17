export default (data) => {
    let resultText = [],
        temp = [];

    temp = data.split('\n')
    resultText = temp.slice(0, 4)
    return resultText.join('')
}


