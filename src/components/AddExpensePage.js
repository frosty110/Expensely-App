import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit= (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1> Add Expense </h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};


// setup like this to simplify testing jest spies
const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps )(AddExpensePage);