import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimers for the ಕೆA-26 platform covering general, medical, food safety, marketplace, and delivery services.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Disclaimer
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
              1. General Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>1.1.</strong> The information provided on the ಕೆA-26
                platform, including the website at ka-26.com and the consumer
                application at ka26.shop (the &quot;Platform&quot;), is for
                general informational purposes only. While we strive to ensure
                accuracy, ಕೆA-26 makes no representations or warranties of any
                kind, express or implied, about the completeness, accuracy,
                reliability, suitability, or availability of the Platform or the
                information, products, services, or related content contained on
                the Platform.
              </p>
              <p>
                <strong>1.2.</strong> The Platform may experience downtime for
                maintenance, updates, or due to technical issues beyond our
                control. ಕೆA-26 does not guarantee uninterrupted or error-free
                access to the Platform at all times.
              </p>
              <p>
                <strong>1.3.</strong> Any reliance you place on the information
                provided through the Platform is strictly at your own risk.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Medical Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>2.1.</strong> ಕೆA-26 is{" "}
                <strong>
                  not a pharmacy, healthcare provider, or medical professional
                </strong>
                . The Platform serves only as a technology intermediary that
                connects consumers with independently licensed pharmacies and
                pharmacists.
              </p>
              <p>
                <strong>2.2.</strong> All medicines and pharmaceutical products
                available through the Platform are sold and dispensed by
                independently licensed pharmacies that are solely responsible
                for the quality, authenticity, and dispensing of all
                pharmaceutical products.
              </p>
              <p>
                <strong>2.3.</strong> Product information, descriptions, and
                uses displayed on the Platform are provided for informational
                purposes only and should not be considered as medical advice,
                diagnosis, or treatment recommendations.
              </p>
              <p>
                <strong>2.4.</strong>{" "}
                <strong>Always consult a qualified medical professional</strong>{" "}
                before purchasing or consuming any medication. Do not
                self-diagnose or self-medicate based on information found on the
                Platform.
              </p>
              <p>
                <strong>2.5.</strong> Prescription medicines will only be
                dispensed by the pharmacy upon submission and verification of a
                valid prescription issued by a registered medical practitioner.
                ಕೆA-26 does not verify prescriptions; this responsibility lies
                entirely with the dispensing pharmacy.
              </p>
              <p>
                <strong>2.6.</strong> ಕೆA-26 shall not be held liable for any
                adverse effects, allergic reactions, or health consequences
                resulting from the use of any pharmaceutical products purchased
                through the Platform.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Food Safety Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>3.1.</strong> Restaurants and food establishments listed
                on the Platform are independently owned and operated businesses.
                ಕೆA-26 is not responsible for the preparation, quality, safety,
                or hygiene of food items sold by these establishments.
              </p>
              <p>
                <strong>3.2.</strong> ಕೆA-26 partners with restaurants that hold
                valid FSSAI (Food Safety and Standards Authority of India)
                licences. However, ಕೆA-26 does not independently verify or
                continuously monitor the food safety practices of individual
                restaurants.
              </p>
              <p>
                <strong>3.3.</strong> Food allergen information, nutritional
                content, and ingredient details are provided by the restaurants
                and may not be complete or accurate. If you have food allergies
                or dietary restrictions, please contact the restaurant directly
                before placing an order.
              </p>
              <p>
                <strong>3.4.</strong> ಕೆA-26 shall not be held liable for any
                foodborne illness, allergic reactions, or health issues arising
                from the consumption of food ordered through the Platform.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Marketplace Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>4.1.</strong> ಕೆA-26 operates as a technology platform
                and marketplace intermediary. We are not the seller,
                manufacturer, importer, or distributor of any products or
                services listed on the Platform.
              </p>
              <p>
                <strong>4.2.</strong> Product quality, descriptions, images,
                pricing, availability, and compliance with applicable laws are
                the sole responsibility of the individual sellers listing those
                products.
              </p>
              <p>
                <strong>4.3.</strong> ಕೆA-26 does not inspect, test, warrant, or
                endorse any products or services listed by sellers. Any claims
                or warranties regarding products are made by the sellers, not
                by ಕೆA-26.
              </p>
              <p>
                <strong>4.4.</strong> Disputes regarding product quality,
                descriptions, or seller conduct should be addressed with the
                respective seller. ಕೆA-26 will provide reasonable assistance as
                an intermediary to facilitate resolution but is not a party to
                the transaction between the consumer and the seller.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Delivery Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>5.1.</strong> Delivery times displayed on the Platform
                are estimates only and may vary depending on factors such as
                traffic conditions, weather, order volume, distance, and
                delivery partner availability.
              </p>
              <p>
                <strong>5.2.</strong> Delivery partners are independent
                contractors and not employees of ಕೆA-26. While we take steps to
                onboard reliable delivery partners, ಕೆA-26 is not responsible for
                the conduct of individual delivery partners beyond the scope of
                the Platform.
              </p>
              <p>
                <strong>5.3.</strong> ಕೆA-26 shall not be liable for delays in
                delivery caused by factors outside our reasonable control,
                including but not limited to natural disasters, strikes,
                government actions, or other force majeure events.
              </p>
              <p>
                <strong>5.4.</strong> Some sellers manage their own delivery
                (self-delivery). In such cases, the delivery is entirely the
                responsibility of the seller, and ಕೆA-26 acts only as the order
                facilitation platform.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. External Links Disclaimer
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>6.1.</strong> The Platform may contain links to
                third-party websites or services that are not owned or
                controlled by ಕೆA-26. We have no control over, and assume no
                responsibility for, the content, privacy policies, or practices
                of any third-party websites or services.
              </p>
              <p>
                <strong>6.2.</strong> The inclusion of any link does not imply
                endorsement, approval, or recommendation by ಕೆA-26 of the linked
                website or its content.
              </p>
              <p>
                <strong>6.3.</strong> We strongly advise you to read the terms
                and privacy policies of any third-party website you visit
                through links on the Platform.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              7. Limitation of Liability
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>7.1.</strong> To the maximum extent permitted by
                applicable law, ಕೆA-26 and its officers, directors, employees,
                affiliates, and agents shall not be liable for any direct,
                indirect, incidental, special, consequential, or punitive
                damages, including but not limited to loss of profits, data,
                use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  Your use of or inability to use the Platform.
                </li>
                <li>
                  Any products or services purchased or obtained through the
                  Platform.
                </li>
                <li>
                  Any conduct or content of any third party on the Platform,
                  including sellers, delivery partners, and other users.
                </li>
                <li>
                  Unauthorised access, use, or alteration of your data or
                  transmissions.
                </li>
                <li>
                  Any interruption or cessation of services.
                </li>
              </ul>
              <p>
                <strong>7.2.</strong> This limitation applies whether the alleged
                liability is based on contract, tort, negligence, strict
                liability, or any other basis, even if ಕೆA-26 has been advised of
                the possibility of such damages.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              8. Changes to This Disclaimer
            </h2>
            <p className="mt-3">
              ಕೆA-26 reserves the right to modify this Disclaimer at any time.
              Changes will be effective upon posting to the Platform. Your
              continued use of the Platform after any modifications constitutes
              acceptance of the updated Disclaimer. We encourage you to review
              this page periodically.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              9. Contact Information
            </h2>
            <p className="mt-3">
              If you have any questions about this Disclaimer, please contact
              us:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Company:</strong> ಕೆA-26
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
