import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold">Terms & Conditions</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Service Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>By engaging EliteFixers, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information for service delivery</li>
                  <li>Communicate requests clearly and in a timely manner</li>
                  <li>Respect our team members and service partners</li>
                  <li>Pay agreed fees promptly upon service completion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Payment arrangements:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service quotes provided before work begins</li>
                  <li>Payment due upon successful completion</li>
                  <li>Additional costs for scope changes require prior approval</li>
                  <li>Accepted payment methods: Mobile Money, Bank Transfer, Cash</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>EliteFixers commits to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional, courteous service at all times</li>
                  <li>Timely communication and updates</li>
                  <li>Quality assurance for all completed work</li>
                  <li>Confidential handling of all client matters</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Service limitations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We coordinate services but do not guarantee third-party performance</li>
                  <li>Liability limited to fees paid for specific services</li>
                  <li>Force majeure events beyond our reasonable control excluded</li>
                  <li>Client responsible for providing accurate requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Refund conditions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refund if service cannot be delivered as agreed</li>
                  <li>Partial refund for services partially completed</li>
                  <li>No refund for completed services meeting specifications</li>
                  <li>Dispute resolution through direct communication preferred</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact for Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Questions about these terms:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: elitefixers.services@gmail.com</li>
                  <li>Phone: +256 771 210855</li>
                  <li>WhatsApp: +256 754 774150</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;