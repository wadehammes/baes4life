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
    children: [
      "<p key='1'>Our wedding weekend will be <b>April 20th - 22nd, 2024</b> in <b>Jupiter, FL</b>. Our wedding day is <b>Sunday, April 21st, 2024</b>. We will have a detailed schedule below for day-of timings.</b></p>",
    ],
  },
  {
    id: "detail-where",
    label: "Where is the wedding?",
    parentItem: "<span>Where?</span>",
    children: [
      "<p key='0'>We will be saying 'I do' in the gorgeous beach town of <b>Jupiter, FL</b>. We chose this location because of the many trips we took here while living in Florida a few months this past year and quickly falling in love with its beautiful dark sand beaches and turquoise waters.</p>",
      "<p key='1'>Our wedding day will be at the <b>Pelican Club</b>, a beautiful, lush, romantic venue on the water with breathtaking views of the Jupiter Lighthouse.</p>",
      "<p key='2'><img className='image-border' src='/pelican-club/3.jpg' height='600' width='1000' loading='lazy' alt='Pelican Club' style='width: 100%; height: auto'/></p>",
      "<p key='3'><a href='https://goo.gl/maps/zCPY8qHK2TfsGERQ9' target='_blank' rel='noreferrer'>View map for Pelican Club →</a></p>",
    ],
  },
  {
    id: "detail-attire",
    label: "What to wear to the wedding?",
    parentItem: "<span>Attire</span>",
    children: [
      "<p key='1'>The theme of our wedding is <b>Tropical Island Disco</b>, so think tropical island chic.</p>",
      "<p key='2'><b>Fellas:</b> a nice Hawaiian shirt, linen pants, and huarache sandals. Or, a cream/tan/white linen suit. Absolutely no business casual. Leave the khakis, dress shoes, and blue suits at home. Tropical colors and patterns are encouraged and highly recommended.</p>",
      "<p key='3'><b>Ladies:</b> think summer or cocktail dresses, not anything you would wear to a BBQ. If you choose to wear a beachy dress, consider a tea length or maxi to avoid being too casual. Leave the business casual vibes back at home, tropical colors and patterns are encouraged and highly recommended.</p>",
      "<p key='4'><b>For both:</b> no flip flops, shorts, or what you would wear to the beach. If you need guidance, contact us and we will style you. Styled By Wade™️</p>",
    ],
  },
  {
    id: "detail-accommodations",
    label: "What are the travel and accommodations for the wedding?",
    parentItem: "<span>Accommodations / travel</span>",
    children: [
      "<p key='1'>Closest airport: <b>West Palm Beach (PBI)</b></p>",
      "<p key='2'>Hotels/lodging: We will have a block of hotels available closer to the wedding, or feel free to get an AirBnB or VRBO if you want. Check back for our room block links and more lodging options as the wedding date gets closer.",
    ],
  },
  {
    id: "detail-schedule",
    label: "What is the schedule of events for the wedding?",
    parentItem: "<span>Schedule of events</span>",
    children: [
      "<p key='1'>Weekend and day-of wedding schedule will be finalized and added in the coming months leading up to the date! Stay tuned.</p>",
    ],
  },
];
