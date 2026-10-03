// task 1
// function getStringLength(value) {
//     if (value == null){
//         return 0
//     }
//     else{
//         return value.split('').length
//     }
// }

// console.log(getStringLength())


// task 2
// function isString(value) {
//     if (typeof(value) == 'string' || value instanceof String){
//         return 'True'
//     }
//     else{
//         return 'False'
//     }
// }

// console.log(isString(new String('test')))


// task 3
// function concatenateStrings(value1, value2) {
//     return value1 + value2
// }

// console.log(concatenateStrings('aa', 'bb'))


// task 4
// function getFirstChar(value) {
//     return value.charAt(0)
// }

// console.log(getFirstChar(''))


// task 5
// function removeLeadingAndTrailingWhitespaces(value) {
//     return value.replaceAll(/\s/gi, '')
// }

// console.log(removeLeadingAndTrailingWhitespaces('\t\t\tHello, World!            cat          Abracadabra '))


// task 6
// function removeLeadingWhitespaces(value) {
//         value = value.replace(/^\s+/, '')
//         return value
//         }

// console.log(removeLeadingWhitespaces('  Abracadabra'))
// console.log(removeLeadingWhitespaces('cat '))
// console.log(removeLeadingWhitespaces('\t\t\tHello, World! '))


// task 7
// function removeTrailingWhitespaces(value) {
//     return value.trimEnd()
// }

// console.log(removeTrailingWhitespaces('  Abracadabra'))
// console.log(removeTrailingWhitespaces('cat '))
// console.log(removeTrailingWhitespaces('\t\t\tHello, World! '))


// task 8
// function repeatString(str, times) {
//     let new_str = ''
//     if (str == null || times < 0){
//         return ''
//     }
//     else{
//         for (let i = 0; i < times; i++) {
//             new_str += str
//         }
//     }
//     return new_str
// }

// console.log(repeatString('A', 5))
// console.log(repeatString('cat', 3))
// console.log(repeatString('', 3))
// console.log(repeatString('abc', -2))


// task 9
// function removeFirstOccurrences(str, value) {
//     return str.replace(value, '')
// }

// console.log(removeFirstOccurrences('To be or not to be', 'be'))
// console.log(removeFirstOccurrences('I like legends', 'end'))
// console.log(removeFirstOccurrences('ABABAB', 'BA'))


// task 10
// function removeLastOccurrences(str, value) {
//     let index = str.lastIndexOf(value)
//     if (index == -1){
//         return str
//     }
//     return str.slice(0, index) + str.slice(index + value.length)

//     }
// console.log(removeLastOccurrences('To be or not to be', 'be'))
// console.log(removeLastOccurrences('I like legends', 'end'))
// console.log(removeLastOccurrences('ABABAB', 'BA'))


// task 11
// function sumOfCodes(str) {
//     if (str == null){
//         return 0
//     }
//     else {
//     let new_str = str.split('')
//     let new_list = []
//     for (let i = 0; i < new_str.length; i++) {
//         new_list.push(new_str[i].charCodeAt(0))
//     }
//     let new_red = new_list.reduce((curr1, curr2) => {
//         return curr1 + curr2
//     }, 0)

//     return new_red
//     }
// }

// console.log(sumOfCodes('My String'))
// console.log(sumOfCodes('12345'))
// console.log(sumOfCodes(''))
// console.log(sumOfCodes())


// task 12
// function startsWith(str, substr) {
//     if(str.split(' ')[0] == substr){
//         return 'True'
//     }
//     else{
//         return 'False'
//     }
// }

// console.log(startsWith('Hello World', 'World'))
// console.log(startsWith('Hello World', 'Hello'))


// task 13
// function endsWith(str, substr) {
//         if(str.split(' ')[str.split(' ').length - 1] == substr){
//         return 'True'
//     }
//     else{
//         return 'False'
//     }
// }

// console.log(endsWith('Hello World', 'World'))
// console.log(endsWith('Hello World', 'Hello'))


// task 14
// function formatTime(number1, number2) {
//     if (number1 >= 10 && number2 >= 10){
//         return number1 + ':' + number2
//     }
//     else if(number1 >= 10 && number2 <= 10){
//         return number1 + ':0' + number2 
//     }
//     else if(number1 <= 10 && number2 >= 10){
//         return '0' + number1 + ':' + number2
//     }
//     else if(number1 <= 10 && number2 <= 10){
//         return '0' + number1 + ':0' + number2
//     }
// }

// console.log(formatTime(5, 30))
// console.log(formatTime(1, 15))
// console.log(formatTime(0, 45))
// console.log(formatTime(0, 0))


// task 15
// function reverseString(str) {
//     return String(str).split('').reverse().join('')
// }

// console.log(reverseString('abcdef'))
// console.log(reverseString(12345))


// task 16
// function orderAlphabetically(str) {
//     return String(str).split('').sort().join('')
// }

// console.log(orderAlphabetically('webmaster'))
// console.log(orderAlphabetically('textbook'))
// console.log(orderAlphabetically('abc123xyz'))


// task 17
// function containsSubstring(str, substr) {
//     return str.includes(substr)
// }

// console.log(containsSubstring('Hello, World!', 'World'))
// console.log(containsSubstring('JavaScript is Fun', 'Python'))
// console.log(containsSubstring('12345', '34'))


// task 18
// function countVowels(str) {
//     return str.match(/[aeiouyAEIOUY]/gi).length
// }

// console.log(countVowels('apple'))
// console.log(countVowels('banana'))
// console.log(countVowels('cherry'))
// console.log(countVowels('aEiOu'))
// console.log(countVowels('XYZ'))


// task 19
// function isPalindrome(str) {
//     return str.replace(/\s/gi, '').toLowerCase().split('').reverse().join('') == str.replace(/\s/gi, '').toLowerCase()
// }

// console.log(isPalindrome('madam'))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('apple'))
// console.log(isPalindrome('No lemon, no melon'))


// task 20
// function findLongestWord(sentence) {
//     let new_sen = sentence.split(' ')
//     new_sen.sort((curr1, curr2) => curr2.length - curr1.length)
//     return new_sen[0]
// }

// console.log(findLongestWord('The quick brown fox'))
// console.log(findLongestWord('A long and winding road'))
// console.log(findLongestWord('No words here'))


// task 21
// function reverseWords(str) {
//     let str_sp = str.split(' ')
//     let new_str = ''
//     for (let i = 0; i < str_sp.length; i++) {
//         new_str += str_sp[i].split('').reverse().join('') + ' '
//     }
//     return new_str
// }

// console.log(reverseWords('Hello World'))
// console.log(reverseWords('The Quick Brown Fox'))


// task 22
// function invertCase(str) {
//     let new_str = String(str).split('')
//     let new_str_2 = ''
//     for (let i = 0; i < new_str.length; i++) {
//         if (new_str[i] == new_str[i].toLowerCase()){
//             new_str_2 += new_str[i].toUpperCase()
//         }
//         else {
//             new_str_2 += new_str[i].toLowerCase()
//         }
//     }
//     return new_str_2
// }

// console.log(invertCase('Hello, World!'))
// console.log(invertCase('JavaScript is Fun'))
// console.log(invertCase(12345))


// task 23
// function getStringFromTemplate(firstName, secondName) {
//     return `Hello, ${firstName} ${secondName}`
// }

// console.log(getStringFromTemplate('John', 'Doe'))
// console.log(getStringFromTemplate('Chuck', 'Norris'))


// task 24
// function extractNameFromTemplate(value) {
//     return value.slice(7, -1)
// }

// console.log(extractNameFromTemplate('Hello, John Doe!'))
// console.log(extractNameFromTemplate('Hello, Chuck Norris!'))


// task 25
// function unbracketTag(str) {
//     return str.slice(1, -1)
// }

// console.log(unbracketTag('<div>'))
// console.log(unbracketTag('<span>'))
// console.log(unbracketTag('<a>'))

// task 26
// function extractEmails(str) {
//     return str.split(';')
// }

// console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))
// console.log(extractEmails('info@gmail.com'))


// task 27
// function encodeToRot13(str) {
//     let new_list = []
//     for (let i = 0; i < str.length; i++) {
//         num = str.charCodeAt(i)
//         if (num >= 65 && num < 90){
//             if (num <= 77){
//                 new_list.push(num + 13)
//             }
//             else{
//                 new_list.push(num - 13)
//             }
//         }
//         else if (num >= 97 && num <= 122){
//             if (num <= 109){
//                 new_list.push(num + 13)
//             }
//             else{
//                 new_list.push(num - 13)
//             }
//         }
//         else {
//             new_list.push(num)
//         }
//     }
//     let last_str = new_list.map(curr => String.fromCharCode(curr)).join('')
//     return last_str
// }

// console.log(encodeToRot13('hello'))
// console.log(encodeToRot13('Why did the chicken cross the road?'))
// console.log(encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'))



// task 28
// function getCardId(value) {
//     let new_list = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
//                     'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
//                     'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
//                     'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
//                     ]
//     return(new_list.indexOf(value))
// }

// console.log(getCardId('A♣'))
// console.log(getCardId('2♣'))
// console.log(getCardId('3♣'))
// console.log(getCardId('Q♠'))
// console.log(getCardId('K♠'))