/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (arr) => {
    const count = {}
    arr.forEach(num => {
        count[num] = (count[num] ? count[num] : 0) + 1
    });
    const result = Object.keys(count).filter((item) => count[item] % 2 === 1)

    if (result.length === 0) {
        return 'There is no integer that appears an odd number of times'
    }

    if (result.length > 1) {
        return 'There should be only one integer that appears.'
    }

    return `should return ${result}, because it appears ${count[result]} time (which is odd).`
}

findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])

module.exports = {
    findOddNumber
}