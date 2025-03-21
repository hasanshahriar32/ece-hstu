"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "@/components/ui/card"
import { CertificatePreview } from "./certificate-preview"
import { useToast } from "@/hooks/use-toast"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

export function CertificateGenerator() {
  const { toast } = useToast()
  const certificateRef = useRef<HTMLDivElement>(null)

  const [certificateData, setCertificateData] = useState({
    recipientName: "",
    certificationName: "",
    issueDate: "",
    status: "pass",
    organizationName: "",
    organizationLogo: "",
    issuerSignature: "",
    issuerName: "",
    issuerTitle: "",
    certificateId: generateRandomId(),
  })

  function generateRandomId() {
    return `CERT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCertificateData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setCertificateData((prev) => ({ ...prev, status: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        setCertificateData((prev) => ({ ...prev, [field]: event.target?.result as string }))
      }
    }
    reader.readAsDataURL(file)
  }

  // Save certificate to "database" (localStorage)
  const saveCertificate = () => {
    if (typeof window !== "undefined") {
      const certificateToSave = {
        id: certificateData.certificateId,
        recipientName: certificateData.recipientName || "Unnamed Recipient",
        certificationName: certificateData.certificationName || "Unnamed Certification",
        issueDate: certificateData.issueDate || new Date().toISOString().split("T")[0],
        status: certificateData.status,
        organizationName: certificateData.organizationName || "Unnamed Organization",
      }

      const existingCerts = localStorage.getItem("generatedCertificates")
      const certs = existingCerts ? JSON.parse(existingCerts) : []

      // Check if certificate with this ID already exists
      const updatedCerts = certs.filter((cert: any) => cert.id !== certificateData.certificateId)
      updatedCerts.push(certificateToSave)

      localStorage.setItem("generatedCertificates", JSON.stringify(updatedCerts))

      toast({
        title: "Certificate Saved",
        description: `Certificate ID: ${certificateData.certificateId}`,
      })
    }
  }

  const downloadAsPNG = async () => {
    if (!certificateRef.current) return

    try {
      saveCertificate()

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = `${certificateData.recipientName.replace(/\s+/g, "_")}_certificate.png`
      link.click()

      toast({
        title: "Success!",
        description: "Certificate downloaded as PNG",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download certificate",
        variant: "destructive",
      })
    }
  }

  const downloadAsPDF = async () => {
    if (!certificateRef.current) return

    try {
      saveCertificate()

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
      })

      const imgWidth = 280
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight)
      pdf.save(`${certificateData.recipientName.replace(/\s+/g, "_")}_certificate.pdf`)

      toast({
        title: "Success!",
        description: "Certificate downloaded as PDF",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download certificate",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setCertificateData({
      recipientName: "",
      certificationName: "",
      issueDate: "",
      status: "pass",
      organizationName: "",
      organizationLogo: "",
      issuerSignature: "",
      issuerName: "",
      issuerTitle: "",
      certificateId: generateRandomId(),
    })

    toast({
      description: "Form has been reset",
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Certificate Details</h2>

        <div className="space-y-4">
          <div>
            <Label htmlFor="certificateId">Certificate ID</Label>
            <Input id="certificateId" value={certificateData.certificateId} readOnly className="bg-gray-50 font-mono" />
            <p className="text-xs text-muted-foreground mt-1">This ID can be used to verify the certificate later</p>
          </div>

          <div>
            <Label htmlFor="recipientName">Recipient Name</Label>
            <Input
              id="recipientName"
              name="recipientName"
              value={certificateData.recipientName}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label htmlFor="certificationName">Certification Name</Label>
            <Input
              id="certificationName"
              name="certificationName"
              value={certificateData.certificationName}
              onChange={handleInputChange}
              placeholder="Web Development Certification"
            />
          </div>

          <div>
            <Label htmlFor="issueDate">Issue Date</Label>
            <Input
              id="issueDate"
              name="issueDate"
              type="date"
              value={certificateData.issueDate}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label>Status</Label>
            <RadioGroup
              value={certificateData.status}
              onValueChange={handleRadioChange}
              className="flex space-x-4 mt-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pass" id="pass" />
                <Label htmlFor="pass">Pass</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fail" id="fail" />
                <Label htmlFor="fail">Fail</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="organizationName">Organization Name</Label>
            <Input
              id="organizationName"
              name="organizationName"
              value={certificateData.organizationName}
              onChange={handleInputChange}
              placeholder="Acme Learning"
            />
          </div>

          <div>
            <Label htmlFor="organizationLogo">Organization Logo</Label>
            <Input
              id="organizationLogo"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "organizationLogo")}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="issuerName">Issuer Name</Label>
            <Input
              id="issuerName"
              name="issuerName"
              value={certificateData.issuerName}
              onChange={handleInputChange}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <Label htmlFor="issuerTitle">Issuer Title</Label>
            <Input
              id="issuerTitle"
              name="issuerTitle"
              value={certificateData.issuerTitle}
              onChange={handleInputChange}
              placeholder="Director of Education"
            />
          </div>

          <div>
            <Label htmlFor="issuerSignature">Issuer Signature</Label>
            <Input
              id="issuerSignature"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "issuerSignature")}
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button onClick={downloadAsPNG}>Download as PNG</Button>
          <Button onClick={downloadAsPDF} variant="outline">
            Download as PDF
          </Button>
          <Button onClick={saveCertificate} variant="secondary">
            Save Certificate
          </Button>
          <Button onClick={resetForm} variant="ghost">
            Reset Form
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold">Certificate Preview</h2>
        <Card className="p-4 h-full flex items-center justify-center bg-gray-50 overflow-auto">
          <div className="w-full max-w-3xl">
            <CertificatePreview ref={certificateRef} data={certificateData} />
          </div>
        </Card>
      </div>
    </div>
  )
}

