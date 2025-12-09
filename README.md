# GasX for Cronos x402

AI-Powered Gas Sponsorship Infrastructure for the Cronos x402 Paytech Hackathon.

## Overview

GasX enables AI agents to sponsor gas for on-chain transactions using the x402 payment protocol on Cronos. This project combines:

- **Account Abstraction (ERC-4337)**: Gasless transactions via Paymaster
- **x402 Payment Protocol**: Programmatic payments for AI agents
- **MCP Tools**: Model Context Protocol integration for AI assistants
- **Crypto.com AI Agent SDK**: Native integration with Crypto.com's AI infrastructure

## Hackathon Tracks

| Track | Prize | Fit |
|-------|-------|-----|
| Main Track (x402 Applications) | $24,000 | Core x402 integration |
| Best Dev Tooling | $3,000 | MCP tools for AI |
| Best AI Agentic Finance Solution | $5,000 | AI agent gas management |

**Total Potential**: $32,000

## Architecture

```
AI Agent Layer (Claude, GPT, Crypto.com AI)
        |
GasX MCP Layer (MCP Tools)
        |
x402 Payment Layer (Cronos x402 Facilitator)
        |
Cronos EVM Layer (ERC-4337 Paymaster)
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Environment Variables

```bash
# Cronos RPC
CRONOS_RPC_URL=https://evm.cronos.org
CRONOS_TESTNET_RPC_URL=https://evm-t3.cronos.org

# Bundler (Pimlico or similar)
PIMLICO_API_KEY=your_key

# x402 Facilitator
X402_FACILITATOR_URL=https://x402.cronos.org/api
```

## Git Workflow

```
main <- develop <- releases <- feature/*
```

See [PLAN.md](./PLAN.md) for detailed implementation plan.

## License

MIT
