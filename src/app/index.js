import "./index.css";
import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import Divider from "./components/Divider";
import Select from "./components/Select";
import List from "./components/List";
import Link from "./components/Link";
import JobContent from "./components/JobContent";
import FooterItem from "./components/FooterItem";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="navigation">
          <Select
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
          <ContentBox title="Links" className="links-content">
            <List
              liElements={[
                {
                  children: (
                    <Link
                      image
                      imgSrc="https://cdn.onlinewebfonts.com/svg/img_24845.png"
                      imgAlt="linkedin-logo"
                      link="https://www.linkedin.com/in/agne-zakaite/"
                    >
                      LINKEDIN/agne-zakaite
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link
                      image
                      imgSrc="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
                      imgAlt="github-logo"
                      link="https://github.com/AgneZak"
                    >
                      GITHUB/AgneZak
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link
                      image
                      imgSrc="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png"
                      imgAlt="behance-logo"
                      link="https://www.behance.net/engaz1"
                    >
                      BEHANCE/engaz1
                    </Link>
                  ),
                },
              ]}
            />
          </ContentBox>
          <ContentBox title="about me" className="about-content">
            <p>
              Full-stack Web developer and experienced Graphic Designer. Skilled
              in JavaScript, PHP and Adobe design programs. Strong design
              professional with a Bachelor's degree focused in Graphic Design
              from Vilnius Academy of Arts. Experience in building
              object-oriented web applications in JavaScript, HTML5, and CSS,
              that perform well on all devices. Right now studying
              React.js and Vue.js
            </p>
          </ContentBox>
        </article>
        <article>
          <ContentBox title="education" className="education-content">
            <List
              liElements={[
                { children: "CODEACADEMY" },
                { children: "2020 - 2021" },
                { children: "Higher Education" },
                { children: "Full-Stack Web Development" },
              ]}
            />
            <Divider />
            <List
              liElements={[
                { children: "VILNIUS ACADEMY OF ARTS" },
                { children: "2013 - 2017" },
                { children: "Bachelor's degree" },
                { children: "Graphic Design" },
              ]}
            />
          </ContentBox>
          <section className="skills-content">
            <ContentBox title="Personal Skills" className="personal-skills">
              <List
                liElements={[
                  { children: <Pill color="green">teamwork</Pill> },
                  { children: <Pill color="green">communication</Pill> },
                  { children: <Pill color="yellow">organization</Pill> },
                ]}
              />
            </ContentBox>
            <ContentBox title="Technical Skills" className="technical-skills">
              <List
                liElements={[
                  { children: <Pill color="green">HTML5</Pill> },
                  { children: <Pill color="green">css/scss</Pill> },
                  { children: <Pill color="green">JavaScript</Pill> },
                  { children: <Pill color="green">PHP</Pill> },
                  { children: <Pill color="yellow">react.js</Pill> },
                ]}
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
        <FooterItem title="Address">
          <List liElements={[{ children: "Vilnius" }]} />
        </FooterItem>
        <FooterItem title="Contact">
          <List
            liElements={[
              { children: <a href="tel:+37061844137">+370 (6)18 44 137</a> },
              {
                children: (
                  <a href="mailto:azakaite@gmail.com">azakaite@gmail.com</a>
                ),
              },
            ]}
          />
        </FooterItem>
        <FooterItem title="Social">
          <List
            liElements={[
              {
                children: (
                  <Link link="https://www.linkedin.com/in/agne-zakaite/">
                    LinkedIn/agne-zakaite
                  </Link>
                ),
              },
              {
                children: (
                  <Link link="https://github.com/AgneZak">GitHub/AgneZak</Link>
                ),
              },
            ]}
          />
        </FooterItem>
      </footer>
    </div>
  );
}

export default App;
