import * as React from "react";
import { Footer } from "../components/Footer"

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <Footer />
            </div>
        );
    }
}
