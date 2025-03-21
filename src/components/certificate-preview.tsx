"use client"

import { forwardRef } from "react"
import { Award, CheckCircle, XCircle } from "lucide-react"

interface CertificateData {
  recipientName: string
  certificationName: string
  issueDate: string
  status: string
  organizationName: string
  organizationLogo: string
  issuerSignature: string
  issuerName: string
  issuerTitle: string
  certificateId: string
}

interface CertificatePreviewProps {
  data: CertificateData
}

export const CertificatePreview = forwardRef<HTMLDivElement, CertificatePreviewProps>(({ data }, ref) => {
  const formattedDate = data.issueDate
    ? new Date(data.issueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[1.414/1] bg-white border-8 border-double border-gray-300 p-6 font-serif overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Border design */}
      <div className="absolute inset-0 border-[12px] border-double border-gray-200 pointer-events-none" />

      {/* Certificate content */}
      <div className="relative h-full flex flex-col items-center justify-between text-center max-h-full overflow-hidden">
        {/* Header with logo */}
        <div className="w-full flex justify-between items-center mb-2">
          {data.organizationLogo ? (
            <img
              src={data.organizationLogo || "/placeholder.svg"}
              alt="Organization Logo"
              className="h-12 object-contain"
              crossOrigin="anonymous"
            />
          ) : (
            <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
              <Award className="h-8 w-8 text-gray-400" />
            </div>
          )}

          <div className="text-right">
            <div className="text-xs text-gray-500">Certificate ID</div>
            <div className="text-xs font-mono">{data.certificateId}</div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wider">
            Certificate of {data.status === "pass" ? "Completion" : "Participation"}
          </h1>
        </div>

        {/* Main content */}
        <div className="flex-grow flex flex-col items-center justify-center my-2 overflow-hidden">
          <p className="text-base mb-1">This is to certify that</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-1 border-b-2 border-primary px-6 py-1 truncate max-w-full">
            {data.recipientName || "Recipient Name"}
          </h2>

          <p className="text-base my-2">
            has {data.status === "pass" ? "successfully completed" : "participated in"} the
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-2 px-4 truncate max-w-full">
            {data.certificationName || "Certification Program"}
          </h3>

          <div className="flex items-center justify-center mb-2">
            {data.status === "pass" ? (
              <div className="flex items-center text-green-600">
                <CheckCircle className="mr-1 h-5 w-5" />
                <span className="font-semibold">PASSED</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <XCircle className="mr-1 h-5 w-5" />
                <span className="font-semibold">NOT PASSED</span>
              </div>
            )}
          </div>

          {data.organizationName && (
            <p className="text-base">
              Issued by <span className="font-semibold">{data.organizationName}</span>
            </p>
          )}

          {formattedDate && <p className="text-xs text-gray-600 mt-1">Issued on {formattedDate}</p>}
        </div>

        {/* Signature */}
        <div className="w-full flex justify-center items-end mt-2">
          <div className="flex flex-col items-center border-t border-gray-300 pt-1 px-6">
            {data.issuerSignature ? (
              <img
                src={data.issuerSignature || "/placeholder.svg"}
                alt="Signature"
                className="h-10 object-contain mb-1"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="h-10 w-28 border-b border-gray-400 mb-1"></div>
            )}
            <p className="font-semibold text-sm">{data.issuerName || "Issuer Name"}</p>
            <p className="text-xs text-gray-600">{data.issuerTitle || "Issuer Title"}</p>
          </div>
        </div>
      </div>
    </div>
  )
})

CertificatePreview.displayName = "CertificatePreview"

