import * as React from "react"
import * as Radium from 'radium'
import { Row, Column, Accordion, AccordionItem, AccordionTitle, AccordionContent} from 'react-foundation';
import Footer from "../components/Footer"
import { BasicEditor } from "../containers/BasicEditor"
import { Style } from 'radium'
import normalize from 'radium-normalize';


@Radium
export default class App extends React.Component<any, any> {
    render() {
        return (
            <div style={styles}>
              <Style rules={normalize} />
              <Row>
                  <Column>
                    <Accordion>
                      <AccordionItem>
                        <AccordionTitle> About </AccordionTitle>
                        <AccordionContent> <p>Some text</p> </AccordionContent>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionTitle> Graphs </AccordionTitle>
                        <AccordionContent> Some text </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Column>
                  <Column>
                    <h1>Hello world!</h1>
                  </Column>
                  <Column>
                    <BasicEditor />
                  </Column>
              </Row>
              <Row>
                <Footer />
              </Row>
            </div>
        );
    }
}

const styles = {
  margin_bottom: '60px'
}
