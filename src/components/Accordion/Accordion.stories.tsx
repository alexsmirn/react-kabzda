import React from 'react';
import '../../App.css'

type AccordionPropsType = {
    accordionStatus: boolean
    changeAccordionStatus: () => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div className={'accordion'}>
            <span onClick={props.changeAccordionStatus}>Accordion</span>
            {props.accordionStatus && <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
                <li>List Item 4</li>
            </ul>}
        </div>
    );
};