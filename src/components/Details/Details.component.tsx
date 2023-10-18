/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Accordion } from "src/components/Accordion/Accordion.component";
import { details } from "src/components/Details/Details";
import { Section } from "src/components/Layout";
import { H2 } from "src/components/Typography";
import { styled } from "styled-components";
import parse from "html-react-parser";
import { device } from "src/styles/theme";
import ReactMarkdown from "react-markdown";

const DetailsContainer = styled(Section)`
  background-size: 2em 2em;
  background-color: var(--colors-forest);
  opacity: 1;
  color: var(--color-white);
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 4rem;

  @media ${device.tablet} {
    flex-flow: row nowrap;
  }
`;

const DetailsColumns = styled.div`
  flex: 1;
  text-align: left;
  width: 100%;

  &:last-child {
    flex: 4;
  }
`;

export const Details = () => (
  <DetailsContainer id="details">
    <DetailsColumns>
      <H2 style={{ padding: 0 }}>The juicy details</H2>
    </DetailsColumns>
    <DetailsColumns>
      {details.map((detail) => (
        <Accordion
          key={detail.id}
          $parentItem={parse(detail.parentItem)}
          $accordionId={detail.id}
          $accordionLabel={detail.label}
        >
          <ReactMarkdown
            children={detail.markdown}
            className={detail.id}
            components={{
              a(props) {
                const { node, href, ...rest } = props;

                return <a href={href?.replaceAll("&amp;", "&")} {...rest} />;
              },
            }}
          />
        </Accordion>
      ))}
    </DetailsColumns>
  </DetailsContainer>
);
