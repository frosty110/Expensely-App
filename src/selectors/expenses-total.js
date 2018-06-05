import React from 'react';


export default (expenses) => (
    expenses.reduce( (accumulator, currValue) => accumulator + currValue.amount, 0)
);