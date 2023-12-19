import Script from "next/script";
import { Section } from "src/components/Layout";

export const Registry = () => {
  return (
    <Section id="registry">
      <a
        className="zola-registry-embed"
        href="https://www.zola.com/wedding/jenandwade/rsvp"
        data-registry-key="jenandwade"
      >
        Our Zola Wedding Registry
      </a>
      <Script id="zola-registry">
        {
          '!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");'
        }
      </Script>
    </Section>
  );
};
