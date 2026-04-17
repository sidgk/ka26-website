import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the KA26 platform, marketplace, and related services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: April 6, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-10 text-base leading-7 text-gray-600">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              1. Introduction and Acceptance
            </h2>
            <p className="mt-3">
              Welcome to KA26. These Terms and Conditions (&quot;Terms&quot;)
              govern your access to and use of the KA26 platform, including the
              website at ka-26.com, the consumer application at ka26.shop, and
              any related mobile applications, APIs, or services (collectively,
              the &quot;Platform&quot;).
            </p>
            <p className="mt-3">
              By accessing or using the Platform, you agree to be bound by these
              Terms. If you do not agree, you must not use the Platform. KA26
              reserves the right to update these Terms at any time, and your
              continued use constitutes acceptance of any modifications.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Definitions
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>&quot;KA26&quot;</strong>,{" "}
                <strong>&quot;we&quot;</strong>,{" "}
                <strong>&quot;us&quot;</strong>, or{" "}
                <strong>&quot;our&quot;</strong> refers to KA26, a company based
                in Gadag, Karnataka, India, operating the Platform.
              </li>
              <li>
                <strong>&quot;User&quot;</strong>,{" "}
                <strong>&quot;you&quot;</strong>, or{" "}
                <strong>&quot;your&quot;</strong> refers to any person accessing
                or using the Platform, whether as a consumer, seller, restaurant
                operator, pharmacy, or delivery partner.
              </li>
              <li>
                <strong>&quot;Seller&quot;</strong> refers to any individual or
                business listing products or services on the Platform, including
                local stores, restaurants, and pharmacies.
              </li>
              <li>
                <strong>&quot;Delivery Partner&quot;</strong> refers to
                independent contractors who fulfil deliveries through the
                Platform.
              </li>
              <li>
                <strong>&quot;Consumer&quot;</strong> refers to end-users who
                browse, order, or purchase goods and services through the
                Platform.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Nature of the Platform
            </h2>
            <p className="mt-3">
              KA26 operates as a technology-driven marketplace that connects
              consumers with local sellers, restaurants, pharmacies, and delivery
              partners. KA26 is an intermediary platform and is not itself the
              seller, manufacturer, or provider of any goods or services listed
              on the Platform.
            </p>
            <p className="mt-3">
              All transactions are between the consumer and the respective
              seller. KA26 facilitates the discovery, ordering, payment, and
              delivery processes but does not own, stock, prepare, or guarantee
              the quality of products or services listed by sellers.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. User Accounts and Registration
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>4.1.</strong> To use certain features of the Platform,
                you must create an account by providing accurate and complete
                information, including your name, phone number, and email
                address.
              </p>
              <p>
                <strong>4.2.</strong> You are responsible for maintaining the
                confidentiality of your account credentials and for all activity
                that occurs under your account.
              </p>
              <p>
                <strong>4.3.</strong> You must be at least 18 years of age to
                create an account. Minors may use the Platform only under the
                supervision and with the consent of a parent or legal guardian.
              </p>
              <p>
                <strong>4.4.</strong> KA26 reserves the right to suspend or
                terminate any account that violates these Terms, engages in
                fraudulent activity, or is otherwise deemed harmful to the
                Platform or its users.
              </p>
              <p>
                <strong>4.5.</strong> You agree to promptly update your account
                information if it changes.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Orders and Payments
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>5.1.</strong> Orders placed through the Platform
                constitute an offer to purchase goods or services from the
                respective seller. The seller reserves the right to accept or
                reject any order.
              </p>
              <p>
                <strong>5.2.</strong> Prices listed on the Platform are set by
                individual sellers and may vary. KA26 does not control product
                pricing and is not responsible for pricing errors by sellers.
              </p>
              <p>
                <strong>5.3.</strong> The Platform supports the following payment
                methods:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong>Cash on Delivery (COD):</strong> Payment is collected
                  by the delivery partner at the time of delivery.
                </li>
                <li>
                  <strong>UPI Payments:</strong> Online payments processed
                  through UPI-enabled payment gateways.
                </li>
              </ul>
              <p>
                <strong>5.4.</strong> All online payments are processed by
                third-party payment processors. KA26 does not store your
                payment credentials.
              </p>
              <p>
                <strong>5.5.</strong> A delivery fee may apply to orders and will
                be displayed before order confirmation.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. Refunds and Cancellations
            </h2>
            <p className="mt-3">
              Refunds and cancellations are governed by our{" "}
              <a
                href="/refund-policy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Refund &amp; Cancellation Policy
              </a>
              . By using the Platform, you agree to the terms outlined in that
              policy.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              7. Seller Responsibilities
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>7.1.</strong> Sellers are solely responsible for the
                accuracy of product listings, including descriptions, images,
                pricing, and availability.
              </p>
              <p>
                <strong>7.2.</strong> Sellers must comply with all applicable
                laws and regulations, including but not limited to the Consumer
                Protection Act, 2019, the Food Safety and Standards Act, 2006,
                and applicable tax laws.
              </p>
              <p>
                <strong>7.3.</strong> Restaurant partners must hold a valid FSSAI
                licence and comply with all food safety regulations.
              </p>
              <p>
                <strong>7.4.</strong> Sellers must fulfil accepted orders in a
                timely manner and communicate any delays or issues to the
                consumer through the Platform.
              </p>
              <p>
                <strong>7.5.</strong> KA26 reserves the right to delist any
                seller that fails to meet quality standards, receives repeated
                complaints, or violates these Terms.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              8. Delivery Partner Terms
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>8.1.</strong> Delivery partners are independent
                contractors, not employees of KA26. Nothing in these Terms
                creates an employer-employee relationship.
              </p>
              <p>
                <strong>8.2.</strong> Delivery partners must maintain a valid
                driving licence, vehicle registration, and insurance as required
                by applicable law.
              </p>
              <p>
                <strong>8.3.</strong> Delivery partners are responsible for the
                safe and timely delivery of orders and must handle all items with
                appropriate care.
              </p>
              <p>
                <strong>8.4.</strong> Delivery partners must not tamper with,
                open, or consume any items during transit.
              </p>
              <p>
                <strong>8.5.</strong> KA26 reserves the right to deactivate any
                delivery partner account for misconduct, repeated late
                deliveries, or violation of these Terms.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              9. Pharmacy Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>9.1.</strong> Medicines and pharmaceutical products
                listed on the Platform are sold by independently licensed
                pharmacists and pharmacies. KA26 does not sell, dispense, or
                provide medical advice regarding any pharmaceutical products.
              </p>
              <p>
                <strong>9.2.</strong> Prescription medicines will only be
                dispensed upon submission and verification of a valid
                prescription issued by a registered medical practitioner.
              </p>
              <p>
                <strong>9.3.</strong> KA26 does not guarantee the suitability of
                any medicine for your condition. Always consult a qualified
                healthcare professional before purchasing or consuming any
                medication.
              </p>
              <p>
                <strong>9.4.</strong> Returns and refunds for pharmaceutical
                products are subject to the Drugs and Cosmetics Act, 1940 and
                related regulations. See our{" "}
                <a
                  href="/refund-policy"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Refund Policy
                </a>{" "}
                for details.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              10. Intellectual Property
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>10.1.</strong> All content on the Platform, including but
                not limited to text, graphics, logos, icons, images, software,
                and the compilation thereof, is the property of KA26 or its
                content suppliers and is protected by Indian and international
                copyright laws.
              </p>
              <p>
                <strong>10.2.</strong> The KA26 name, logo, and all related
                names, logos, product and service names, designs, and slogans are
                trademarks of KA26. You may not use such marks without prior
                written permission.
              </p>
              <p>
                <strong>10.3.</strong> You may not reproduce, distribute, modify,
                create derivative works of, publicly display, or otherwise
                exploit any content from the Platform without express written
                consent from KA26.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              11. User-Generated Content
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>11.1.</strong> The Platform allows users to create and
                share content such as product requests, reviews, and short video
                reels (&quot;User Content&quot;).
              </p>
              <p>
                <strong>11.2.</strong> By submitting User Content, you grant
                KA26 a non-exclusive, royalty-free, worldwide, perpetual licence
                to use, display, reproduce, and distribute such content on and
                through the Platform.
              </p>
              <p>
                <strong>11.3.</strong> You represent and warrant that you own or
                have the necessary rights to all User Content you submit and
                that such content does not violate any third-party rights.
              </p>
              <p>
                <strong>11.4.</strong> KA26 reserves the right to remove any
                User Content that violates these Terms, is offensive,
                misleading, or otherwise inappropriate, without prior notice.
              </p>
            </div>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              12. Privacy
            </h2>
            <p className="mt-3">
              Your use of the Platform is also governed by our{" "}
              <a
                href="/privacy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Privacy Policy
              </a>
              , which describes how we collect, use, and protect your personal
              data. By using the Platform, you consent to the practices
              described in the Privacy Policy.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              13. Prohibited Conduct
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Use the Platform for any unlawful purpose or in violation of any
                applicable laws or regulations.
              </li>
              <li>
                Impersonate any person or entity or misrepresent your
                affiliation with any person or entity.
              </li>
              <li>
                Interfere with or disrupt the Platform or its servers and
                networks.
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the Platform,
                other user accounts, or any systems or networks connected to the
                Platform.
              </li>
              <li>
                Scrape, crawl, or use automated means to access the Platform
                without express written permission.
              </li>
              <li>
                Post or transmit any harmful, defamatory, obscene, or otherwise
                objectionable content.
              </li>
              <li>
                Engage in fraudulent activities, including placing false orders
                or providing false information.
              </li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              14. Limitation of Liability
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>14.1.</strong> To the fullest extent permitted by
                applicable law, KA26, its officers, directors, employees, and
                agents shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or
                related to your use of the Platform.
              </p>
              <p>
                <strong>14.2.</strong> KA26 does not guarantee the quality,
                safety, legality, or availability of any products or services
                listed by sellers. Any disputes regarding product quality,
                delivery, or service must be resolved directly between the
                consumer and the seller, with KA26 providing reasonable
                assistance as an intermediary.
              </p>
              <p>
                <strong>14.3.</strong> KA26 shall not be liable for any loss or
                damage arising from service interruptions, technical failures,
                or force majeure events.
              </p>
              <p>
                <strong>14.4.</strong> In no event shall KA26&apos;s total
                aggregate liability exceed the amount paid by you to KA26 in
                the twelve (12) months preceding the event giving rise to the
                claim.
              </p>
            </div>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              15. Indemnification
            </h2>
            <p className="mt-3">
              You agree to indemnify, defend, and hold harmless KA26, its
              affiliates, officers, directors, employees, and agents from and
              against any claims, liabilities, damages, losses, and expenses
              (including reasonable legal fees) arising out of or in any way
              connected with your access to or use of the Platform, your
              violation of these Terms, or your infringement of any third-party
              rights.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              16. Dispute Resolution and Governing Law
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>16.1.</strong> These Terms shall be governed by and
                construed in accordance with the laws of India.
              </p>
              <p>
                <strong>16.2.</strong> Any dispute arising out of or in
                connection with these Terms shall first be attempted to be
                resolved amicably through negotiation.
              </p>
              <p>
                <strong>16.3.</strong> If a dispute cannot be resolved through
                negotiation, it shall be subject to the exclusive jurisdiction
                of the courts in Gadag, Karnataka, India.
              </p>
            </div>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              17. Modifications to Terms
            </h2>
            <p className="mt-3">
              KA26 reserves the right to modify these Terms at any time. We
              will notify users of significant changes through the Platform or
              via email. Your continued use of the Platform after such
              modifications constitutes acceptance of the updated Terms. We
              encourage you to review these Terms periodically.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              18. Severability
            </h2>
            <p className="mt-3">
              If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect. The invalid or unenforceable provision shall be
              modified to the minimum extent necessary to make it valid and
              enforceable.
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              19. Contact Information
            </h2>
            <p className="mt-3">
              If you have any questions or concerns about these Terms, please
              contact us:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Company:</strong> KA26
              </li>
              <li>
                <strong>Address:</strong> Gadag, Karnataka, India
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@ka-26.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  support@ka-26.com
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/918197363421"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  +91 81973 63421
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://ka-26.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  ka-26.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
