import { Fuel, Bot, Zap, Shield, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="h-4 w-4" />
              Cronos x402 Paytech Hackathon
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">GasX</span> for Cronos
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-Powered Gas Sponsorship Infrastructure. Enable AI agents to sponsor
              gas for on-chain transactions using the x402 payment protocol.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to enable gasless transactions for AI agents on Cronos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Fuel className="h-6 w-6" />}
              title="Gas Sponsorship"
              description="ERC-4337 Paymaster for gasless transactions on Cronos"
            />
            <FeatureCard
              icon={<Bot className="h-6 w-6" />}
              title="AI Agent Ready"
              description="MCP tools for Claude, GPT, and Crypto.com AI agents"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="x402 Payments"
              description="Programmatic payments via Cronos x402 Facilitator"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Secure & Fast"
              description="Account Abstraction with enterprise-grade security"
            />
          </div>
        </div>
      </section>

      {/* Hackathon Tracks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Hackathon Tracks</h2>
            <p className="text-muted-foreground">
              Targeting multiple prize tracks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <TrackCard
              title="Main Track"
              prize="$24,000"
              description="x402 Applications"
            />
            <TrackCard
              title="AI Agentic Finance"
              prize="$5,000"
              description="Best AI Solution"
            />
            <TrackCard
              title="Dev Tooling"
              prize="$3,000"
              description="Best Infrastructure"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Built for Cronos x402 Paytech Hackathon</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card-glow p-6 space-y-4">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

function TrackCard({
  title,
  prize,
  description,
}: {
  title: string;
  prize: string;
  description: string;
}) {
  return (
    <div className="card-glow p-6 text-center space-y-2">
      <p className="text-2xl font-bold text-gradient">{prize}</p>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
