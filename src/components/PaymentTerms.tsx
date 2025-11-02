"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PaymentTerms = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-10 mx-auto bg-[#d17c43] hover:bg-[#be6123] block "
        >
          View Payment Terms
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto p-8">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-bold text-center mb-6">
            Payment <span className="text-gold">Terms</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-muted-foreground">
          <p>
            To ensure smooth collaboration and effective campaign execution, we
            maintain the following payment structure for all projects:
          </p>

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              1. Upfront Payment Required
            </h3>
            <p>
              All service fees and ad budgets are paid{" "}
              <strong>before project commencement</strong>. This allows us to
              immediately begin strategy, research, and creative setup, and
              ensures ad budgets are properly allocated to platforms like
              Facebook, Instagram, or Google.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              2. Ad Spend vs. Service Fee
            </h3>
            <p>
              The <strong>ad spend</strong> is your direct advertising budget,
              paid to the advertising platforms to reach your target audience.
              The <strong>service fee</strong> covers our time, creative
              production, targeting strategy, campaign management, and
              performance reporting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              3. Non-Refundable Service Fee
            </h3>
            <p>
              Once campaign setup or design work begins, the service fee becomes{" "}
              <strong>non-refundable</strong>, as it covers completed strategic
              and creative work. However, if you’re unsatisfied with
              performance, we’ll review your campaign and provide optimization
              or adjustments to ensure you get maximum value.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              4. Transparency & Reporting
            </h3>
            <p>
              You’ll receive clear performance updates and reports showing
              exactly how your budget is being spent and what results you’re
              getting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              5. Payment Methods
            </h3>
            <p>
              Payments can be made via{" "}
              <strong>bank transfer, M-Pesa, or PayPal</strong>, depending on
              your preference. Receipts or invoices are issued for every
              transaction.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentTerms;
