import CustomButton from "../../components/Buttons/Buttons";
import Flow from "../../assets/decorations/about_card_flow_bg.svg";
import Heading from "../../components/Heading/Heading";
import Her from "../../assets/content/images/her.jpg";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Tape from "../../assets/decorations/about_tape_bg.svg";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import css from "./AboutHer.module.css";
import illus from "../../assets/decorations/about_form_ill.svg";

function Form() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { fullName, phoneNumber, message } = Object.fromEntries(formData);

    const whatsappMessage = `Hi Monami,

I'd love to collaborate with you.

*Name:* ${fullName}
*Phone:* ${phoneNumber}

*Details:*
${message}

Would love to discuss further. Thanks!`;

    const phone = import.meta.env.VITE_WHATSAPP_PHONE;
    if (!phone) {
      alert("Unable to connect to WhatsApp. Please try again later.");
      return;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <div className={css.inpFieldCont}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          placeholder=""
          required
          minLength={2}
          maxLength={100}
        />
      </div>
      <div className={css.inpFieldCont}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder=""
          required
          inputMode="numeric"
          pattern="[0-9]*"
          minLength={10}
          maxLength={10}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value
              .replace(/\D/g, "")
              .slice(0, 10);
          }}
        />
      </div>
      <div className={css.inpFieldCont}>
        <label htmlFor="message">Message:</label>
        <textarea rows={10} name="message" placeholder="" required />
      </div>
      <CustomButton outward className={css.ctaBtn} primary>
        Submit
      </CustomButton>
    </form>
  );
}

function Card({ title, desc }) {
  return (
    <div className={css.cardMain}>
      <Heading className={css.heading} level={3}>
        {title}
      </Heading>
      <p>{desc}</p>
      <img className={css.tape} src={Tape} alt="" />
      <img className={css.flow} src={Flow} alt="" />
    </div>
  );
}

function CardSec({ data }) {
  return (
    <div className={css.cardContainer}>
      {data.map((d, i) => (
        <Card key={i} desc={d.desc} title={d.title} />
      ))}
    </div>
  );
}

function AboutHer() {
  const cards = [
    {
      title: "Unique & Exclusive",
      desc: "No two pieces are ever the same.",
    },
    {
      title: "Tailored To Your Vision",
      desc: "Custom creations for offices, cafes, and more.",
    },
    {
      title: "Sustainable & Handcrafted",
      desc: "Thoughtfully designed with care.",
    },
  ];

  return (
    <MainContainer>
      <Section className={css.herosec} label={"Welcome to her art universe"}>
        <WrapperContainer>
          <Heading level={1} className={css.heading}>
            Welcome To Her Art <span>Universe</span>
          </Heading>
          <div className={css.heroIngCont}>
            <img className={css.styledImg} src={Her} alt="She" />
            <Heading className={css.nameHeading} level={2}>
              MONAMI
              <br />
              CHAKRABORTHY
            </Heading>
          </div>
        </WrapperContainer>
        <WrapperContainer className={css.contentCont}>
          <div className={css.content}>
            <p><strong>Hi, I&apos;m glad you&apos;re here.</strong></p>

            <p>
              Fair warning: you might leave with something you didn&apos;t plan to
              buy. That&apos;s kind of the whole point.
            </p>

            <p>
              <strong>Smalltime Artiste</strong> is where art stops being
              something you frame and forget, and starts being something you
              <strong> carry, use, gift and actually live with</strong> every
              day. Every piece here is handcrafted and rooted in a simple
              belief: the best gifts are the ones that feel personal, not
              purchased.
            </p>

            <p>
              Looking for a <strong>unique gift for your best friend</strong>? A
              <strong>
                {" "}
                personalised gift for your boyfriend, girlfriend, husband or
                wife
              </strong>
              ? Something thoughtful for family, a colleague, or a
              <strong> corporate gifting</strong> moment that actually means
              something? Or honestly, just <strong>treating yourself</strong>
              because you deserve something beautiful and no occasion is needed?
              You are in exactly the right place.
            </p>

            <p>
              The collection includes <strong>hand-painted tote bags</strong>,
              <strong> custom phone covers</strong>, <strong>pouches</strong>,
              <strong> jewellery boxes</strong>, <strong>diaries</strong>,
              <strong> bookmarks</strong>, <strong>notepads</strong>,
              <strong> mini canvases</strong>, <strong>desk decor</strong> and
              <strong> kitchen decor</strong>. Everyday objects are made to hold
              a little more feeling than usual. Each one a personalised gift
              online that ships across India.
            </p>

            <p>
              The art itself is rooted in <strong>nature</strong>,
              <strong> quiet moments</strong> and <strong>everyday life</strong>.
              Inspired loosely by post-impressionism, think Van Gogh, who
              painted skies the way they felt, not the way they looked. Every
              piece here is <strong>emotional before it is decorative</strong>.
            </p>

            <p className={css.contentQuote}>
              <em>
                No two pieces are ever the same, because no feeling ever is.
              </em>
            </p>

            <p>
              This all happens alongside a full-time career in social media,
              which means Smalltime Artiste is built entirely out of
              <strong>
                {" "}
                stolen hours, weekend paint sessions and a lot of caffeine
              </strong>
              . Every piece is <strong>chosen, not churned</strong>.
            </p>

            <p>
              Every once in a while, Smalltime Artiste pops up at a
              <strong> flea market in Bengaluru</strong>. Rare, unplanned and
              worth it when it happens. Follow along the socials, so you never
              miss it.
            </p>

            <p>
              And soon? <strong>Home exhibitions.</strong> A more intimate way to
              experience the work up close, in a real space. Coming soon. Stay
              close.
            </p>

            <p className={css.contentNote}>
              <em>
                If you ever get an order packed with an unusual amount of love
                and dog hair energy, that is Kutu&apos;s doing. The &lsquo;we&rsquo; in our
                Smalltime Artiste.
              </em>
            </p>

            <p className={css.contentSignoff}>
              From heart to hand, <strong>Smalltime Artiste and Kutu</strong> 🐾
            </p>
          </div>
        </WrapperContainer>
      </Section>
      <Section label={"Her ways"}>
        <WrapperContainer>
          <CardSec data={cards} />
        </WrapperContainer>
      </Section>
      <Section className={css.formSec} label={"Collaborate with her"}>
        <WrapperContainer>
          <div className={css.formSecCont}>
            <div className={css.div1}>
              <Heading level={2} className={css.formHeading}>
                Let&apos;s collaborate to bring your space, event, or gifting
                needs to life
              </Heading>
              <img src={illus} alt="" />
            </div>
            <div className={css.div2}>
              <Form />
            </div>
          </div>
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default AboutHer;
