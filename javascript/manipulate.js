/**
 * 
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
    const result = []

    if(text.length <= 1) {
        return [text]
    }

    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i]
        const remainingChar = text.slice(0, i) + (text.slice(i + 1))
 
        const remainingPermuted = manipulate(remainingChar);
        for (let j = 0; j < remainingPermuted.length; j++) {
            const permutedArray = currentChar + (remainingPermuted[j])
            result.push(permutedArray)
        }
    }

    return Array.from(new Set(result))

}

manipulate('abc')

module.exports = {
    manipulate
}