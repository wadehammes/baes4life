interface Detail {
  id: string;
  label: string;
  parentItem: string;
  children: string[];
}

export const details: Detail[] = [
  {
    id: "detail-when",
    label: "When is the wedding?",
    parentItem: "<span>When?</span>",
    children: ["<p>When is the wedding?</p>"],
  },
  {
    id: "detail-where",
    label: "Where is the wedding?",
    parentItem: "<span>Where?</span>",
    children: ["<p>Where is the wedding?</p>"],
  },
  {
    id: "detail-attire",
    label: "What to wear to the wedding?",
    parentItem: "<span>Attire</span>",
    children: ["<p>This is what people should wear</p>"],
  },
  {
    id: "detail-accommodations",
    label: "What are the travel and accommodations for the wedding?",
    parentItem: "<span>Accommodations / travel</span>",
    children: ["<p>This is how we travel</p>"],
  },
  {
    id: "detail-schedule",
    label: "What is the schedule of events for the wedding?",
    parentItem: "<span>Schedule of events</span>",
    children: ["<p>This is how we travel</p>"],
  },
];
