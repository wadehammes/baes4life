import {
  accommodationsMarkdown,
  attireMarkdown,
  scheduleMarkdown,
  whenMarkdown,
  whereMarkdown,
} from "src/components/Details/markdown";

interface Detail {
  id: string;
  label: string;
  parentItem: string;
  markdown: string;
}

export const details: Detail[] = [
  {
    id: "detail-when",
    label: "When is the wedding?",
    parentItem: "<span>When?</span>",
    markdown: whenMarkdown,
  },
  {
    id: "detail-where",
    label: "Where is the wedding?",
    parentItem: "<span>Where?</span>",
    markdown: whereMarkdown,
  },
  {
    id: "detail-attire",
    label: "What to wear to the wedding?",
    parentItem: "<span>Attire</span>",
    markdown: attireMarkdown,
  },
  {
    id: "detail-accommodations",
    label: "What are the travel and accommodations for the wedding?",
    parentItem: "<span>Accommodations / travel</span>",
    markdown: accommodationsMarkdown,
  },
  {
    id: "detail-schedule",
    label: "What is the schedule of events for the wedding?",
    parentItem: "<span>Schedule of events</span>",
    markdown: scheduleMarkdown,
  },
  // {
  //   id: "detail-registry",
  //   label: "The wedding registry?",
  //   parentItem: "<span>Registry</span>",
  //   children: [
  //     "<p key='1'>We will have our registry ready to go in a few months so check back!</p>",
  //   ],
  // },
];
