import { Fragment } from "react";
import "./index.css";

import Layout from "./components/Layout";
import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import Divider from "./components/Divider";
import Select from "./components/Select";
import List from "./components/List";
import Link from "./components/Link";
import JobContent from "./components/JobContent";
import FooterItem from "./components/FooterItem";

import translations from "./translations";

function App() {
  
  return (
    <Layout>
      <main className="content">
        <article>
          <ContentBox
            title={translations.en.links.title}
            className="links-content"
          >
            <List
              liElements={translations.en.links.linksContent.map(
                ({ text, img, alt, link, index }) => ({
                  children: (
                    <Link key={index} imgSrc={img} imgAlt={alt} link={link}>
                      {text}
                    </Link>
                  ),
                })
              )}
            />
          </ContentBox>
          <ContentBox
            title={translations.en.about.title}
            className="about-content"
          >
            <p>{translations.en.about.text}</p>
          </ContentBox>
        </article>
        <article>
          <ContentBox
            title={translations.en.education.title}
            className="education-content"
          >
            {translations.en.education.educationContent.map((list, index, array) => (
              <Fragment key={index}>
                <List liElements={list.map((children) => ({ children }))} />
                {index == array.length - 1 ? "" : <Divider />}
              </Fragment>
            ))}
          </ContentBox>
          <section className="skills-content">
            <ContentBox
              title={translations.en.personalSkills.title}
              className="personal-skills"
            >
              <List
                liElements={translations.en.personalSkills.skills.map(
                  ({ text, level, index }) => ({
                    children: (
                      <Pill key={index} color={level}>
                        {text}
                      </Pill>
                    ),
                  })
                )}
              />
            </ContentBox>
            <ContentBox
              title={translations.en.technicalSkills.title}
              className="technical-skills"
            >
              <List
                liElements={translations.en.technicalSkills.skills.map(
                  ({ text, level, index }) => ({
                    children: (
                      <Pill key={index} color={level}>
                        {text}
                      </Pill>
                    ),
                  })
                )}
              />
            </ContentBox>
          </section>
        </article>
        <ContentBox title={translations.en.work.title} className="experience-content">
          <article>
          {translations.en.work.workContent.map(({position, company, date, text, skills}, index) => (
              <JobContent key={index} jobPosition ={position} company={company} date={date}>
                <p>{text}</p>
                <List liElements={skills.map((children) => ({ children }))} />
              </JobContent>
            ))}
          </article>
        </ContentBox>
      </main>
      <Divider />
      <footer className="contact-content">
        {translations.en.footer.footerContent.map((item, index) => (
          <FooterItem key={index} title={item.title}>
            <List
              liElements={item.list.map(({ text, link, index }) => {
                const Component = link ? Link : "p";

                return {
                  children: (
                    <Component key={index} link={link}>
                      {text}
                    </Component>
                  ),
                };
              })}
            />
          </FooterItem>
        ))}
      </footer>
    </Layout>
  );
}

export default App;
