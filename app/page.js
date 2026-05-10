"use client"

import { useState } from "react"

export default function Page() {
  const [size, setSize] = useState(0)

  const providers = [
    { name: "Gmail", limit: 25 },
    { name: "Outlook", limit: 20 },
    { name: "Yahoo", limit: 25 },
    { name: "iCloud", limit: 20 }
  ]

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const mb = (file.size / (1024 * 1024)).toFixed(2)
      setSize(Number(mb))
    }
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        background: "#f4f6fb",
        minHeight: "100vh"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          borderBottom: "1px solid #e2e8f0",
          background: "#ffffff",
          padding: "0.8rem 1.5rem",
          fontWeight: 600
        }}
      >
        Email Attachment Size Checker
      </div>

      {/* TOOL */}
      <div style={{ marginTop: "2rem" }}>
        <h1>Email Attachment Size Checker</h1>
        <p>
          Check whether your file can be sent as an email attachment based on
          common provider limits.
        </p>

        <div
          style={{
            background: "#ffffff",
            padding: "1.5rem",
            borderRadius: "10px",
            marginTop: "1.5rem"
          }}
        >
          <input
            type="number"
            placeholder="File size (MB)"
            value={size || ""}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <input
            type="file"
            onChange={handleFileUpload}
            style={{ marginBottom: "1rem" }}
          />

          {providers.map((p) => (
            <div key={p.name} style={{ marginBottom: "5px" }}>
              {p.name}:{" "}
              {size <= p.limit
                ? "✅ Can be sent"
                : `❌ Too large (limit ${p.limit} MB)`}
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          marginTop: "2rem",
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px"
        }}
      >
        <h2>Why Email Attachment Limits Exist</h2>
        <p>
          Email providers limit attachment sizes to ensure reliable delivery and
          prevent server overload. Files larger than the limit may fail to send
          or be converted into cloud links.
        </p>

        <h2 style={{ marginTop: "1rem" }}>How to Send Large Files</h2>
        <ul>
          <li>Upload files to cloud storage and share a download link</li>
          <li>Compress files into ZIP archives</li>
          <li>Split large files into smaller parts</li>
        </ul>

        <h2 style={{ marginTop: "1rem" }}>About This Tool</h2>
        <p>
          This tool helps you quickly check whether a file can be sent as an email
          attachment before you hit send.
        </p>
      </div>

      {/* RELATED TOOLS */}
      <div
        style={{
          marginTop: "2rem",
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px"
        }}
      >
        <div
  style={{
    background: "#ffffff",
    padding: "1.5rem",
    borderRadius: "10px",
    marginBottom: "1.5rem"
  }}
>
  <h2>Related Tools</h2>
  <ul>
    <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Credit Card Debt Payoff Calculator
    </li>
    <li onClick={() => window.location.href = "https://debtreducingcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Debt Reducing Calculator
    </li>
    <li onClick={() => window.location.href = "https://sidehustletaxestimator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Side Hustle Tax Estimator
    </li>
    <li onClick={() => window.location.href = "https://highyieldsavingscalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      High Yield Savings Calculator
    </li>
    <li onClick={() => window.location.href = "https://retirementsavingsgap.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Retirement Savings Gap
    </li>
    <li onClick={() => window.location.href = "https://lifeinsurancecoveragecalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Life Insurance Coverage Calculator
    </li>
    <li onClick={() => window.location.href = "https://onlinecourseroi.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Online Course ROI Calculator
    </li>
    <li onClick={() => window.location.href = "https://mysubscriptioncost.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Subscription Cost Calculator
    </li>
    <li onClick={() => window.location.href = "https://emailattachmentsize.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Email Attachment Size Checker
    </li>
    <li onClick={() => window.location.href = "https://gpacalculator.site"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      GPA Calculator
    </li>
    <li onClick={() => window.location.href = "https://youtubetitlechecker.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      YouTube Title Checker
    </li>
    <li onClick={() => window.location.href = "https://strongpasswordbuilder.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Strong Password Builder
    </li>
    <li onClick={() => window.location.href = "https://coolusernamegenerator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
      Cool Username Generator
    </li>
  </ul>
</div>
      </div>

      {/* DISCLAIMER */}
      <div style={{ marginTop: "1rem", fontSize: "13px", color: "#666" }}>
        This tool provides estimates for informational purposes only.
      </div>

      {/* PRIVACY */}
      <div style={{ marginTop: "1.5rem", fontSize: "13px", color: "#555" }}>
        This site may use cookies and analytics. By using this site,
        you agree to our Privacy Policy and Terms of Service.
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e2e8f0",
          fontSize: "14px"
        }}
      >
        <span
          onClick={() => window.location.href = "/privacy"}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Privacy Policy
        </span>
        {" | "}
        <span
          onClick={() => window.location.href = "/terms"}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Terms of Service
        </span>
      </div>
    </main>
  )
}
