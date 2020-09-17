export const isAnagram = (string1, string2) => {
    return cleanString(string1) === cleanString(string2);
};

const cleanString = str => {
    str.split('').sort().join('').trim().toLowerCase();
}