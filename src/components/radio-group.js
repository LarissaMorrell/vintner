import React from 'react';

class RadioGroup extends React.Component {

    radioGroup() {
        let imgFileNames = this.props.imgFileNames;
        let {label, options, input} = this.props;

        return imgFileNames.map((file, index) => {
            return (
            <div className="radio-avatar pure-u-1-4" key={index}>
              <input type="checkbox"
                 name={file}
                 value={file}
                 checked={true}
                 onChange={(event) => {
                   console.log("hello");
                   return file;
                   }
                 }
              />

              <label htmlFor={file}>
                <span><span></span></span>
                <img src={`/media/avatars/${file}.png`} alt="avatar" />
              </label>
            </div>)
        });
    }

    render() {
        console.log(this.props.input);
        return (
            <div className="avatar-form pure-g">
                {this.radioGroup()}
            </div>
        )
    }
}
// checked={input.value.indexOf(option.name) !== -1}
// key={index}

export default RadioGroup;

// onChange={(event) => {
//     const newValue = [...input.value];
//     if (event.target.checked) {
//         newValue.push(option.name);
//     } else {
//         newValue.splice(newValue.indexOf(option.name), 1);
//     }
//
//     return input.onChange(newValue);
// }}
