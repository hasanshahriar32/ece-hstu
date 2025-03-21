"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle, Search } from "lucide-react"

// Mock database of certificates
const mockCertificates = [
  {
    id: "CERT-ABC123XYZ",
    recipientName: "John Doe",
    certificationName: "Web Development",
    issueDate: "2023-05-15",
    status: "pass",
    organizationName: "Tech Academy",
  },
  {
    id: "CERT-DEF456UVW",
    recipientName: "Jane Smith",
    certificationName: "Data Science",
    issueDate: "2023-06-20",
    status: "pass",
    organizationName: "Data Institute",
  },
  {
    id: "CERT-GHI789RST",
    recipientName: "Bob Johnson",
    certificationName: "Graphic Design",
    issueDate: "2023-07-10",
    status: "fail",
    organizationName: "Design School",
  },
]

// Add any certificates created in the current session
const getSessionCertificates = () => {
  if (typeof window !== "undefined") {
    const sessionCerts = localStorage.getItem("generatedCertificates")
    return sessionCerts ? JSON.parse(sessionCerts) : []
  }
  return []
}

interface VerificationResult {
  found: boolean
  certificate?: {
    id: string
    recipientName: string
    certificationName: string
    issueDate: string
    status: string
    organizationName: string
  }
}

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState("")
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const verifyCertificate = () => {
    if (!certificateId.trim()) return

    setIsVerifying(true)

    // Simulate API call with timeout
    setTimeout(() => {
      const allCertificates = [...mockCertificates, ...getSessionCertificates()]
      const certificate = allCertificates.find((cert) => cert.id === certificateId.trim())

      setVerificationResult({
        found: !!certificate,
        certificate: certificate,
      })

      setIsVerifying(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Certificate Verification</h1>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Verify Certificate</CardTitle>
            <CardDescription>Enter the certificate ID to verify its authenticity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter Certificate ID (e.g., CERT-ABC123XYZ)"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && verifyCertificate()}
              />
              <Button onClick={verifyCertificate} disabled={isVerifying}>
                {isVerifying ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    Verify
                  </span>
                )}
              </Button>
            </div>

            {verificationResult && (
              <div className="mt-6">
                {verificationResult.found ? (
                  <div className="space-y-4">
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <AlertTitle className="text-green-800">Certificate Verified</AlertTitle>
                      <AlertDescription className="text-green-700">
                        This certificate is authentic and has been verified in our system.
                      </AlertDescription>
                    </Alert>

                    <Card>
                      <CardHeader>
                        <CardTitle>Certificate Details</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                          <div className="space-y-1">
                            <dt className="text-sm font-medium text-muted-foreground">Certificate ID</dt>
                            <dd className="font-mono">{verificationResult.certificate?.id}</dd>
                          </div>
                          <div className="space-y-1">
                            <dt className="text-sm font-medium text-muted-foreground">Issue Date</dt>
                            <dd>{new Date(verificationResult.certificate?.issueDate || "").toLocaleDateString()}</dd>
                          </div>
                          <div className="space-y-1">
                            <dt className="text-sm font-medium text-muted-foreground">Recipient</dt>
                            <dd>{verificationResult.certificate?.recipientName}</dd>
                          </div>
                          <div className="space-y-1">
                            <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                            <dd
                              className={`font-medium ${
                                verificationResult.certificate?.status === "pass" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {verificationResult.certificate?.status === "pass" ? "PASSED" : "NOT PASSED"}
                            </dd>
                          </div>
                          <div className="space-y-1 md:col-span-2">
                            <dt className="text-sm font-medium text-muted-foreground">Certification</dt>
                            <dd>{verificationResult.certificate?.certificationName}</dd>
                          </div>
                          <div className="space-y-1 md:col-span-2">
                            <dt className="text-sm font-medium text-muted-foreground">Issuing Organization</dt>
                            <dd>{verificationResult.certificate?.organizationName}</dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Alert variant="destructive">
                    <XCircle className="h-5 w-5" />
                    <AlertTitle>Certificate Not Found</AlertTitle>
                    <AlertDescription>
                      We couldn't verify this certificate. Please check the ID and try again.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}

            <div className="mt-6 text-sm text-muted-foreground">
              <p>For testing, you can use these sample certificate IDs:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>CERT-ABC123XYZ - John Doe's Web Development Certificate</li>
                <li>CERT-DEF456UVW - Jane Smith's Data Science Certificate</li>
                <li>CERT-GHI789RST - Bob Johnson's Graphic Design Certificate (Failed)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

