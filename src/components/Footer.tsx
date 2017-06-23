import * as React from "react";
import * as Radium from 'radium'

@Radium
export default class Footer extends React.Component<any, any> {
    render() {
        return (
          <div style={styles}>
            <p>this is a footer</p>
          </div>
        );
    }
}

const styles = {
   'text-align': 'center',
   'color': 'white',
   'background-color': 'black',
   'width': '100%'
}
