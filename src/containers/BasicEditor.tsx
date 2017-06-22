import * as React from "react";
import { Accordion, AccordionItem, AccordionTitle, AccordionContent} from 'react-foundation';

export class BasicEditor extends React.Component<any, any> {
    render() {
        return (
          <Accordion>
            <AccordionItem>
              <AccordionTitle> Environment </AccordionTitle>
              <AccordionContent> Some text </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle> Target </AccordionTitle>
              <AccordionContent> Some text </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle> Rebound </AccordionTitle>
              <AccordionContent> Some text </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
    }
}
