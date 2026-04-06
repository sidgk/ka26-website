import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for KA-26 — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
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
              1. Introduction
            </h2>
            <p className="mt-3">
              KA-26 (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
              committed to protecting your privacy and personal data. This
              Privacy Policy explains how we collect, use, store, and share your
              information when you use the KA-26 platform, including the website
              at ka-26.com, the consumer application at ka26.shop, and any
              related services (the &quot;Platform&quot;).
            </p>
            <p className="mt-3">
              This policy is designed to comply with the Digital Personal Data
              Protection Act, 2023 (DPDPA) and other applicable Indian laws. By
              using the Platform, you consent to the collection and use of your
              data as described herein.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Information We Collect
            </h2>
            <div className="mt-3 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  2.1. Information You Provide
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>
                    <strong>Account information:</strong> Name, email address,
                    phone number, and password when you register.
                  </li>
                  <li>
                    <strong>Delivery address:</strong> Addresses you save for
                    order delivery.
                  </li>
                  <li>
                    <strong>Order information:</strong> Details of products and
                    services you order, including order history.
                  </li>
                  <li>
                    <strong>User-generated content:</strong> Product requests,
                    reviews, reels, and other content you create on the Platform.
                  </li>
                  <li>
                    <strong>Communication data:</strong> Messages you send to
                    sellers, delivery partners, or our support team.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  2.2. Information Collected Automatically
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>
                    <strong>Device information:</strong> Device type, operating
                    system, browser type, and unique device identifiers.
                  </li>
                  <li>
                    <strong>Location data:</strong> GPS-based location (with your
                    permission) to provide delivery services and show nearby
                    sellers.
                  </li>
                  <li>
                    <strong>Usage data:</strong> Pages visited, features used,
                    time spent on the Platform, and interaction patterns.
                  </li>
                  <li>
                    <strong>Log data:</strong> IP address, access times, and
                    referring URLs.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              We use your personal data for the following purposes:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong>Order processing:</strong> To process, fulfil, and
                deliver your orders, including sharing necessary details with
                sellers and delivery partners.
              </li>
              <li>
                <strong>Account management:</strong> To create and manage your
                account, authenticate your identity, and provide customer
                support.
              </li>
              <li>
                <strong>Notifications:</strong> To send order updates, delivery
                status, promotional offers (with your consent), and important
                service announcements.
              </li>
              <li>
                <strong>Service improvement:</strong> To analyse usage patterns,
                troubleshoot issues, and improve the Platform&apos;s features and
                performance.
              </li>
              <li>
                <strong>Safety and security:</strong> To detect and prevent
                fraud, abuse, and security threats.
              </li>
              <li>
                <strong>Legal compliance:</strong> To comply with applicable
                laws, regulations, and legal processes.
              </li>
              <li>
                <strong>Analytics:</strong> To understand user behaviour and
                preferences to provide a better experience.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Data Sharing
            </h2>
            <p className="mt-3">
              We do not sell your personal data to third parties. We share your
              information only in the following circumstances:
            </p>
            <div className="mt-3 space-y-3">
              <p>
                <strong>4.1. With Sellers:</strong> When you place an order, we
                share your name, delivery address, and phone number with the
                seller to fulfil your order.
              </p>
              <p>
                <strong>4.2. With Delivery Partners:</strong> We share your
                name, delivery address, and phone number with delivery partners
                to complete deliveries.
              </p>
              <p>
                <strong>4.3. Payment Processors:</strong> Payment information is
                shared with our third-party payment processors to process
                transactions securely. KA-26 does not store your payment
                credentials.
              </p>
              <p>
                <strong>4.4. Service Providers:</strong> We may share data with
                trusted service providers who assist us in operating the
                Platform, such as cloud hosting providers, analytics services,
                and notification services. These providers are bound by
                confidentiality agreements.
              </p>
              <p>
                <strong>4.5. Legal Requirements:</strong> We may disclose your
                information if required by law, regulation, legal process, or
                governmental request.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Data Storage and Security
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>5.1.</strong> Your data is stored on secure servers
                hosted by reputable cloud service providers. We implement
                industry-standard security measures including encryption in
                transit (TLS/SSL), access controls, and regular security audits.
              </p>
              <p>
                <strong>5.2.</strong> While we take reasonable steps to protect
                your data, no method of transmission over the Internet or
                electronic storage is completely secure. We cannot guarantee
                absolute security of your information.
              </p>
              <p>
                <strong>5.3.</strong> Passwords are stored using one-way
                cryptographic hashing and are never stored in plain text.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. Your Rights
            </h2>
            <p className="mt-3">
              Under the Digital Personal Data Protection Act, 2023, you have the
              following rights:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong>Right to Access:</strong> You can request a summary of
                the personal data we hold about you and how it is processed.
              </li>
              <li>
                <strong>Right to Correction:</strong> You can request correction
                of inaccurate or incomplete personal data. You can update most
                information directly through your account settings.
              </li>
              <li>
                <strong>Right to Erasure:</strong> You can request deletion of
                your personal data, subject to legal retention requirements. Upon
                account deletion, we will remove your data within 90 days,
                except where retention is required by law.
              </li>
              <li>
                <strong>Right to Portability:</strong> You can request a copy of
                your personal data in a commonly used, machine-readable format.
              </li>
              <li>
                <strong>Right to Withdraw Consent:</strong> You may withdraw your
                consent for data processing at any time. This will not affect the
                lawfulness of processing based on consent before its withdrawal.
              </li>
              <li>
                <strong>Right to Grievance Redressal:</strong> You have the right
                to file a complaint with our Grievance Officer or the Data
                Protection Board of India.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:support@ka-26.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                support@ka-26.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              7. Cookies and Tracking
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>7.1.</strong> We use essential cookies and similar
                technologies to enable core functionality such as authentication,
                session management, and security.
              </p>
              <p>
                <strong>7.2.</strong> We use minimal analytics tracking to
                understand how users interact with the Platform and to improve
                our services. We do not use third-party advertising trackers.
              </p>
              <p>
                <strong>7.3.</strong> You can control cookies through your
                browser settings. Disabling essential cookies may affect the
                functionality of the Platform.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              8. Children&apos;s Data
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>8.1.</strong> The Platform is not intended for use by
                individuals under the age of 18 without parental or guardian
                consent. We do not knowingly collect personal data from children
                under 18 without verifiable parental consent.
              </p>
              <p>
                <strong>8.2.</strong> If we become aware that we have collected
                personal data from a child under 18 without parental consent, we
                will take steps to delete such data promptly.
              </p>
              <p>
                <strong>8.3.</strong> Parents or guardians who believe their
                child has provided personal data to us may contact us at{" "}
                <a
                  href="mailto:support@ka-26.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  support@ka-26.com
                </a>{" "}
                to request deletion.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              9. Data Retention
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>9.1.</strong> We retain your personal data only for as
                long as necessary to fulfil the purposes for which it was
                collected, or as required by law:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  <strong>Account data:</strong> Retained for as long as your
                  account is active, plus 90 days after account deletion.
                </li>
                <li>
                  <strong>Order history:</strong> Retained for 3 years from the
                  date of the order for legal and accounting purposes.
                </li>
                <li>
                  <strong>Payment records:</strong> Retained for 8 years as
                  required by Indian tax and financial regulations.
                </li>
                <li>
                  <strong>Usage and log data:</strong> Retained for up to 12
                  months.
                </li>
                <li>
                  <strong>Communication data:</strong> Retained for 1 year after
                  the last interaction.
                </li>
              </ul>
              <p>
                <strong>9.2.</strong> After the retention period, data is
                securely deleted or anonymised.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              10. Third-Party Services
            </h2>
            <p className="mt-3">
              The Platform relies on the following categories of third-party
              services:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong>Cloud hosting:</strong> Google Cloud Platform for data
                storage and server infrastructure.
              </li>
              <li>
                <strong>Payment processing:</strong> Third-party UPI payment
                gateways for online transactions.
              </li>
              <li>
                <strong>Notifications:</strong> Push notification services and
                WhatsApp for order updates and communications.
              </li>
            </ul>
            <p className="mt-3">
              These service providers have their own privacy policies, and we
              encourage you to review them. We only share the minimum data
              necessary for these services to function.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              11. Updates to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. We will notify you of any material changes by posting the
              updated policy on the Platform and, where appropriate, by email or
              in-app notification. We encourage you to review this policy
              periodically.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              12. Grievance Officer
            </h2>
            <p className="mt-3">
              In accordance with the Digital Personal Data Protection Act, 2023,
              we have appointed a Grievance Officer to address your concerns
              regarding data processing:
            </p>
            <ul className="mt-3 space-y-2">
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
                <strong>Response time:</strong> We will acknowledge your
                complaint within 48 hours and resolve it within 30 days.
              </li>
            </ul>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              13. Contact Information
            </h2>
            <p className="mt-3">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Company:</strong> KA-26
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
