
import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

type LegalPageProps = {
  title: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
  lastUpdated: string;
};

const CONTACT_EMAIL = "support@erstechnologiesllc.com";
const CONTACT_ADDRESS = [
  "4607 COLONY HILLS DR",
  "SUGAR LAND, TX 77479",
];

function LegalPage({
  title,
  intro,
  sections,
  lastUpdated,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-brand-sand to-white px-6 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-brand-line bg-white/80 px-4 py-2 text-sm font-medium text-brand-copy shadow-sm transition hover:border-brand-line-strong hover:text-brand-ink"
        >
          Back to home
        </Link>

        <article className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_24px_60px_-28px_color-mix(in_srgb,var(--color-brand-navy)_35%,transparent)]">
          <header className="border-b border-brand-line bg-linear-to-r from-brand-sand via-white to-brand-mist px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-muted">
              Savvy Ace Trading LLC
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              {title}
            </h1>

            <div className="mt-4 space-y-3 text-sm leading-7 text-brand-copy sm:text-base">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-5 text-sm font-medium text-brand-muted">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-semibold text-brand-ink">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-sm leading-7 text-brand-copy sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-copy sm:text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.table ? (
                    <div className="mt-6 overflow-x-auto rounded-xl border border-brand-line bg-white">
                      <table className="min-w-full text-sm text-brand-copy">
                        <thead className="bg-brand-mist text-brand-ink">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th
                                key={header}
                                className="px-4 py-3 text-left font-semibold"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, idx) => (
                            <tr
                              key={idx}
                              className="border-t border-brand-line even:bg-brand-sand"
                            >
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-3xl border border-brand-line bg-brand-sand px-6 py-6">
              <h2 className="text-xl font-semibold text-brand-ink">
                Contact & Support
              </h2>
              <p className="mt-3 text-sm leading-7 text-brand-copy sm:text-base">
                If you have questions about this page, your data, or an active
                project, contact Savvy Ace Trading LLC using the details below.
              </p>

              <div className="mt-4 space-y-3 text-sm text-brand-copy sm:text-base">
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-brand-ink underline decoration-brand-line-strong underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>

                <address className="not-italic leading-7">
                  {CONTACT_ADDRESS.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>

                <p>
                  You can also use our{" "}
                  <Link
                    href="/#contact"
                    className="font-medium text-brand-ink underline decoration-brand-line-strong underline-offset-4"
                  >
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

// ------------------------------------------------------------------
// Full Terms & Conditions for Savvy Ace Trading LLC
// (adapted from Webs Design Experts, with all original detail)
// ------------------------------------------------------------------

const termsData = {
  title: "Terms and Conditions",
  intro: [
    "TERMS & CONDITIONS",
    "The following terms and conditions apply to projects undertaken by Savvy Ace Trading LLC",
  ],
  sections: [
    {
      title: "Terms of Use",
      paragraphs: [
        'Welcome to Savvy Ace Trading LLC. By signing up with us, and being a Client, you agree to be legally bound by these Terms and Conditions of Use (the "Terms and Conditions"), including those terms and conditions incorporated by reference. Please read these Terms and Conditions carefully. If you do not accept these Terms and Conditions, you may not use our services. Savvy Ace Trading LLC may revise these Terms and Conditions at any time by updating this posting. You should visit this web page periodically to review the Terms and Conditions. In these Terms and Conditions, all services provided by and related to Savvy Ace Trading LLC, and all text, images, photographs, user interface, "look" and "feel", data and other content included at Savvy Ace Trading LLC from time to time (including, without limitation, the selection, coordination and arrangement of such content) are sometimes referred to as the "Website" and/or "Service." You acknowledge and agree that Savvy Ace Trading LLC shall have the right (but not the obligation) in its sole discretion, to pre-screen, refuse or remove any project and/or user provided content that violates these Terms and Conditions or is otherwise objectionable, including, without limitation, projects or content that is illegal, obscene, indecent, defamatory, incites religious, racial or ethnic hatred, or violates the rights of others. Activity that is brought to our attention which appears in our sole judgment to violate the law will be brought to the attention of the proper authorities. You acknowledge, consent and agree that Savvy Ace Trading LLC may access, preserve, and disclose your account information and content if required to do so by law or in a good faith belief that such access preservation or disclosure is reasonably necessary to: (a) comply with legal process; (b) enforce these Terms and Conditions; (c) respond to claims that any content violates the rights of third-parties; (d) respond to your requests for customer service; or (e) protect the rights, property, or personal safety of Savvy Ace Trading LLC, its users and the public. Savvy Ace Trading LLC reserves the right to modify, amend, update and change these Terms and Conditions from time to time without notice. You are responsible for regularly viewing these Terms and Conditions. You acknowledge and agree that Savvy Ace Trading LLC shall not be liable to you or to any third party for any modification, amendment, suspension, discontinuance or other change to these Terms and Conditions.',
      ],
    },
    {
      title: "Savvy Ace Trading LLC Technicalities",
      paragraphs: [
        '(a) Description. The Savvy Ace Trading LLC Service is an online offering where individuals or entities that have signed up with Savvy Ace Trading LLC as clients (each, a "Client") can post specific assignments and project descriptions, including illustrative samples or other media (each, a "Creative Brief"), revise those Creative Briefs (each, a "Revision Brief") and obtain responses (each, a "Response") to those Creative or Revision Briefs from design experts retained by Savvy Ace Trading LLC ("Members"). Savvy Ace Trading LLC will provide you, as the Client, the Service according to the Package you have chosen. Your Responses will be created iteratively through a drafting cycle of Creative Briefs, Revision Briefs and Responses, ultimately resulting in a final Response conforming to your various Creative and Revision Briefs.',
        '(b) Creative Brief and Responses. You are solely responsible for preparing and posting detailed descriptions of each of your Creative Briefs to the Website, including providing samples illustrating your Creative Brief and any relevant deadlines. For each Response to a Creative Brief that you want to receive, a term sheet (a "Term Sheet") will be generated that will contain, and be subject to, the terms and conditions you have established for the Creative or Revision Brief. Savvy Ace Trading LLC is under no obligation to review a Creative or Revision Brief or Term Sheet for any purpose, including accuracy, completeness of information, quality or clarity. Savvy Ace Trading LLC may decide, in its sole discretion, to deny a Creative or Revision Brief or a Term Sheet.',
        '(c) Reviewing Responses. When Savvy Ace Trading LLC provides you with a Response, you are responsible for reviewing the Response. If you fail to promptly inform Savvy Ace Trading LLC that the Response is not reasonably responsive to the related Term Sheet or Creative Brief, you will be deemed to have accepted the Response. If you notify Savvy Ace Trading LLC that you think a response is not reasonably responsive to the related Creative Brief, you shall then submit to the Website a Revision Brief containing information regarding amendments or modification to be made to the initial Response. After you provide Savvy Ace Trading LLC with a Revision Brief, Savvy Ace Trading LLC will provide you with a subsequent Response that conforms to the additional criteria you requested. Savvy Ace Trading LLC is not responsible for the content of Responses developed to the extent that such Responses are prepared to conform to your Creative or Revision Briefs.',
        "(d) Revision Cycles. Revision cycles generally consist of 2-6 additional compositions that incorporate changes you request in a Revision Brief. The purpose of the revision process is to create Responses that move your project forward in the specific direction you have determined. You may request significant changes in the first and second cycles, and the Responses generated might be quite different in nature from the original composition you selected. By the third revision request, your requests shall be modifications of the current composition only.",
      ],
    },
    {
      title: "Eligibility, Access, Use and Service",
      paragraphs: [
        "(a) Eligibility Requirements. To register as a Client, you must be at least 18 years of age, agree to these Terms and Conditions and Savvy Ace Trading LLC’ privacy policy, and complete the registration procedure. By registering as a Client, you represent and warrant that you meet these eligibility requirements, that the information you include as part of the registration process is complete and accurate and, if you are registering on behalf of an entity, that you are authorized to bind that entity to these Terms and Conditions. Savvy Ace Trading LLC may accept or reject your registration in its sole discretion.",
        "(b) Authorization to Use; Permitted Uses. You may access and use the Service solely in accordance with these Terms and Conditions and any posted policies and procedures that appear on the Website. You may provide Creative Briefs and obtain Responses only if you register as a Client. Any use of the Website is at your sole risk and responsibility. Subject to these Terms and Conditions, you may (i) display the Website on an Internet access device, and (ii) on an occasional, infrequent and ad hoc basis, and only in circumstances that constitute “fair use” under United States copyright law, print copies of insubstantial portions of the Website.",
        "(c) Prohibited Uses. Except as expressly permitted in these Terms and Conditions, you may not display or print the Website and in no event may you broadcast, circulate, distribute, download, perform, publish, rent, reproduce, sell, store, transmit or create derivative works from the Website. Additionally, you agree to comply with all applicable laws (including, without limitation, any applicable export controls) in connection with your use of the Service, and with such further limitations or rules as may be set forth on the Website. Without limiting the foregoing, you agree not to transmit, distribute, post, communicate or store information or other material on, to or through the Website that (i) is copyrighted, unless you are the copyright owner; (ii) reveals trade secrets, unless you own them; (iii) infringes on any other proprietary or intellectual property rights of others, on the privacy or publicity rights of others, or any statutory right; (iv) is obscene, defamatory, threatening, harassing, abusive, hateful, or embarrassing to any other person or entity; (v) is sexually-explicit; (vi) constitutes advertisements or solicitations of business, chain letters or pyramid schemes; or (vii) contains viruses, Trojan horses, worms, time bombs, or other computer programming routines or engines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or information.",
        "You further agree not to (a) use any incomplete, false or inaccurate biographical information or other information for purposes of registering as a Client; (b) delete or revise any material or other information of any other user of Savvy Ace Trading LLC; (c) take any action that imposes an unreasonable or disproportionately large load on the Website’s infrastructure; (d) use any device, software or routine to interfere or attempt to interfere with the proper working of the Service or any activity being conducted on the Website; (e) use or attempt to use any engine, software, tool, agent or other device or mechanism (including, without limitation, browsers, spiders, robots, avatars or intelligent agents) to navigate or search the Website, other than the search engine and search agents available from Savvy Ace Trading LLC on the Website and other than generally available third-party web browsers; or (f) attempt to decipher, decompile, disassemble or reverse-engineer any of the software comprising or in any way making up a part of the Website.",
        "(d) Website Security. You are prohibited from violating or attempting to violate the security of the Website, including, without limitation, (i) accessing data not intended for you or logging into a server or account that you are not authorized to access; (ii) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization; (iii) attempting to interfere with service to any user, host or network, including, without limitation, by way of submitting a virus to, or overloading, “flooding”, “spamming”, “mailbombing” or “crashing”, the Website; (iv) sending unsolicited email to any user of the Website, including promotions and/or advertising of products or services; or (v) forging any TCP/IP packet header or any part of the header information in any email or posting generated in connection with the Service. Violations of system or network security may result in civil or criminal liability. Savvy Ace Trading LLC will investigate occurrences that may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.",
        "(e) Operation of Website. Savvy Ace Trading LLC shall not be responsible for any delays or interruptions of, or errors or omissions contained in, the Website. Savvy Ace Trading LLC reserves the right, but shall not be required, to correct any such delays, interruptions, errors or omissions. Although Savvy Ace Trading LLC intends to use commercially reasonable efforts to make the Website and Service accessible, Savvy Ace Trading LLC makes no representation, warranty or covenant that the Website or Service will be available at all times or at any time. Various circumstances may prevent or delay availability, including telecommunications and/or server problems. Savvy Ace Trading LLC may at any time discontinue the Website in whole or in part, may change or eliminate any transmission method, and may change transmission speeds or other signal characteristics. Savvy Ace Trading LLC shall not be responsible for any loss, cost, damage or liability that may result from any of the circumstances, actions or inactions described in this paragraph.",
      ],
    },
    {
      title: "Refund, Cancellation & Tax Policy",
      bullets: [
        "You have chosen a special package.",
        "The primary design concept has been approved.",
        "You have demanded revisions.",
        "The cancellation has been made due to reasons non-related to the company.",
        "The company has not been contacted for more than 2 weeks of project.",
        "Company’s policies, or policy, have been violated.",
        "Other company or designer has been approached for the same project.",
        "The creative brief is lacking in required information.",
        "A complete design or scope change has been demanded.",
        "The claim has crossed the given ‘request for refund’ time span (7 days from purchase).",
        "The business is closing or changing name or business.",
        "Reasons such as ‘change of mind’, ‘disagreement with partner’ or other reasons that do not pertain to the service will not be subject to refund under any circumstances.",
        "If a client subscribes for a service bundle and happens to be dissatisfied with a particular service, refund will only be applicable on that particular service and ‘not’ the entire bundle.",
        "The client will not be entitled to any refunds after 7 days, from the date of purchase.",
        "Services including but not limited to Social Media, SEO, Domain Registration and Web Hosting are not entitled to refunds under any circumstances.",
        "In case of websites, refunds will not be entertained once the client has approved the design and the website is sent for development.",
        "Customer is not eligible for a refund after 24 hours once the contract has been sent to the client, client need to sign it and share it back with us, moreover if the contract is not signed within 48 hours customer is not eligible for a refund without a valid reason.",
        "Printed orders (e.g., book covers, merchandise) cannot be refunded if the printed item is in production or in delivery phase. Customer wishes to cancel any printing order needs to cancel it before the printing is initiated; cancellation or refund request will not be entertained. Moreover, customer cannot dispute or claim charges against this order if fulfillment documents has been provided.",
      ],
      paragraphs: [
        "The Savvy Ace Trading LLC refund policy will be nil if;",
        "Note: Savvy Ace Trading LLC holds all rights to reject any project or cancel the contract whenever it deems necessary. After the refund, you will not have any rights to use the designs for any purpose; they will be the sole property of Savvy Ace Trading LLC. The company will be the rightful owner of the designs.",
        "All communication between Savvy Ace Trading LLC team and the customer should be documented on a registered email address provided by the customer.",
        "For order delivery, the company shall contact the customer through the email address provided by the customer at least three times.",
        "In case of no response from the customer, after three emails (including delivery and reminders) and the expiry of seven consecutive working days from the delivery of the project, the project shall be deemed accepted by the customer and the company shall not be liable for any refunds after this date as the company has already deployed resources for project fulfilment and allowed reasonable time to the customer to respond.",
        "Further, If the customer is non-responsive on his registered email address with the company for 10 consecutive days, the money-back guarantee offer becomes void for the contract/project.",
        "Savvy Ace Trading LLC will review and uphold the offer at its own discretion.",
        "Payments made by Visa, Master and Amex cards are processed by our bank merchant services. Savvy Ace Trading LLC do not hold customer card details on their systems in order to provide maximum security and to remain compliant. Where recurring billing is required, card details are stored with merchant services for future payments. We also accept payments via personal/company cheque and bank transfers. Payments via PayPal & Discover Card are processed by PayPal.",
        "All prices advertised on this website are exclusive of any applicable taxes.",
      ],
    },
    {
      title: "Important Information",
      paragraphs: [
        "How do I qualify to claim a refund?",
        "When you receive initial design concepts for your design package and you do not find them according to your brief, you may choose to claim a refund. See below how these actions affect your eligibility to claim a refund:",
      ],
      table: {
        headers: ["Stage", "Money Back Status"],
        rows: [
          [
            "None of the initial samples in any way match to the customer brief.",
            "Customer can ask for a refund within 24 hours of the initial delivery",
          ],
          [
            "Customer asks for revisions by providing feedback",
            "Money Back Guarantee does not remain applicable. 100% Satisfaction Guarantee becomes applicable.",
          ],
          [
            "Take no action for 60 days",
            "Money back guarantee offer becomes void, however Savvy Ace Trading LLC will review and uphold the offer on its own direction",
          ],
        ],
      },
      bullets: [
        "How long does it take to claim a refund?",
        "It can take up to 21 business days to refund your amount. Our refund policy is detailed in Terms & Conditions of business.",
        "Does the money back guarantee apply to all packages?",
        "Money Back Guarantee applies to design packages only. Once you approve a design and ask for further revisions then the Money Back Guarantee becomes void. However, you still qualify for 100% satisfaction guarantee which means that we will keep on working on your design until you are satisfied.",
        "Why do Savvy Ace Trading LLC provide Money Back Guarantee?",
        "We are so confident of our skills and design quality that we provide Money Back Guarantee in case we fail to deliver. Money Back Guarantee is provided in good faith and we expect our customers to exhibit the same. In majority of the cases customer are very honest, co-operative and provide quality feedback in order to get the designs they want. However, there is a minority that tries to take unfair advantage of this flexibility.",
        "They will place orders with many providers at the same time, get the design concepts from all and then ask for the money back. This practice is unfair, unethical and abusive of human skills. Apologies, but if you are one of those we would rather not have your business.",
        "Design work is very subjective. Unless customer provides quality feedback, it is unlikely to get the designs right in the first attempt. Savvy Ace Trading LLC is a custom design company that strongly believes in customer feedback and their involvement in the design process. In our experience, initial samples are rarely chosen as the final logo; instead they are used to bounce ideas.",
        "From the feedback provided on these samples we see details about the likes and dislikes of the customer and then provide revisions that are closer to the requirements. Money Back Guarantee cover the customers if we fail to deliver what they wanted.",
        "Money Back Guarantee does not apply to design agencies, design studios and for those who are working on their client's projects.",
        "Note: Please note that customers claiming a refund will not be allowed to use the initial design concepts sent to them. Copyrights of all designs remain the property of Savvy Ace Trading LLC until fully paid.",
      ],
    },
    {
      title: "Ownership; Rights to Use",
      paragraphs: [
        '(a) Website and Service Generally. Except as expressly contemplated under these Terms and Conditions, as between Savvy Ace Trading LLC and you, Savvy Ace Trading LLC will own all right, title and interest in and to all copyright, trademark, service mark, patent, trade secret or other intellectual property and proprietary rights in and to the Website and Service, in all media now known or later devised, to the fullest extent provided under international law. You shall not remove, conceal or alter any copyright notice, byline information, disclaimer, restriction or other notice on the Website or any portion thereof. You shall not use or permit any third party to use the name, trademarks, trade names, or trade address of Savvy Ace Trading LLC, including "Savvy Ace Trading LLC", without the prior written consent of Savvy Ace Trading LLC, as determined in its sole discretion, for each such use.',
        '(b) Creative and Response Briefs. Upon submission of a Creative or Response Brief or any other information or media provided by you in connection with your use of the Service (collectively, the "Client Information"), Savvy Ace Trading LLC and its agents shall have all rights and licenses necessary to use such Client Information for the purpose of obtaining Responses and for archival purposes. Each Member to whom your project is made available has the right to review and display the relevant Term Sheet for purposes of preparing a Response.',
        "(c) Rights of Savvy Ace Trading LLC. Upon your submission of Client Information to the Service, you grant Savvy Ace Trading LLC and its agents royalty-free, perpetual, irrevocable, sublicenseable, exclusive, worldwide right (including any moral rights) and license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, communicate to the public, perform and display (in whole or in part), and/or incorporate in other works, in any form, media, or technology now known or later developed, such Client Information, for the full term of any intellectual property rights that may exist in such Client Information to the extent necessary to provide you with the Service and Responses.",
        '(d) Rights of Clients. Subject to your compliance with these Terms and Conditions, you shall own the final Response composition provided to you by Savvy Ace Trading LLC (the "Final Product"). You shall not, however, own any materials, media or other content generated during any revision cycles leading up to the Final Product, and Savvy Ace Trading LLC expressly reserves all right, title and interest in and to the same. You acknowledge and hereby grant to Savvy Ace Trading LLC a royalty-free, irrevocable exclusive worldwide right to use Creative and Revision Briefs, individual Responses provided to you, and Final Product for internal and archival purposes, and in order to display and promote the Savvy Ace Trading LLC service. Savvy Ace Trading LLC retains the rights to all artwork concepts and other content not selected by you. You acknowledge that your ownership rights under these Terms and Conditions are limited to the Final Product, and that no trademarks or service marks in or to any Final Product are being conveyed under these Terms and Conditions. You hereby acknowledge that Savvy Ace Trading LLC shall have no obligation or duty to perform trademark, service mark or copyright searches or inquiries, or the like, in order to validate the propriety or legality of the Final Product. Accordingly, you are encouraged to perform your own independent searches with regard to the Final Product. Furthermore, you acknowledge that Savvy Ace Trading LLC shall have no responsibility or obligation of any kind to assist you in seeking state or federal intellectual property protection (i.e., without limitation, trademark or copyright registration) for the Final Product, nor shall Savvy Ace Trading LLC be responsible for otherwise assisting you in any way in your attempt to perfect your rights in or to the Final Product.',
        "(e) Savvy Ace Trading LLC holds the right to charge your account for $10 pertaining to the release of the final files upon order closure.",
        "(f) Savvy Ace Trading LLC reserves the right to bill your account for the release of the website domain or website master files.",
      ],
    },
    {
      title: "Non disclosure and Privacy",
      paragraphs: [
        "Savvy Ace Trading LLC intends to use commercially reasonable efforts to follow its privacy policy, as such privacy policy may be changed from time to time at Savvy Ace Trading LLC' sole discretion. Notwithstanding the foregoing, Savvy Ace Trading LLC cannot and does not assume any responsibility or liability for any information submitted to the Website or for the use or misuse of any information submitted by you or any other person, including, without limitation, any information accessed by a hacker or by any other malicious act.",
    ],
  },
  {
      title: "WARRANTY Disclaimers; Indemnification; Limitations of Liability",
      paragraphs: [
        "(a) Responsibility for Content. Savvy Ace Trading LLC shall not be responsible for any use that is or is not made of the Website or the Service. Without limiting the foregoing, Savvy Ace Trading LLC makes no representations, warranties or covenants regarding, and does not guarantee, the truthfulness, accuracy, or reliability of any information or other material (including, without limitation, any Creative Brief, Term Sheets, Responses or User Identity) that are communicated through, or posted to, the Service, whether by Members, Clients, Savvy Ace Trading LLC or otherwise, nor does Savvy Ace Trading LLC endorse any opinions expressed by any user of the Website, including any Member or Client. Without limiting the foregoing, Savvy Ace Trading LLC makes no representations, warranties or covenants regarding the validity of the rights to Responses granted pursuant to these Terms and Conditions. You acknowledge that any reliance on information or other material, including, without limitation, any information related to a particular Package or your project, Term Sheet, Response or User Identity, communicated through the Service, or posted to the Website, will be at your own risk. Without limiting the foregoing, you agree and acknowledge that you use each Response at your own risk and that you are responsible for taking any actions you deem reasonable to determine whether your use of a Response will infringe any statutory or third-party intellectual property, privacy or publicity rights.",
        '(b) Links to Third-Party Services. The Website may contain links to third-party Websites or other services (the "Linked Content"). The Linked Content is not under the control of Savvy Ace Trading LLC and Savvy Ace Trading LLC is not responsible for the Linked Content, including, without limitation, links contained in the Linked Content, or any changes or updates to Linked Content. Savvy Ace Trading LLC providing Linked Content to you only as a convenience, and the inclusion of such Linked Content is not an endorsement by Savvy Ace Trading LLC of such Linked Content. If you decide to access any Linked Content, you do so at your own risk.',
        '(c) Disclaimer of Warranties. THE SERVICE AND THE RESPONSES ARE PROVIDED "AS IS." Savvy Ace Trading LLC MAKES NO REPRESENTATION OR WARRANTY OF ANY KIND WHATSOEVER TO YOU OR ANY OTHER PERSON RELATING IN ANY WAY TO THE WEBSITE, INCLUDING ANY PART THEREOF, OR ANY WEBSITE OR OTHER CONTENT OR SERVICE THAT MAY BE ACCESSIBLE DIRECTLY OR INDIRECTLY THROUGH THE WEBSITE, INCLUDING ANY TERM SHEET, RESPONSE, USER IDENTITY OR LINKED CONTENT. Savvy Ace Trading LLC DISCLAIMS, TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANY AND ALL SUCH REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, Savvy Ace Trading LLC DISCLAIMS, TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANY AND ALL (i) WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE; (ii) WARRANTIES AGAINST INFRINGEMENT OF ANY THIRD-PARTY INTELLECTUAL PROPERTY OR PROPRIETARY RIGHTS; (iii) WARRANTIES RELATING TO DELAYS, INTERRUPTIONS, ERRORS, OR OMISSIONS IN THE WEBSITE, OR ANY PART THEREOF; (iv) WARRANTIES RELATING TO THE TRANSMISSION OR DELIVERY OF THE WEBSITE; AND (v) WARRANTIES OTHERWISE RELATING TO PERFORMANCE, NON-PERFORMANCE, OR OTHER ACTS OR OMISSIONS BY Savvy Ace Trading LLC OR ANY THIRD PARTY. FURTHERMORE, THERE IS NO WARRANTY THAT THE WEBSITE WILL MEET YOUR NEEDS OR REQUIREMENTS OR THE NEEDS OR REQUIREMENTS OF ANY OTHER PERSON.',
        "(d) Release from Claims. The Service serves solely as a venue for the creation of work and Savvy Ace Trading LLC does not regularly screen or censor any information or material posted to the Website. Although Savvy Ace Trading LLC makes commercially reasonable efforts to determine the identity of Clients, Savvy Ace Trading LLC cannot and does not confirm that any Client or other user is who they claim to be or that any Client or other user has the qualifications he or she claims to have. Because Savvy Ace Trading LLC does not and cannot be involved in user-to-user dealings or control the behavior of participants on the Website, if you have a dispute with one or more users, you hereby release Savvy Ace Trading LLC (and our affiliates, agents and employees) from claims, demands and damages (actual and consequential, direct and indirect) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes.",
        "(e) Indemnification. You hereby agree to defend, indemnify and hold harmless Savvy Ace Trading LLC and its subsidiaries, affiliates, officers, agents, co-branders or other partners and employees from any action, claim, demand, or liability arising from or relating to your violation of any of these Terms and Conditions or use of the Website, and any expenses incurred in connection therewith, including, without limitation, reasonable attorneys' fees.",
        "(f) Limitation of Damages. IN NO EVENT SHALL THE COMPANY OR ANY THIRD PARTY BE LIABLE TO YOU OR ANY OTHER PERSON FOR CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR INDIRECT DAMAGES ARISING UNDER OR IN ANY WAY RELATED TO THE WEBSITE, INCLUDING ANY PART THEREOF, OR THESE TERMS AND CONDITIONS OR ANY OTHER CONSENT (INCLUDING LOST PROFITS, LOSS OF BUSINESS OR DATA, BUSINESS INTERRUPTION, TRADING LOSSES, AND DAMAGES THAT RESULT FROM INACCURACY OF THE INFORMATION OR INCONVENIENCE, DELAY, OR LOSS OF THE USE OF THE SERVICE) EVEN IF Savvy Ace Trading LLC OR ANY THIRD PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. Savvy Ace Trading LLC TOTAL LIABILITY FOR DAMAGES SHALL BE LIMITED TO THE TOTAL AMOUNT YOU PAID TO Savvy Ace Trading LLC FOR YOUR PACKAGE UNDER THESE TERMS AND CONDITIONS. THIS AGREEMENT AND ALL MATTERS ARISING FROM IT SHALL BE GOVERNED BY AND CONSTRUED IN ACCORDANCE WITH THE LAWS OF UNITED STATES.",
      ],
    },
  ],
  lastUpdated: "February 10, 2026",
};

export function TermsPage() {
  return <LegalPage {...termsData} />;
}

export default TermsPage;
