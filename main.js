// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

const invalidBatch = [];
const invalidCompanies = [];

// Function to determine if card number is VALID or INVALID
const validateCred = (arr) => {
      const cardNumber = arr;
      const backwards = [];
      const multiplyx2 = [];
      let total = 0;
  
console.log('Validating ' + cardNumber + '...');
  
      /* For-loop going through the number. 
                It begins at the second-to-last digit and adds every other digit going left to the "backwards" array */
      for (let i = (cardNumber.length - 2); i >= 0; i -= 2) {
        let addNum = cardNumber[i];              
        backwards.push(addNum);
      }

      /* For-loop multiplying each digit in the "backwards" array by 2. 
                If any product is greater than 10, 9 is subtracted.
                These values are stored in the "multiplyx2" array. */
      for (let i = 0; i < backwards.length; i++) {
        let doubleNum = backwards[i];
        doubleNum *= 2;

        if (doubleNum > 9) {
          doubleNum -= 9;
          multiplyx2.push(doubleNum);
        } else {
          multiplyx2.push(doubleNum);
        }
      } 

      /* The sum of the "multiplyx2" array are stored in the "total" variable. */
      for (let i = 0; i < multiplyx2.length; i++) {
        total += multiplyx2[i];
      }

      /* Adding up remaining card digits. Starting with the last adding every other digit going left.
                The sum is stored in the "total" variable. */
      for (let i = cardNumber.length - 1; i >= 0; i -= 2) {
        total += cardNumber[i];
      }

      /* Testing if the value of "total" can be divided by 10 without leaving a remainder. */
      if ((total % 10) === 0) {
        console.log('Card is valid');
        return true;
      } else {
        console.log('Card is not valid');
        return false;
      }
    };

// Function to creat an array of invalid card NUMBERS
const findInvalidCards = (arr) => {
    const cardBatch = arr;
    
  /* If number is invalid, it goes in the 'invalidBatch' array */
    for (let i = 0; i < cardBatch.length; i++) {     
        if (!validateCred(cardBatch[i])) {
            invalidBatch.push(cardBatch[i]);
        }
    }
  console.log('Invalid card numbers are:');
  console.log(invalidBatch);
}

// Function to determine invalid card COMPANIES
const idInvalidCardCompanies = (arr) => {
    
  /* Loop to identify company based on the first card number.  'if' statement prevents companies from being listed more than once */
  for (i = 0; i < invalidBatch.length; i++) {
      let currentCard = invalidBatch[i]
      
      switch (currentCard[0]) {
        case 3:
          if (invalidCompanies.includes('American Express')) {
            break;
          } else {
            invalidCompanies.push('American Express');
          }
          break;
        case 4:
          if (invalidCompanies.includes('Visa')) {
            break;
          } else {
            invalidCompanies.push('Visa');
          }
          break;
        case 5:
          if (invalidCompanies.includes('Mastercard')) {
            break;
          } else {
            invalidCompanies.push('Mastercard');
          }
          break;
        case 6:
          if (invalidCompanies.includes('Discover')) {
            break;
          } else {
            invalidCompanies.push('Discover');
          }
          break;
        default:
          console.log('Company not found');
      }
    }
  console.log('Invalid card companies are: ' + invalidCompanies.join(', '));
}

findInvalidCards(batch);
idInvalidCardCompanies(invalidBatch);