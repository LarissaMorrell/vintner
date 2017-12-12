import React from 'react';

class CheckboxGroup extends React.Component {

    checkboxGroup() {
        let {label, options, input} = this.props;

        return options.map((option, index) => {
            return (
            <div className="checkbox pure-u-1-4" key={index}>

                <input type="checkbox"
                     name={option[index]}
                     value={option.name}
                     checked={input.value.indexOf(option.name) !== -1}
                     onChange={(event) => {
                         const newValue = [...input.value];
                         if (event.target.checked) {
                             newValue.push(option.name);
                         } else {
                             newValue.splice(newValue.indexOf(option.name), 1);
                     }
                     return input.onChange(newValue);
                 }}/>
                 <label htmlFor={option[index]}>
                     <span></span>
                     {option.name}
                </label>
            </div>)
        });
    }

    render() {
        return (
            <div className="checkbox-group pure-g">
                {this.checkboxGroup()}
            </div>
        )
    }
}


export default CheckboxGroup;
