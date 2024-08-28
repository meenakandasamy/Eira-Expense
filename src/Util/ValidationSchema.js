import { Schedule } from '@mui/icons-material';
import * as yup from 'yup';

/*--------------------------------------------- CustomerList  Schema -----------------*/
let validEmail = 'Please enter a valid Email Id';
const emailRequired = (propName) =>
  yup
    .string(true, validEmail)
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, validEmail)
    .required(`${propName} is required`);
    // const emailRequiredd = (propName) => 
    //   yup
    //     .string()
    //     .test('multiple-emails', 'Invalid email format. Please check each email after the comma.', function(value) {
    //       if (!value) return false;
    //       const emails = value.split(',').map(email => email.trim());
    //       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //       return emails.every(email => emailRegex.test(email));
    //     })
    //     .required(`${propName} is required`);
const stringRequired = (propName) =>
  yup.string().required(`${propName} is Required`);

const numberRequired = (propName) => {
  let count;
  if (propName === 'Mobile Number') {
    count = 10;
  } else if (propName === 'Telephone Number') {
    count = 7;
  } else if (propName === 'Postal Code') {
    count = 6;
  } else {
    return yup.string().required(`${propName} is Required`);
  }
  return yup
    .string()
    .required(`${propName} is Required`)
    .matches(new RegExp(`^\\d{${count}}$`), `Must be ${count} Digits`);
};


export const Claimadded = yup.object().shape({
    CreatedDate: stringRequired('Create Date'),
    claimno: stringRequired('claimno'),
 
});





