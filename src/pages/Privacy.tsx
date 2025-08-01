import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>EliteFixers collects information to provide premium concierge services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Service request details and preferences</li>
                  <li>Communication records for service delivery</li>
                  <li>Payment information for completed services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Your information is used exclusively for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing requested concierge services</li>
                  <li>Communicating service updates and confirmations</li>
                  <li>Processing payments for completed work</li>
                  <li>Improving our service quality and offerings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>EliteFixers maintains strict confidentiality:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All client information is treated as strictly confidential</li>
                  <li>We do not share, sell, or disclose personal information to third parties</li>
                  <li>Secure systems protect your data from unauthorized access</li>
                  <li>Staff sign confidentiality agreements and undergo background checks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We retain information only as long as necessary:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Active service period and reasonable time thereafter</li>
                  <li>Legal and regulatory compliance requirements</li>
                  <li>You may request data deletion at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>For privacy-related questions or requests:</p>
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

export default Privacy;