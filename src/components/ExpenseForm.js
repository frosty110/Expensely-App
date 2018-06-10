import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorMessage: ''
        };
    }
    
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=> ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState( ()=> ({createdAt}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            // error handling: provide description and amount
            this.setState(()=> ({errorMessage : 'Amount and description fields are required.'}));
        } else {
            this.setState(()=> ({errorMessage : ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render () {
        return (
            <div className="content-container">
                
                {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
                <form className="form" onSubmit={this.onSubmit}>
                    <span>Description</span>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <span>Amount</span>
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <span>Date</span>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <span>Note</span>
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        className="textarea"
                        value={this.state.note}
                        onChange = {this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;