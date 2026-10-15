import Image from "next/image";
import { site } from "@/content/site";
import heroImg from "@/assets/hero.jpg";
import studentsImg from "@/assets/students.jpg";
import abbyImg from "@/assets/abby.jpg";
import { ContactForm } from "./ContactForm";
import { Icon, Star } from "./Icon";
import { Logo } from "./Logo";

function GlobeLines() {
  return (
    <svg className="hero__globe" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#BCDDF4" strokeWidth="1.2">
        <circle cx="200" cy="200" r="190" />
        <ellipse cx="200" cy="200" rx="60" ry="190" />
        <ellipse cx="200" cy="200" rx="125" ry="190" />
        <line x1="200" y1="10" x2="200" y2="390" />
        <line x1="53" y1="80" x2="347" y2="80" />
        <line x1="20" y1="140" x2="380" y2="140" />
        <line x1="10" y1="200" x2="390" y2="200" />
        <line x1="20" y1="260" x2="380" y2="260" />
        <line x1="53" y1="320" x2="347" y2="320" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{site.motto}</p>
          <div className="hero__title">
            <h1>
              <span>Brighter minds.</span>
              <span>Brighter tomorrows.</span>
            </h1>
            <svg className="swoosh" viewBox="0 0 300 24" aria-hidden="true" focusable="false">
              <path d="M2 18C80 4 200 2 298 12" fill="none" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <p className="hero__intro">{site.intro}</p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#contact">
              Book a consultation
            </a>
            <a className="btn btn--outline" href="#pathways">
              Explore pathways
              <Icon name="arrow" size={18} strokeWidth={2} />
            </a>
          </div>
          <div className="hero__meta">
            <span>
              <Icon name="pin" size={18} />
              {site.contact.location}
            </span>
            <a href={site.contact.phoneHref}>
              <Icon name="phone" size={18} />
              {site.contact.phone}
            </a>
          </div>
        </div>
        <div className="hero__media">
          <GlobeLines />
          <div className="arch">
            <Image
              src={heroImg}
              alt="Four smiling students holding notebooks in front of a city skyline and lake"
              priority
              sizes="(max-width: 640px) 320px, 500px"
            />
          </div>
          <Star size={52} className="hero__star" />
          <div className="intake">
            <span className="intake__icon">
              <Icon name="calendar" size={22} />
            </span>
            <span className="intake__text">
              <span>Next intake</span>
              <strong>{site.nextIntake}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pathways() {
  return (
    <section id="pathways" className="section">
      <div className="wrap stack-56">
        <div className="section-head">
          <p className="eyebrow">Pathways</p>
          <h2 className="h2">Find the path that fits your goals.</h2>
          <p className="lead">
            Starting school, changing careers or settling into a new country? We match you with the program that gets
            you where you want to go.
          </p>
        </div>
        <div className="cards">
          {site.pathways.map((p) => (
            <article key={p.title} className="card">
              <span className="card__icon">
                <Icon name={p.icon} size={26} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <p className="card__detail">{p.detail}</p>
              <a className="card__link" href="#contact">
                Learn more <Icon name="arrow" size={16} strokeWidth={2} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="section section--navy">
      <div className="wrap stack-56">
        <div className="how__head">
          <div className="section-head">
            <p className="eyebrow eyebrow--gold">How it works</p>
            <h2 className="h2">Your next step, made simple.</h2>
          </div>
          <a className="btn btn--gold" href="#contact">
            Book a consultation
          </a>
        </div>
        <ol className="steps">
          {site.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyAspire() {
  return (
    <section id="why" className="section section--sky">
      <div className="wrap split">
        <div className="why__media">
          <div className="why__frame">
            <Image
              src={studentsImg}
              alt="Students smiling and looking ahead, holding notebooks"
              sizes="(max-width: 960px) 100vw, 580px"
            />
          </div>
          <Star size={40} className="why__star" />
        </div>
        <div className="stack-32">
          <div className="section-head">
            <p className="eyebrow">Why Aspire</p>
            <h2 className="h2">Learn. Evolve. Succeed.</h2>
          </div>
          <ol className="pillars">
            {site.pillars.map((p, i) => (
              <li key={p.title} className="pillar">
                <span className="pillar__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  const f = site.founder;
  return (
    <section id="founder" className="section">
      <div className="wrap split split--founder">
        <div className="founder__media">
          <div className="founder__photo">
            <Image src={abbyImg} alt={`Portrait of ${f.name}, founder`} sizes="(max-width: 640px) 280px, 420px" />
          </div>
          <Star size={44} className="founder__star" />
        </div>
        <div className="stack-22">
          <p className="eyebrow">Meet the founder</p>
          <h2 className="h2">{f.heading}</h2>
          {f.paragraphs.map((t) => (
            <p key={t} className="lead">
              {t}
            </p>
          ))}
          <figure className="quote">
            <svg width="34" height="26" viewBox="0 0 34 26" aria-hidden="true" focusable="false">
              <path
                d="M0 26V15C0 6.5 4.6 1.5 12.8 0l1.4 3.6C9.4 5 7.2 8 7 12h6.6v14H0zm19.8 0V15c0-8.5 4.6-13.5 12.8-15L34 3.6C29.2 5 27 8 26.8 12h6.6v14H19.8z"
                fill="var(--gold)"
              />
            </svg>
            <blockquote>{f.quote}</blockquote>
            <figcaption>
              <strong>{f.name}</strong>
              <span>{f.role}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const c = site.contact;
  return (
    <section id="contact" className="section section--sky">
      <div className="wrap">
        <div className="contact">
          <div className="contact__copy">
            <p className="eyebrow eyebrow--gold">Get in touch</p>
            <h2 className="h2">Ready to take your next step?</h2>
            <p className="lead">Book a consultation and we will help you find the right pathway.</p>
            <ul className="contact__list">
              <li>
                <a href={`mailto:${c.email}`}>
                  <span className="contact__icon">
                    <Icon name="mail" size={20} />
                  </span>
                  {c.email}
                </a>
              </li>
              <li>
                <a href={c.phoneHref}>
                  <span className="contact__icon">
                    <Icon name="phone" size={20} />
                  </span>
                  {c.phone}
                </a>
              </li>
              <li>
                <span className="contact__icon">
                  <Icon name="pin" size={20} />
                </span>
                {c.location}
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const c = site.contact;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo tone="white" />
            <p>{site.tagline}</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__label">Pathways</p>
              {site.pathways.map((p) => (
                <a key={p.title} href="#pathways">
                  {p.title}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <p className="footer__label">Aspire</p>
              {site.nav.slice(1).map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <p className="footer__label">Contact</p>
              <a href={`mailto:${c.email}`}>{c.email}</a>
              <a href={c.phoneHref}>{c.phone}</a>
              <span>{c.location}</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>
            Powered by <strong>{site.poweredBy}</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
