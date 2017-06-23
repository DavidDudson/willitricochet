import * as React from "react"
import * as Radium from 'radium'
import { Row, Column, Alignments, Accordion, AccordionItem, AccordionTitle, AccordionContent} from 'react-foundation';
import Footer from "../components/Footer"
import { BasicEditor } from "../containers/BasicEditor"
import { Sidebar } from "../containers/Sidebar"
import { Body } from "../containers/Body"
import { Style } from 'radium'
import normalize from 'radium-normalize';


@Radium
export default class App extends React.Component<any, any> {
    render() {
        return (
            <Row className="align-justify flex-dir-column">
                <Style rules={normalize} />
                <Row>
                    <Column small={12} medium={3}>
                      <Sidebar />
                    </Column>
                    <Column>
                      <Body />
                    </Column>
                    <Column small={12} medium={3}>
                      <BasicEditor />
                    </Column>
                </Row>
                <Row>
                  <Footer />
                </Row>
            </Row>
        );
    }
}
