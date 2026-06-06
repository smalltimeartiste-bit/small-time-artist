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
            <p>
              <strong>Hi, I&apos;m really glad you&apos;re here.</strong>
            </p>

            <p>
              Fair warning though, you might leave with something you did not
              plan to buy. That&apos;s kind of the whole point.
            </p>

            <p>
              Smalltime Artiste is a handcrafted gifting and art brand based in
              Bengaluru and it began very quietly. Somewhere between a full
              time career in social media, late night creative bursts, paint
              stains on tables, unfinished coffee, and the very dangerous
              thought of:
            </p>

            <p>
              <strong>&ldquo;What if gifting felt more personal again?&rdquo;</strong>
            </p>

            <p>
              Not polished.
              {" "}Not mass produced. Not picked out in panic five minutes
              before a birthday. Just personal. The kind of things that make
              someone stop mid unwrapping and say:{" "}
              <strong>&ldquo;Wait... this feels SO me.&rdquo;</strong>
            </p>

            <p>
              That feeling became the entire foundation of Smalltime Artiste.
            </p>

            <p>
              Everything here is handcrafted slowly and emotionally. Customized
              phone covers, Phoninserts, tote bags, pouches, journals, keepsake
              boxes, hand-painted wall art, Van Gogh inspired decor, desk
              accessories, and personalized gifts that somehow end up becoming
              memories. Because honestly, I have never really been interested in
              creating products people use once and forget. I wanted to create
              things people become emotionally attached to.
            </p>

            <p>
              The kind of objects that quietly become part of everyday life. A
              bookmark tucked inside a favorite book. A phone cover that changes
              with emotional eras. A desk corner that suddenly feels softer
              because of one tiny painted object. A gift someone keeps long
              after the occasion is over.
            </p>

            <p>
              The art itself is deeply inspired by <strong>nature</strong>,
              <strong> cinema</strong>, <strong>nostalgia</strong>,
              <strong> quiet moments</strong>, and emotions that are difficult to
              explain properly. I have always loved artists like
              <strong> Vincent van Gogh</strong> who painted feelings before
              realism. And I think somewhere along the way, that became part of
              this brand too.
            </p>

            <p>
              Nothing here is designed to look perfect. It is designed to feel
              something.
            </p>

            <p>
              Smalltime Artiste also exists in the middle of very normal life.
              Which means most pieces are created during
              <strong>
                {" "}
                stolen hours after work, chaotic weekends, random creative
                spirals, and occasional &ldquo;this idea cannot wait till tomorrow&rdquo;
                moments
              </strong>
              .
            </p>

            <p>
              And honestly?
              <br />
              <strong>I think that is why the brand still feels personal.</strong>
            </p>

            <p>
              Every once in a while, Smalltime Artiste appears at flea markets
              and home exhibitions in Bengaluru. Rare, slightly chaotic, paint
              covered, and always worth it. We also ship across India, because
              handcrafted and personal should not be limited by a pin code.
            </p>

            <p className={css.contentNote}>
              <em>
                Also, if your package ever arrives with suspicious amounts of
                love and dog hair energy, that is probably Kutu&apos;s contribution.
              </em>
            </p>

            <p>
              The unofficial co creator.
              <br />
              The emotional support employee.
              <br />
              And the &ldquo;we&rdquo; in Smalltime Artiste. 🐾
            </p>

            <p className={css.contentSignoff}>
              <strong>Gift thoughtful, do not think.</strong>
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
