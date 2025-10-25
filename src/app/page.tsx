export default function Home() {
  return (
    <main>
      <div className="container">
        <header className="header">
          <h1>FHEVM Confidential Token Guide</h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
            Learn how to build encrypted smart contracts with Zama
          </p>
        </header>

        <section className="card">
          <h2>What is FHEVM?</h2>
          <p>
            FHEVM (Fully Homomorphic Encryption Virtual Machine) enables 
            smart contracts to compute on encrypted data without ever 
            decrypting it.
          </p>
          <p>
            This means you can build tokens where balances and transfers 
            remain completely private while staying on public blockchains.
          </p>
        </section>

        <section className="card">
          <h2>The Contract</h2>
          <div className="code-block">
            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "fhevm/lib/FHE.sol";

contract ConfidentialToken {
    mapping(address => euint64) private balances;
    
    function transfer(
        address to, 
        einput encryptedAmount, 
        bytes calldata proof
    ) public {
        euint64 amount = FHE.asEuint64(encryptedAmount, proof);
        euint64 senderBalance = balances[msg.sender];
        
        ebool hasEnough = FHE.gte(senderBalance, amount);
        euint64 transferAmount = FHE.select(
            hasEnough, 
            amount, 
            FHE.asEuint64(0)
        );
        
        balances[msg.sender] = FHE.sub(senderBalance, transferAmount);
        balances[to] = FHE.add(balances[to], transferAmount);
    }
}`}</pre>
          </div>
        </section>

        <section className="card">
          <h2>Key Features</h2>
          <div className="grid">
            <div className="feature-card">
              <h3>End to End Encryption</h3>
              <p>Balances never leave encrypted form</p>
            </div>
            <div className="feature-card">
              <h3>Public Verification</h3>
              <p>All transactions remain verifiable</p>
            </div>
            <div className="feature-card">
              <h3>Solidity Native</h3>
              <p>Write in familiar Solidity</p>
            </div>
            <div className="feature-card">
              <h3>Composable</h3>
              <p>Works with existing protocols</p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>How It Works</h2>
          <div className="step">
            <div className="step-number">1</div>
            <div>
              <strong>User encrypts input</strong> using FHEVM public key
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div>
              <strong>Contract computes on encrypted data</strong> using FHE operations
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div>
              <strong>Coprocessors verify</strong> off chain and commit results
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div>
              <strong>Only authorized users decrypt</strong> their balances
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Built for Zama Season 3 Creator Campaign</p>
          <p>
            Learn more at{' '}
            <a href="https://zama.ai" target="_blank" rel="noopener noreferrer">
              zama.ai
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}
