import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and Cancellation Policy for orders placed through the KA26 platform.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Refund &amp; Cancellation Policy
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
              1. Overview
            </h2>
            <p className="mt-3">
              This Refund and Cancellation Policy outlines the terms under which
              you may cancel orders and request refunds for purchases made
              through the KA26 platform (ka26.shop). KA26 acts as an
              intermediary connecting consumers with sellers, restaurants,
              pharmacies, and delivery partners. Refund eligibility depends on
              the type of order and the circumstances.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Order Cancellation
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>2.1. Before Seller Acceptance:</strong> If you cancel an
                order before the seller has accepted it, you are entitled to a
                full refund. For online payments, the refund will be processed
                to the original payment method. For COD orders, no charge is
                incurred.
              </p>
              <p>
                <strong>2.2. After Seller Acceptance:</strong> Once a seller has
                accepted your order and begun preparation or packing, cancellation
                may not be possible or may result in a partial refund, depending
                on the stage of preparation. The seller has discretion in
                determining the refund amount based on work already completed.
              </p>
              <p>
                <strong>2.3. After Dispatch:</strong> Once an order has been
                dispatched for delivery, it generally cannot be cancelled. If
                you refuse delivery of a non-perishable item, a refund may be
                issued after deducting delivery charges.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Refunds for Food Orders (Restaurants)
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>3.1.</strong> If you receive a food order with quality
                issues (e.g., spoiled, undercooked, or significantly different
                from the description), you may report the issue within{" "}
                <strong>1 hour</strong> of delivery to be eligible for a refund
                or replacement.
              </p>
              <p>
                <strong>3.2.</strong> Missing items from your order entitle you
                to a refund for the specific missing items. Report missing items
                within <strong>1 hour</strong> of delivery.
              </p>
              <p>
                <strong>3.3.</strong> To file a complaint, you must provide clear
                photographs of the issue along with a description of the
                problem.
              </p>
              <p>
                <strong>3.4.</strong> KA26 will review the complaint in
                consultation with the restaurant and issue an appropriate
                refund, replacement, or credit within 3 business days of the
                report.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Refunds for Store Orders
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>4.1.</strong> If you receive a damaged, defective, or
                wrong item from a store order, you may report the issue within{" "}
                <strong>24 hours</strong> of delivery to be eligible for a
                refund or replacement.
              </p>
              <p>
                <strong>4.2.</strong> You must provide clear photographs showing
                the damage or discrepancy, along with a description of the
                issue.
              </p>
              <p>
                <strong>4.3.</strong> KA26 will coordinate with the seller to
                determine the appropriate resolution, which may include a full
                refund, partial refund, replacement, or store credit.
              </p>
              <p>
                <strong>4.4.</strong> Items must be in their original packaging
                (where applicable) and unused for a return to be accepted.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              5. Pharmacy Orders
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>5.1.</strong> In accordance with the Drugs and Cosmetics
                Act, 1940, and related regulations,{" "}
                <strong>
                  medicines and pharmaceutical products cannot be returned
                </strong>{" "}
                once dispensed.
              </p>
              <p>
                <strong>5.2.</strong> However, if you receive a damaged, expired,
                or incorrect pharmaceutical product, you may report the issue
                within <strong>24 hours</strong> of delivery with photographs as
                evidence. Eligible cases will receive a replacement at no
                additional cost.
              </p>
              <p>
                <strong>5.3.</strong> Opened or partially consumed medicines are
                not eligible for replacement or refund under any circumstances.
              </p>
              <p>
                <strong>5.4.</strong> The pharmacy reserves the right to verify
                reported issues before issuing a replacement.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              6. Refund Processing Time
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>6.1. Online payments (UPI):</strong> Approved refunds
                will be processed within <strong>3-7 business days</strong> to
                the original payment method. The actual credit to your account
                may take additional time depending on your bank or payment
                provider.
              </p>
              <p>
                <strong>6.2. Cash on Delivery (COD):</strong> For COD orders
                that have not yet been delivered, no charge is incurred upon
                cancellation. For COD orders where payment has been collected,
                refunds will be processed to your preferred payment method
                within 3-7 business days.
              </p>
              <p>
                <strong>6.3.</strong> KA26 will notify you via the app and/or
                email once a refund has been initiated.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              7. Delivery Issues
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                <strong>7.1.</strong> If your order is not delivered at all, you
                are entitled to a <strong>full refund</strong> regardless of the
                order type.
              </p>
              <p>
                <strong>7.2.</strong> If delivery is significantly delayed beyond
                the estimated time, you may request a cancellation and full
                refund, provided the order has not already been delivered.
              </p>
              <p>
                <strong>7.3.</strong> If an order is delivered to the wrong
                address due to a Platform or delivery partner error, KA26 will
                arrange for re-delivery or issue a full refund.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              8. How to Request a Refund
            </h2>
            <p className="mt-3">You can request a refund through:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong>The KA26 app:</strong> Navigate to your order history,
                select the order in question, and tap &quot;Report Issue&quot; or
                &quot;Request Refund&quot;.
              </li>
              <li>
                <strong>Email:</strong> Send a detailed description of the issue
                along with your order ID and photographs to{" "}
                <a
                  href="mailto:support@ka-26.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  support@ka-26.com
                </a>
                .
              </li>
              <li>
                <strong>WhatsApp:</strong> Contact our support team at{" "}
                <a
                  href="https://wa.me/918197363421"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  +91 81973 63421
                </a>{" "}
                with your order details and issue description.
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              9. Non-Refundable Items
            </h2>
            <p className="mt-3">
              The following items and circumstances are not eligible for refunds:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Perishable food items that have been consumed or partially
                consumed.
              </li>
              <li>
                Medicines and pharmaceutical products that have been opened or
                partially consumed.
              </li>
              <li>
                Orders cancelled after the seller has completed preparation or
                packing, where the items cannot be resold.
              </li>
              <li>
                Issues reported after the applicable reporting window (1 hour
                for food, 24 hours for store and pharmacy orders).
              </li>
              <li>
                Complaints without adequate supporting evidence (photographs,
                descriptions).
              </li>
              <li>
                Damage caused by the consumer after delivery.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              10. Dispute Resolution
            </h2>
            <p className="mt-3">
              If you are not satisfied with the resolution of a refund request,
              you may escalate the issue by contacting our support team. KA26
              will make reasonable efforts to resolve disputes fairly. All
              disputes shall be subject to the exclusive jurisdiction of the
              courts in Gadag, Karnataka, India.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              11. Contact Information
            </h2>
            <p className="mt-3">
              For any questions regarding refunds and cancellations, please
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
