/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (text) => {
    if(!Array.isArray(text)) {
        return 'Invalid input: input must be an array'
    }
    const faceRegex= /^[:;][-~]?[)D]$/

    const filterFace = text.filter((face) => faceRegex.test(face))

    return filterFace.length
}
countSmilyFace([":)", ":(", ":>"]);

module.exports = {
    countSmilyFace
}