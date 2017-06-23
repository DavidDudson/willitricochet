import * as React from "react";
import { Accordion, AccordionItem, AccordionTitle, AccordionContent} from 'react-foundation';

export class Sidebar extends React.Component<any, any> {
    render() {
        return (
          <div>
            <Accordion>
              <AccordionItem>
                <AccordionTitle> About </AccordionTitle>
                <AccordionContent> 
                  <p style={styles.text}>Some text</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionTitle> Graphs </AccordionTitle>
                <AccordionContent> Some text </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
    }
}

const styles = {
  text : {
    'text-align': 'center'
  }
}
