import { useEffect, useState } from 'react'
import { ArrowRight, BadgePercent, FileText, Menu, UsersRound, X } from 'lucide-react'
import { boardGroups } from './data/boardMembers'
import { contactMethods } from './data/contactMethods'

const membershipApplicationUrl =
  'https://www.flomembers.com/joukkueurheilijat-ry/members/application?_lang=fi'

const organizationDescription =
  'Joukkueurheilijat ry on vuonna 2021 perustettu joukkuelajien pelaajayhdistysten kattojärjestö, joka edustaa lentopallon, salibandyn, pesäpallon ja koripallon kahden ylimmän sarjatason pelaajia. Yhdistyksen tavoitteena on edistää pelaajien yhteisiä etuja ja vahvistaa heidän asemaansa suomalaisessa joukkueurheilussa.'

const sports = [
  'Lentopallo',
  'Salibandy',
  'Pesäpallo',
  'Koripallo',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [route, setRoute] = useState(() => window.location.hash)

  useEffect(() => {
    function updateRoute() {
      setRoute(window.location.hash)
      setMenuOpen(false)
    }

    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  useEffect(() => {
    const targetId = route.slice(1)
    if (!targetId) return

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView()
    })
  }, [route])

  return (
    <div className="site-shell min-h-screen">
      <header className="site-header">
        <a className="brand" href="#alku" aria-label="Joukkueurheilijat ry, etusivu">
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}official_logo.jpg`}
            alt="Joukkueurheilijat ry"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Päävalikko">
          <a href="#alku">Etusivu</a>
          <a href="#yhdistys">Yhdistys</a>
          <a href="#lajiyhdistykset">Lajiyhdistykset</a>
          <a href="#jasenedut">Jäsenedut</a>
          <a
            href={membershipApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Liity jäseneksi
          </a>
          <a href="#yhteystiedot">Yhteystiedot</a>
        </nav>
      </header>

      <main>
          <section className="hero content-width" id="alku">
            <p className="eyebrow">JOUKKUEURHEILIJAT RY</p>
            <h1>Urheilijoiden<br />yhteinen ääni</h1>
            <p className="lead">{organizationDescription}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={membershipApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Liity jäseneksi <ArrowRight size={16} />
              </a>
              <a className="button button-outline" href="#yhdistys">
                Tutustu yhdistykseen <ArrowRight size={16} />
              </a>
            </div>
          </section>

          <section className="organization-section" id="yhdistys">
            <div className="content-width">
              <p className="eyebrow">YHDISTYS</p>
              <h2>Yhdessä urheilijoiden asialla</h2>
              <p className="about-intro">{organizationDescription}</p>
              <div className="organization-grid">
                <article>
                  <h3>Tarkoitus</h3>
                  <p>
                    Yhdistyksen tavoitteena on edistää pelaajien yhteisiä etuja
                    ja vahvistaa heidän asemaansa suomalaisessa joukkueurheilussa.
                  </p>
                </article>
              </div>
              <div className="cooperation">
                <h3>Yhteistyö Suomen Urheilijoiden kanssa</h3>
                <p>
                  Joukkueurheilijat ry on yksi Suomen Urheilijat ry perustajajäsenistä ja tekee tiivistä yhteistyötä sen kanssa urheilijoiden aseman ja oikeuksien edistämiseksi.
                </p>
                <p>
                  Yhteistyön tavoitteena on vahvistaa urheilijoiden ääntä suomalaisen urheilun päätöksenteossa sekä edistää eri lajien urheilijoiden yhteisiä etuja.
                </p>
                <a
                  className="external-link"
                  href="https://suomenurheilijat.yhdistysavain.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tutustu Suomen Urheilijoiden toimintaan →
                </a>
              </div>
            </div>
          </section>

          <section className="sports-section content-width" id="lajiyhdistykset">
            <p className="eyebrow">NELJÄ LAJIYHDISTYSTÄ</p>
            <h2>Lajiyhdistykset</h2>
            <p className="section-lead">
              Lentopallo, salibandy, pesäpallo ja koripallo.
            </p>
            <ul className="sports-list">
              {sports.map((sport) => (
                <li className="sport-item" key={sport}>{sport}</li>
              ))}
            </ul>
          </section>

          <section className="benefits-section content-width" id="jasenedut">
            <p className="eyebrow">JÄSENYYS</p>
            <h2>Jäsenedut</h2>
            <p className="section-lead">
              Joukkueurheilijat ry jäsenenä saat käyttöösi etuja, asiantuntijatukea ja urheilijoiden yhteisön.
            </p>
            <div className="benefits-grid">
              <article className="benefit-card benefit-featured">
                <div className="benefit-heading">
                  <BadgePercent className="benefit-icon" size={24} aria-hidden="true" />
                  <span className="benefit-badge">Noin 60 % etu</span>
                </div>
                <h3>Ruutu+ Urheilu Premium</h3>
                <p>
                  Jäsenenä saat etukoodin, jolla voit tilata Ruutu+ Urheilu Premiumin 12 kuukaudeksi jäsenhintaan.
                </p>
                <div className="benefit-pricing">
                  <strong>119 € <span>/ 12 kk</span></strong>
                  <span className="benefit-normal-price">Normaalihinta <s>287,88 € / 12 kk</s></span>
                  <span className="benefit-savings">Säästät 168,88 €</span>
                </div>
              </article>
              <article className="benefit-card">
                <FileText className="benefit-icon" size={24} aria-hidden="true" />
                <h3>Lakikonsultaatio</h3>
                <p>Saat tukea pelaajasopimuksiin ja muihin sopimuskysymyksiin.</p>
              </article>
              <article className="benefit-card">
                <UsersRound className="benefit-icon" size={24} aria-hidden="true" />
                <h3>Urheilijaverkosto</h3>
                <p>
                  Pääset osaksi kattavaa urheilijaverkostoa, josta saat vertaistukea ja apua matalalla kynnyksellä.
                </p>
              </article>
            </div>
          </section>

          <section className="board-section" id="hallitus">
            <div className="content-width">
              <p className="eyebrow">JOUKKUEURHEILIJAT RY</p>
              <h2>Hallitus 2026</h2>
              <div className="board-groups">
                {boardGroups.map((group) => (
                  <section className="board-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="board-grid">
                      {group.members.map((member) => (
                        <article className="board-member" key={member.name}>
                          <h4>{member.name}</h4>
                          <p>{member.position} | {member.sport}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="membership-section" id="jaseneksi">
            <div className="membership-inner content-width">
              <div>
                <p className="eyebrow">JÄSENYYS</p>
                <h2>Liity jäseneksi</h2>
                <p>
                  Jäseneksi liittymisen käytännöt ja viralliset tiedot lisätään
                  tähän niiden vahvistuttua.
                </p>
              </div>
              <a
                className="button button-primary membership-apply"
                href={membershipApplicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Liity jäseneksi <ArrowRight size={16} />
              </a>
            </div>
          </section>
          <section className="contact-section" aria-labelledby="contact-title">
            <div className="content-width">
              <h2 id="contact-title">Onko kysyttävää?</h2>
              <p className="contact-description">
                Haluatko kysyä lisää toiminnastamme, jäsenyydestä tai pelaajien
                edunvalvonnasta? Ota meihin yhteyttä sähköpostitse tai lähetä
                yksityisviesti Instagramissa tai Facebookissa.
              </p>
              <div className="contact-options">
                {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
                  <a
                    className="contact-option"
                    href={href}
                    key={label}
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
      </main>

      <footer className="site-footer" id="yhteystiedot">
        <div className="footer-inner content-width">
          <a
            className="footer-brand"
            href="#alku"
            aria-label="Joukkueurheilijat ry, etusivu"
          >
            <img
              className="footer-logo"
              src={`${import.meta.env.BASE_URL}official_logo.jpg`}
              alt=""
            />
          </a>
          <div className="footer-contact">
            <h2>Yhteystiedot</h2>
            <div className="footer-contact-links">
              {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
                <a
                  href={href}
                  key={label}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon size={16} aria-hidden="true" />
                  <span><span className="contact-label">{label}</span>{value}</span>
                </a>
              ))}
            </div>
          </div>
          <span className="footer-note">Joukkueurheilijat ry<br />Urheilijoiden yhteinen ääni</span>
        </div>
      </footer>
    </div>
  )
}

export default App
