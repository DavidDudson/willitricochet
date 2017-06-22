import * as React from "react";
import * as Radium from 'radium'

@Radium
export default class Footer extends React.Component<any, any> {
    render() {
        return (
          <div >
            <p>this is a footer</p>
          </div>
        );
    }
}

const styles = {
  position: "fixed",
  height: "60px",
}
