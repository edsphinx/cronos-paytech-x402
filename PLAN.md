# Cronos x402 Paytech Hackathon - Implementation Plan

## Project: GasX for Cronos x402

AI-Powered Gas Sponsorship Infrastructure for the Cronos x402 Paytech Hackathon.

---

## Git Branching Strategy

```
main (production)
  ↑
develop (integration/testing)
  ↑
releases (stable pre-production)
  ↑
feature/* (individual features)
```

### Workflow
1. Create `feature/*` branch from `develop`
2. Implement feature
3. PR to `releases` for consolidation
4. Test in `develop`
5. Merge to `main` for demo/production

---

## Feature Branches

### 1. `feature/nextjs-base`
**Priority**: HIGH (Foundation)
**Description**: Next.js 15 + TypeScript + Tailwind CSS base setup

**Files to copy from gasx-platform:**
- `package.json` (simplified - remove unused deps)
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `app/layout.tsx`
- `app/page.tsx` (new landing for hackathon)
- `app/globals.css`
- `lib/utils.ts`
- `.gitignore`
- `.env.example`

**New files:**
- `app/providers.tsx` (simplified)

**Dependencies (minimal):**
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@tailwindcss/postcss": "^4.0.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

---

### 2. `feature/ui-components`
**Priority**: HIGH (Needed for all UI)
**Description**: shadcn/ui base components

**Files to copy from gasx-platform:**
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/input.tsx`
- `components/ui/badge.tsx`
- `components/ui/skeleton.tsx`
- `components/ui/toast.tsx`
- `components/ui/toaster.tsx`
- `hooks/use-toast.ts`
- `lib/utils.ts` (cn function)

**Dependencies:**
```json
{
  "@radix-ui/react-slot": "^1.0.0",
  "class-variance-authority": "^0.7.0",
  "lucide-react": "^0.400.0"
}
```

---

### 3. `feature/web3-cronos`
**Priority**: HIGH (Core Web3)
**Description**: Wagmi + RainbowKit configured for Cronos only

**Files to copy from gasx-platform (simplified):**
- `config/wagmi.ts` (only Cronos chains)
- `config/supported-chains.ts` (only Cronos entries)
- `components/web3/wallet-provider.tsx`
- `components/web3/connect-button.tsx`

**New files:**
- `config/cronos-chains.ts` (Cronos mainnet + testnet only)

**Configuration:**
```typescript
// Only Cronos chains
export const SUPPORTED_CHAINS = {
  25: cronos,      // Cronos Mainnet
  338: cronosTestnet  // Cronos Testnet
};
```

**Dependencies:**
```json
{
  "wagmi": "^2.0.0",
  "@rainbow-me/rainbowkit": "^2.0.0",
  "viem": "^2.0.0",
  "@tanstack/react-query": "^5.0.0"
}
```

---

### 4. `feature/gasless-core`
**Priority**: HIGH (Core AA)
**Description**: Account Abstraction + Paymaster for Cronos

**Files to copy from gasx-platform:**
- `hooks/useGaslessTransaction.ts`
- `lib/web3/paymaster.ts`
- `lib/web3/bundler.ts`
- `app/api/bundler/route.ts`
- `app/api/sponsor/submit/route.ts`

**Simplified for MVP:**
- No database tracking (in-memory or simple file)
- Single campaign support
- Basic gas estimation

**Dependencies:**
```json
{
  "permissionless": "^0.2.0",
  "viem": "^2.0.0"
}
```

---

### 5. `feature/x402-integration`
**Priority**: HIGH (Hackathon requirement)
**Description**: x402 payment protocol integration

**Files to create:**
- `lib/x402/client.ts` - x402 Facilitator client
- `lib/x402/types.ts` - x402 types
- `app/api/x402/pay/route.ts` - x402 payment endpoint
- `hooks/useX402Payment.ts` - React hook for x402

**Key Integration:**
```typescript
// Connect to Cronos x402 Facilitator
const x402Client = createX402Client({
  network: 'cronos-testnet',
  facilitatorUrl: 'https://x402.cronos.org/api'
});

// EIP-3009 transferWithAuthorization
await x402Client.pay({
  amount: '100000000', // 100 USDC
  recipient: paymasterAddress,
  authorization: signedAuth
});
```

**Dependencies:**
```json
{
  "@coinbase/x402": "^0.1.0"
}
```

---

### 6. `feature/mcp-tools`
**Priority**: MEDIUM (AI Integration)
**Description**: MCP server for AI agents

**Files to create:**
- `lib/mcp/server.ts` - MCP server
- `lib/mcp/tools.ts` - GasX MCP tools
- `lib/mcp/manifest.json` - MCP manifest
- `app/api/mcp/route.ts` - MCP endpoint

**MCP Tools:**
```json
{
  "tools": [
    {
      "name": "gasx_create_campaign",
      "description": "Create a gas sponsorship campaign on Cronos"
    },
    {
      "name": "gasx_sponsor_transaction",
      "description": "Sponsor gas for a user transaction"
    },
    {
      "name": "gasx_check_budget",
      "description": "Check remaining campaign budget"
    },
    {
      "name": "gasx_estimate_gas",
      "description": "Estimate gas cost for an operation"
    }
  ]
}
```

**Dependencies:**
```json
{
  "@modelcontextprotocol/server": "^1.0.0"
}
```

---

### 7. `feature/ai-agent-sdk`
**Priority**: MEDIUM (Crypto.com Integration)
**Description**: Crypto.com AI Agent SDK integration

**Files to create:**
- `lib/agent/gasX-agent.ts` - GasX agent tools
- `lib/agent/types.ts` - Agent types
- `app/api/agent/execute/route.ts` - Agent execution endpoint

**Integration:**
```typescript
import { CryptoComAgent } from '@anthropic/agent-sdk';

const gasXAgent = new CryptoComAgent({
  tools: [
    gasXTools.createCampaign,
    gasXTools.sponsorTransaction,
    gasXTools.checkBudget,
  ]
});
```

**Dependencies:**
```json
{
  "@anthropic/agent-sdk": "^0.1.0"
}
```

---

### 8. `feature/demo-ui`
**Priority**: HIGH (Demo/Video)
**Description**: Demo pages for hackathon presentation

**Pages to create:**
- `app/page.tsx` - Landing with value proposition
- `app/demo/page.tsx` - Interactive demo
- `app/demo/sponsor/page.tsx` - Gas sponsorship demo
- `app/demo/ai-agent/page.tsx` - AI agent interaction demo

**Components:**
- `components/demo/gas-sponsor-card.tsx`
- `components/demo/transaction-simulator.tsx`
- `components/demo/ai-chat-interface.tsx`

---

## Implementation Order

1. **Phase 1: Foundation**
   - [ ] `feature/nextjs-base`
   - [ ] `feature/ui-components`
   - [ ] Merge to `releases`

2. **Phase 2: Web3 Core**
   - [ ] `feature/web3-cronos`
   - [ ] `feature/gasless-core`
   - [ ] Merge to `releases`

3. **Phase 3: x402 Integration**
   - [ ] `feature/x402-integration`
   - [ ] Test payment flows
   - [ ] Merge to `releases`

4. **Phase 4: AI Agents**
   - [ ] `feature/mcp-tools`
   - [ ] `feature/ai-agent-sdk`
   - [ ] Merge to `releases`

5. **Phase 5: Demo & Polish**
   - [ ] `feature/demo-ui`
   - [ ] Merge all to `develop`
   - [ ] Testing
   - [ ] Merge to `main`

---

## Hackathon Tracks

| Track | Fit | Features |
|-------|-----|----------|
| **Main Track** | x402 Applications | x402 payment for gas sponsorship |
| **Agentic Finance** | AI gas treasury | MCP tools + AI Agent SDK |
| **Dev Tooling** | Infrastructure | MCP server, hooks, APIs |
| **Ecosystem** | Crypto.com | AI Agent SDK integration |

**Total Potential Prize**: $32,000

---

## Quick Commands

```bash
# Create feature branch
git checkout develop
git checkout -b feature/nextjs-base

# After completing feature
git add .
git commit -m "feat: add Next.js base setup"
git push -u origin feature/nextjs-base

# Create PR to releases
gh pr create --base releases --title "feat: Next.js base setup"

# After PR approval, merge to develop for testing
git checkout develop
git merge releases
git push
```

---

## Files NOT to Copy (Avoid Complexity)

- Database/Prisma setup (use in-memory for MVP)
- Authentication (NextAuth/SIWE - simplify for demo)
- RBAC system (not needed for demo)
- Analytics dashboard (too complex)
- Admin panel (not needed)
- Multiple chain support (Cronos only)
- Email notifications (not needed)
