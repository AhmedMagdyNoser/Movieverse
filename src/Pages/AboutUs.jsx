import React from "react";

import Contact from "../Imgs/contact.svg";
function AboutUs() {
  return (
    <>
      <div className="container">
        <h2 className="my-5">من نكون؟</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={require("../Imgs/camera.jpg")} alt="Movieverse" className="img-fluid rounded my-3" />
          </div>
          <div className="col-lg-6">
            <p className="text-secondary fw-bold">
              مرحبًا بك في <span className="text-primary">Movieverse</span>
            </p>
            <p className="text-muted">
              نوفر لك معلومات شاملة حول الأفلام من مختلف أنحاء العالم. يتمتع فريقنا بخبرة واسعة في مجال السينما، ونحن نعمل باستمرار على تحسين
              خدماتنا لتلبية احتياجات جمهورنا الكريم.
            </p>
            <p className="text-muted">
              نسعى جاهدين لتوفير معلومات دقيقة وشاملة حول الأفلام، بما في ذلك تفاصيل القصة والممثلين والمخرجين والتقييمات والتعليقات من قبل
              المستخدمين الآخرين. إن الأفلام هي فن يجب أن يتمتع به الجميع، وهذه المعلومات تساعد الجمهور على اختيار الأفلام الأكثر تناسبًا مع
              ذوقهم واهتماماتهم.
            </p>
            <p className="text-secondary fw-bold">نؤمن بأهمية الأفلام في توثيق الثقافات والمجتمعات حول العالم.</p>
            <p className="text-muted">
              لذا فإن هدفنا هو توفير المعلومات حول الأفلام لمختلف الثقافات والمناطق الجغرافية. سواء كنت تبحث عن فيلم درامي تاريخي أو فيلم كوميدي
              خفيف للاستمتاع في أوقات الفراغ، فنحن نوفر لك معلومات شاملة حول الأفلام المختلفة.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 my-5" style={{ backgroundColor: "#eee" }}>
        <p className="text-muted container my-0">
          نضمن لك أن تجد معلومات دقيقة حول الأفلام من جميع الأنواع والفئات العمرية، ونسعى جاهدين لتحسين وتوسيع قاعدة بياناتنا المتنامية باستمرار.
          إذا كان لديك أي اقتراحات أو ملاحظات حول كيفية تحسين خدماتنا، فلا تتردد في الاتصال بنا.
        </p>
      </div>
      <ContactUsSection />
    </>
  );
}

export default AboutUs;

export function ContactUsSection() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">اتصل بنا</h2>
      <div className="row">
        <div className="col-md-6 px-5">
          <img src={Contact} alt="Contact Us" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center p-5 border-end">
          <p className="mb-5">
            هل لديك أي أسئلة أو تعليقات لنا؟ نحن نود الاستماع لك! يمكنك التواصل معنا عبر{" "}
            <a href="mailto: Ahmed_Magdy_1138@fci.helwan.edu.eg" className="text-decoration-none text-primary">
              البريد الإلكتروني
            </a>
            . سنكون سعداء جدًا بالرد عليك وتلقي ملاحظاتك، نسعى دائمًا لتقديم أفضل خدمة ممكنة.
          </p>
          <div className="d-flex flex- align-items-stat gap-3 mt-4">
            <SocialLink link="mailto: Ahmed_Magdy_1138@fci.helwan.edu.eg" iconClass="fa-solid fa-envelope" />
            <SocialLink link="https://github.com/AhmedMagdyNoser" iconClass="fab fa-github" />
            <SocialLink link="https://linkedin.com/in/AhmedMagdyNoser" iconClass="fab fa-linkedin" />
            <SocialLink link="https://facebook.com/AhmedMagdyNoser" iconClass="fab fa-facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ link, iconClass }) {
  return (
    <a href={link} className="btn btn-outline-secondary border-0" target="_blank" rel="noreferrer">
      <i className={iconClass}></i>
    </a>
  );
}
