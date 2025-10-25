export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            FHEVM Confidential Token Guide
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to build encrypted smart contracts with Zama
          </p>
        </header>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is FHEVM?</h2>
          <p className="text-gray-700 mb-4">
            FHEVM (Fully Homomorphic Encryption Virtual Machine) enables 
            smart contracts to compute on encrypted data without ever 
            decrypting it.
          </p>
          <p className="text-gray-700">
            This means you can build tokens where balances and transfers 
            remain completely private while staying on public blockchains.
          </p>
        </section>

        {/* Code Example */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Contract</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "fhevm/lib/FHE.sol";

contract ConfidentialToken {
    // Encrypted balances
    mapping(address => euint64) private balances;
    
    // Transfer encrypted amount
    function transfer(
        address to, 
        einput encryptedAmount, 
        bytes calldata proof
    ) public {
        // Verify and decrypt input
        euint64 amount = FHE.asEuint64(encryptedAmount, proof);
        
        // Check balance
        euint64 senderBalance = balances[msg.sender];
        ebool hasEnough = FHE.gte(senderBalance, amount);
        
        // Conditional transfer
        euint64 transferAmount = FHE.select(
            hasEnough, 
            amount, 
            FHE.asEuint64(0)
        );
        
        // Update balances
        balances[msg.sender] = FHE.sub(
            senderBalance, 
            transferAmount
        );
        balances[to] = FHE.add(
            balances[to], 
            transferAmount
        );
    }
}`}
            </pre>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">End to End Encryption</h3>
              <p className="text-gray-600">
                Balances never leave encrypted form, even during computation
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">Public Verification</h3>
              <p className="text-gray-600">
                All transactions remain publicly verifiable on blockchain
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-2">Solidity Native</h3>
              <p className="text-gray-600">
                Write contracts in familiar Solidity without learning cryptography
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-2">Composable</h3>
              <p className="text-gray-600">
                Works with existing DeFi protocols and smart contracts
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">1</span>
              <div>
                <strong>User encrypts input</strong> using FHEVM public key before sending transaction
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">2</span>
              <div>
                <strong>Contract computes on encrypted data</strong> using FHE operations like add, subtract, compare
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">3</span>
              <div>
                <strong>Coprocessors verify computation</strong> off chain and commit results back to blockchain
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">4</span>
              <div>
                <strong>Only authorized users can decrypt</strong> their balances using access control rules
              </div>
            </li>
          </ol>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 pt-8 border-t">
          <p className="mb-2">
            Built for Zama Season 3 Creator Campaign
          </p>
          <p>
            Learn more at{' '}
            <a 
              href="https://zama.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              zama.ai
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}

