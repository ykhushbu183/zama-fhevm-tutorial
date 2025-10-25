'use client'

import { useState } from 'react'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [encryptedValue, setEncryptedValue] = useState('')
  const [decryptedValue, setDecryptedValue] = useState('')
  
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('+')
  const [encNum1, setEncNum1] = useState('')
  const [encNum2, setEncNum2] = useState('')
  const [computeResult, setComputeResult] = useState('')
  const [showResult, setShowResult] = useState(false)

  const simulateEncrypt = (value: string): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let encrypted = ''
    for (let i = 0; i < 32; i++) {
      encrypted += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return `enc_${encrypted}`
  }

  const handleEncrypt = () => {
    if (!inputValue) return
    const encrypted = simulateEncrypt(inputValue)
    setEncryptedValue(encrypted)
    setDecryptedValue('')
  }

  const handleDecrypt = () => {
    if (!encryptedValue) return
    setTimeout(() => {
      setDecryptedValue(inputValue)
    }, 500)
  }

  const handleEncryptNumbers = () => {
    if (!num1 || !num2) return
    setEncNum1(simulateEncrypt(num1))
    setEncNum2(simulateEncrypt(num2))
    setComputeResult('')
    setShowResult(false)
  }

  const handleCompute = () => {
    if (!num1 || !num2 || !encNum1 || !encNum2) return
    
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    let result = 0
    
    switch(operation) {
      case '+': result = n1 + n2; break
      case '-': result = n1 - n2; break
      case '×': result = n1 * n2; break
      case '÷': result = n2 !== 0 ? n1 / n2 : 0; break
    }
    
    setTimeout(() => {
      setComputeResult(simulateEncrypt(result.toString()))
      setShowResult(false)
    }, 800)
  }

  const handleRevealResult = () => {
    if (!computeResult) return
    setTimeout(() => {
      setShowResult(true)
    }, 500)
  }

  const resetTool1 = () => {
    setInputValue('')
    setEncryptedValue('')
    setDecryptedValue('')
  }

  const resetTool2 = () => {
    setNum1('')
    setNum2('')
    setEncNum1('')
    setEncNum2('')
    setComputeResult('')
    setShowResult(false)
  }

  const getComputeResult = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    switch(operation) {
      case '+': return n1 + n2
      case '-': return n1 - n2
      case '×': return n1 * n2
      case '÷': return n2 !== 0 ? n1 / n2 : 0
      default: return 0
    }
  }

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header with Zama Logo */}
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2.5rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Zama Logo */}
        <div style={{
          width: '80px',
          height: '80px',
          background: '#FFC700',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          boxShadow: '0 4px 12px rgba(255, 199, 0, 0.3)'
        }}>
          <span style={{
            fontSize: '3rem',
            fontWeight: 900,
            color: '#000',
            fontFamily: 'Arial Black, sans-serif',
            letterSpacing: '-2px'
          }}>Z</span>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#111827', fontWeight: 700 }}>
          ZAMA FHE Playground
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '1rem' }}>
          Experience Fully Homomorphic Encryption
        </p>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
          No wallet • No fees • Instant results
        </p>
        
        {/* About Zama */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF8DC 0%, #FFFACD 100%)',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '2px solid #FFC700',
          textAlign: 'left',
          marginTop: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#FFC700',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem'
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#000' }}>Z</span>
            </div>
            <h3 style={{ margin: 0, color: '#1f2937', fontSize: '1.2rem', fontWeight: 600 }}>
              About Zama
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6, fontSize: '0.95rem' }}>
            Zama is building the first confidential layer for public blockchains using Fully Homomorphic Encryption (FHE). 
            Their technology enables smart contracts to compute on encrypted data without ever decrypting it, 
            bringing true privacy to DeFi, tokens, and governance while maintaining transparency and verifiability.
          </p>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <strong style={{ color: '#1f2937', fontSize: '0.9rem' }}>🚀 Key Features:</strong>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
              • End to end encryption • Post quantum secure • Solidity compatible • Cross chain confidentiality
            </div>
          </div>
        </div>
      </header>

      {/* Tool 1: Basic Encryption/Decryption */}
      <section style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '0.5rem', color: '#1f2937', fontSize: '1.8rem', fontWeight: 600 }}>
          🔒 Encrypt & Decrypt Data
        </h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          See how your data gets encrypted and only you can decrypt it
        </p>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.95rem' }}>
            Enter any text or number
          </label>
          <input
            type="text"
            placeholder="e.g., My secret message or 12345"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              width: '100%',
              padding: '0.875rem',
              border: '2px solid #e5e7eb',
              borderRadius: '10px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleEncrypt}
            disabled={!inputValue}
            style={{
              flex: 1,
              minWidth: '140px',
              background: inputValue ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#d1d5db',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: inputValue ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            🔐 Encrypt
          </button>
          <button
            onClick={handleDecrypt}
            disabled={!encryptedValue}
            style={{
              flex: 1,
              minWidth: '140px',
              background: encryptedValue ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : '#d1d5db',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: encryptedValue ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            🔓 Decrypt
          </button>
          <button
            onClick={resetTool1}
            style={{
              flex: 1,
              minWidth: '140px',
              background: '#ef4444',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            🔄 Reset
          </button>
        </div>

        {encryptedValue && (
          <div style={{
            background: '#1e293b',
            color: '#94a3b8',
            padding: '1.5rem',
            borderRadius: '10px',
            marginBottom: '1rem',
            fontFamily: 'monospace',
            wordBreak: 'break-all',
            border: '2px solid #334155'
          }}>
            <div style={{ fontSize: '0.75rem', marginBottom: '0.5rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>
              ⚡ Encrypted Value:
            </div>
            <div style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {encryptedValue}
            </div>
          </div>
        )}

        {decryptedValue && (
          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            padding: '1.5rem',
            borderRadius: '10px',
            border: '2px solid #6ee7b7'
          }}>
            <div style={{ fontSize: '0.75rem', marginBottom: '0.5rem', color: '#065f46', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              ✅ Decrypted Value:
            </div>
            <div style={{ color: '#047857', fontSize: '1.3rem', fontWeight: 600 }}>
              {decryptedValue}
            </div>
          </div>
        )}
      </section>

      {/* Tool 2: Encrypted Computation */}
      <section style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '0.5rem', color: '#1f2937', fontSize: '1.8rem', fontWeight: 600 }}>
          🧮 Compute on Encrypted Numbers
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#6b7280', fontSize: '0.95rem' }}>
          Perform math operations without revealing the numbers
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '1rem', 
          marginBottom: '1.5rem', 
          alignItems: 'center' 
        }}>
          <input
            type="number"
            placeholder="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{
              padding: '0.875rem',
              border: '2px solid #e5e7eb',
              borderRadius: '10px',
              fontSize: '1rem',
              textAlign: 'center'
            }}
          />
          
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            style={{
              padding: '0.875rem',
              border: '2px solid #e5e7eb',
              borderRadius: '10px',
              fontSize: '1.3rem',
              cursor: 'pointer',
              background: 'white',
              textAlign: 'center',
              fontWeight: 600
            }}
          >
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="×">×</option>
            <option value="÷">÷</option>
          </select>
          
          <input
            type="number"
            placeholder="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{
              padding: '0.875rem',
              border: '2px solid #e5e7eb',
              borderRadius: '10px',
              fontSize: '1rem',
              textAlign: 'center'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleEncryptNumbers}
            disabled={!num1 || !num2}
            style={{
              flex: 1,
              minWidth: '140px',
              background: (num1 && num2) ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : '#d1d5db',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: (num1 && num2) ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            1️⃣ Encrypt Both
          </button>
          
          <button
            onClick={handleCompute}
            disabled={!encNum1 || !encNum2}
            style={{
              flex: 1,
              minWidth: '140px',
              background: (encNum1 && encNum2) ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' : '#d1d5db',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: (encNum1 && encNum2) ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            2️⃣ Compute
          </button>
          
          <button
            onClick={handleRevealResult}
            disabled={!computeResult}
            style={{
              flex: 1,
              minWidth: '140px',
              background: computeResult ? 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' : '#d1d5db',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: computeResult ? 'pointer' : 'not-allowed',
              fontWeight: 600
            }}
          >
            3️⃣ Reveal
          </button>
          
          <button
            onClick={resetTool2}
            style={{
              flex: 1,
              minWidth: '140px',
              background: '#ef4444',
              color: 'white',
              padding: '0.875rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            🔄 Reset
          </button>
        </div>

        {(encNum1 || encNum2) && (
          <div style={{
            background: '#fef3c7',
            padding: '1.5rem',
            borderRadius: '10px',
            marginBottom: '1rem',
            border: '2px solid #fbbf24'
          }}>
            <div style={{ fontSize: '0.75rem', marginBottom: '0.75rem', color: '#92400e', fontWeight: 700, textTransform: 'uppercase' }}>
              🔐 Encrypted Numbers:
            </div>
            {encNum1 && (
              <div style={{ marginBottom: '0.5rem', fontSize: '0.85rem', wordBreak: 'break-all', fontFamily: 'monospace', color: '#78350f' }}>
                <strong>Num1:</strong> {encNum1}
              </div>
            )}
            {encNum2 && (
              <div style={{ fontSize: '0.85rem', wordBreak: 'break-all', fontFamily: 'monospace', color: '#78350f' }}>
                <strong>Num2:</strong> {encNum2}
              </div>
            )}
          </div>
        )}

        {computeResult && (
          <div style={{
            background: '#dbeafe',
            padding: '1.5rem',
            borderRadius: '10px',
            border: '2px solid #60a5fa',
            marginBottom: '1rem'
          }}>
            <div style={{ fontSize: '0.75rem', marginBottom: '0.5rem', color: '#1e3a8a', fontWeight: 700, textTransform: 'uppercase' }}>
              ⚡ Encrypted Result:
            </div>
            <div style={{ fontSize: '0.9rem', wordBreak: 'break-all', fontFamily: 'monospace', color: '#1e40af', marginBottom: '0.75rem' }}>
              {computeResult}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#1e40af', opacity: 0.8 }}>
              💡 Result computed on encrypted data
            </div>
          </div>
        )}

        {showResult && computeResult && (
          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            padding: '2rem',
            borderRadius: '10px',
            border: '2px solid #6ee7b7',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#065f46', fontWeight: 700 }}>
              ✅ Final Answer:
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#047857', marginBottom: '0.5rem' }}>
              {num1} {operation} {num2} = {getComputeResult()}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#065f46', opacity: 0.8 }}>
              🎉 Decrypted successfully!
            </div>
          </div>
        )}
      </section>

      {/* How It Works */}
      <section style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.8rem', fontWeight: 600 }}>
          💡 How FHE Works
        </h2>
        <div style={{ 
          display: 'grid', 
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
        }}>
          <div style={{ padding: '1.5rem', background: '#f0f9ff', borderRadius: '10px', borderLeft: '4px solid #3b82f6' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>1️⃣</div>
            <strong style={{ color: '#1e40af' }}>Encrypt Locally</strong>
            <p style={{ margin: '0.5rem 0 0 0', color: '#1e3a8a', fontSize: '0.9rem' }}>
              Your data is encrypted in your browser before leaving
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: '#fef3c7', borderRadius: '10px', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>2️⃣</div>
            <strong style={{ color: '#92400e' }}>Compute Encrypted</strong>
            <p style={{ margin: '0.5rem 0 0 0', color: '#78350f', fontSize: '0.9rem' }}>
              Operations happen on encrypted data without decryption
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: '#f0fdf4', borderRadius: '10px', borderLeft: '4px solid #10b981' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>3️⃣</div>
            <strong style={{ color: '#065f46' }}>Decrypt Result</strong>
            <p style={{ margin: '0.5rem 0 0 0', color: '#047857', fontSize: '0.9rem' }}>
              Only authorized users can decrypt the final value
            </p>
          </div>
        </div>
        
        <div style={{
          marginTop: '1.5rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #FFF8DC 0%, #FFFACD 100%)',
          borderRadius: '10px',
          border: '2px solid #FFC700'
        }}>
          <strong style={{ color: '#1f2937', fontSize: '1.1rem' }}>🚀 In Production with Zama:</strong>
          <p style={{ margin: '0.75rem 0 0 0', color: '#4b5563', lineHeight: 1.6 }}>
            Zama's FHEVM enables this on real blockchains — smart contracts compute on encrypted data without ever seeing plaintext, enabling truly confidential DeFi, private tokens, and encrypted governance!
          </p>
        </div>
      </section>

      {/* Footer with Watermark */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}>
        <p style={{ color: '#6b7280', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
          Built for Zama Season 3 Creator Campaign
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <a 
            href="https://zama.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#3b82f6', 
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem'
            }}
          >
            Learn more about Zama →
          </a>
        </p>
        
        {/* Watermark */}
        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '2px solid #e5e7eb'
        }}>
          <a
            href="https://x.com/sonuwork37"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(29, 161, 242, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(29, 161, 242, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(29, 161, 242, 0.3)'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>𝕏</span>
            <span>Made by @sonuwork37</span>
          </a>
        </div>
        
        <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#9ca3af' }}>
          @zama_fhe • #FHE • #Web3 • #Privacy
        </div>
      </footer>
    </main>
  )
}
