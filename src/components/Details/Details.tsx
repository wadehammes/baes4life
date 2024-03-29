import {
  accommodationsMarkdown,
  attireMarkdown,
  registryMarkdown,
  rsvpMarkdown,
  scheduleMarkdown,
  thingsToDoMarkdown,
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
    id: "detail-things-to-do",
    label: "What are some things to do in Jupiter, FL?",
    parentItem: "<span>Things to do</span>",
    markdown: thingsToDoMarkdown,
  },
  {
    id: "detail-schedule",
    label: "What is the schedule of events for the wedding?",
    parentItem: "<span>Schedule of events</span>",
    markdown: scheduleMarkdown,
  },
  {
    id: "detail-registry",
    label: "The wedding registry?",
    parentItem: "<span>Registry</span>",
    markdown: registryMarkdown,
  },
  {
    id: "detail-rsvp",
    label: "RSVP to the wedding",
    parentItem: "<span>RSVP</span>",
    markdown: rsvpMarkdown,
  },
];
