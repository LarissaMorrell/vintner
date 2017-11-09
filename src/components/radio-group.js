import React from 'react';

class RadioGroup extends React.Component {

    radioGroup() {
        let {label, options, input} = this.props;

        return options.map((option, index) => {
            return (
            <div className="radio-avatar" key={index}>
                <label>
                    <input type="radio"
                           name={`${input.name}[${index}]`}
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
                    <img src="/media/avatars/boy1.png" alt="avatar" />
                </label>
            </div>)
        });
    }

    render() {
        return (
            <div>
                {this.radioGroup()}
            </div>
        )
    }
}


export default RadioGroup;
