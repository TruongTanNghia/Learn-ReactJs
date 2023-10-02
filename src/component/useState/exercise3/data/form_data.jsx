import { v4 as uuidv4 } from 'uuid';

export const inputs = [
    {
        id: uuidv4(),
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: 'Username',
        pattern: '^[A-Za-z0-9]{3,16}$',
        required: true,
      },
      {
        id: uuidv4(),
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        errorMessage: 'It should be a valid email address!',
        label: 'Email',
        required: true,
      },
      {
        id: uuidv4(),
        name: 'birthday',
        type: 'date',
        placeholder: 'Birthday',
        label: 'Birthday',
      },
      {
        id: uuidv4(),
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage:
          'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
        label: 'Password',
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: uuidv4(),
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm Password',
        errorMessage: "Passwords don't match!",
        label: 'Confirm Password',
        // pattern: values.password,
        required: true,
      },
    
];