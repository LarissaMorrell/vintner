import React from 'react';

class RadioGroup extends React.Component {

    radioGroup() {
        let imgFileNames = this.props.imgFileNames;
        let {label, input} = this.props;
        console.log("in radioGroup");
        return imgFileNames.map((file, index) => {
            return (
            <div className="radio-avatar pure-u-1-4" key={index}>
              <input type="radio"
                onChange={event => {
                  console.log("hello");
                  return file;
                  }
                }
              />
              <label htmlFor={file}>
                <img src={`/media/avatars/${file}.png`} alt="avatar" />
              </label>
            </div>)
        });
    }
    //
    // name={file}
    // value={file}
    // checked={false}


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
