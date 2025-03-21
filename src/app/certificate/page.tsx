import { CertificateGenerator } from "@/components/certificate-generator"

export default function CertificatePage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Certificate Generator</h1>
      <CertificateGenerator />
    </main>
  )
}

