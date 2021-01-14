import "./index.css";
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
  const onSelect = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <header className="header">
        <div className="navigation">
          <Select
            onChange={onSelect}
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuviu" },
            ]}
          />
        </div>
        <div className="header-name-container">
          <h1>AGNE ZAKAITE</h1>
          <div>PROGRAMMER</div>
        </div>
      </header>
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
                    <Link
                      key={index}
                      image
                      imgSrc={img}
                      imgAlt={alt}
                      link={link}
                    >
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
            {/* where to put key */}
            {translations.en.education.educationContent.map((list, index) => (
              <>
                <List
                  key={index}
                  liElements={list.map((children) => ({ children }))}
                />
                <Divider />
              </>
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
        <ContentBox title="Work experience" className="experience-content">
          <article>
            <JobContent
              jobPosition="Graphic Designer"
              company="Freelance"
              date="Since 2015"
            >
              <p>
                A freelance designer that designs for web and print. From logos
                to brochures, posters, banners, business cards and more. Skilled
                in:
              </p>
              <List
                liElements={[
                  { children: "Adobe PhotoShop" },
                  { children: "Adobe Illustrator" },
                  { children: "Adobe InDesign" },
                ]}
              />
            </JobContent>
            <JobContent
              jobPosition="Sales Assistant"
              company="Pretendentas JSC"
              date="2017 - 2019"
            >
              <p>
                In charge of goods stored in shop - selling coffee machines,
                coffee beans and accessories to B2C, B2B. Active sales on phone,
                offers by e-mail. Also, overseeing and monitoring day to day
                operations of the web store.
              </p>
              <List
                liElements={[
                  { children: "E-commerce platform: PrestaShop, OXID eShop" },
                  {
                    children:
                      "Generating and updating website content - product information, data, photography and editorial",
                  },
                ]}
              />
            </JobContent>
            <JobContent
              jobPosition="Betting Operator"
              company="BalticBet JSC"
              date="2017"
            >
              <p>
                Taking bets for betting games, pre-match and live matches.
                Knowledge in betting systems such as:
              </p>
              <List
                liElements={[{ children: "BETTY" }, { children: "Bet Games" }]}
              />
            </JobContent>
          </article>
        </ContentBox>
      </main>
      <Divider />
      <footer className="contact-content">
        {translations.en.footer.footerContent.map((item) => (
          <FooterItem title={item.title}>
            <List
              liElements={item.list.map(({ text, link, index }) => ({
                children: (
                  <Link key={index} link={link}>
                    {text}
                  </Link>
                ),
              }))}
            />
          </FooterItem>
        ))}
      </footer>
    </div>
  );
}

export default App;
