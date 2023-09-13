import { ReactNode } from "react";
import { Attire } from "src/components/Details/markdown/Attire";
import {When} from "src/components/Details/markdown/When";
import { Where } from "src/components/Details/markdown/Where";

interface Detail {
  id: string;
  label: string;
  parentItem: string;
  markdown: ReactNode;
}

export const details: Detail[] = [
  {
    id: "detail-when",
    label: "When is the wedding?",
    parentItem: "<span>When?</span>",
    markdown: <When />,
  },
  {
    id: "detail-where",
    label: "Where is the wedding?",
    parentItem: "<span>Where?</span>",
    markdown: <Where />,
  },
  {
    id: "detail-attire",
    label: "What to wear to the wedding?",
    parentItem: "<span>Attire</span>",
    markdown: <Attire />,
  },
  // {
  //   id: "detail-accommodations",
  //   label: "What are the travel and accommodations for the wedding?",
  //   parentItem: "<span>Accommodations / travel</span>",
  //   children: [
  //     "<p key='1'>Closest airport: <b>West Palm Beach (PBI)</b></p>",
  //     "<p key='2'><h3>Hotels/lodging</></h3>",
  //     "<p key='3'></p>"
  //   ],
  // },
  // {
  //   id: "detail-schedule",
  //   label: "What is the schedule of events for the wedding?",
  //   parentItem: "<span>Schedule of events</span>",
  //   children: [
  //     "<p key='1'>Weekend and day-of wedding schedule will be finalized and added in the coming months leading up to the date! Stay tuned.</p>",
  //   ],
  // },
  // {
  //   id: "detail-registry",
  //   label: "The wedding registry?",
  //   parentItem: "<span>Registry</span>",
  //   children: [
  //     "<p key='1'>We will have our registry ready to go in a few months so check back!</p>",
  //   ],
  // },
];
