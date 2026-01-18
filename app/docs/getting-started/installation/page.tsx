import Link from 'next/link';
import { Download, Terminal, CheckCircle, Copy, AlertCircle, Server } from 'lucide-react';

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/getting-started" className="hover:text-white">Getting Started</Link>
          <span>/</span>
          <span className="text-white">Installation</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Download className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300">Installation</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Install WorkflowHub</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Get WorkflowHub running on your machine in under 5 minutes using Docker. No complex 
            configuration required—just copy, paste, and go.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Prerequisites</h2>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <h3 className="text-lg font-bold mb-4">Required Software</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Docker 20.10+</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Install Docker Desktop or Docker Engine on your system
                  </p>
                  <a
                    href="https://docs.docker.com/get-docker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Download Docker →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 shrink-0">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Docker Compose</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Usually included with Docker Desktop, or install separately
                  </p>
                  <a
                    href="https://docs.docker.com/compose/install/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Install Docker Compose →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Install */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Quick Install (Recommended)</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            The fastest way to get started. This single command will download and start all required 
            services with sensible defaults.
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-400" />
                  Step 1: Clone the Repository
                </h3>
              </div>
              
              <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
git clone https://github.com/yourusername/workflowhub.git
cd workflowhub
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-400" />
                  Step 2: Start the Services
                </h3>
              </div>
              
              <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
docker-compose up -d
                </pre>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">
                This will download and start WorkflowHub, MongoDB, and all dependencies
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Step 3: Access WorkflowHub
                </h3>
              </div>
              
              <p className="text-gray-400 mb-3">
                Open your browser and navigate to:
              </p>
              
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center justify-between">
                  <code className="text-lg font-mono text-green-400">http://localhost:3000</code>
                  <button className="p-2 rounded hover:bg-white/10 transition-all">
                    <Copy className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-xl bg-green-500/10 border border-green-500/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-green-400 mb-2">Installation Complete!</h4>
                <p className="text-sm text-gray-400">
                  If you see the WorkflowHub login page, you're all set! The default credentials are:
                </p>
                <div className="mt-3 p-3 rounded-lg bg-black/30 text-sm font-mono">
                  <div>Email: admin@workflowhub.local</div>
                  <div>Password: admin123</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ⚠️ Change these credentials immediately after your first login
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Docker Compose File */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Docker Compose Configuration</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            The default docker-compose.yml includes everything you need. Here's what it sets up:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-400" />
                  WorkflowHub Frontend
                </h4>
                <p className="text-sm text-gray-400">
                  Next.js web interface on port 3000
                </p>
              </div>

              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Server className="h-5 w-5 text-purple-400" />
                  WorkflowHub Backend
                </h4>
                <p className="text-sm text-gray-400">
                  NestJS API server on port 4000
                </p>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-400" />
                  MongoDB
                </h4>
                <p className="text-sm text-gray-400">
                  Database for workflows and executions
                </p>
              </div>

              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Server className="h-5 w-5 text-orange-400" />
                  Redis (Optional)
                </h4>
                <p className="text-sm text-gray-400">
                  Caching and queue management
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/30">
              <pre className="text-xs font-mono text-gray-300 overflow-x-auto">{`version: '3.8'

services:
  frontend:
    image: workflowhub/frontend:latest
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:4000
    depends_on:
      - backend

  backend:
    image: workflowhub/backend:latest
    ports:
      - "4000:4000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/workflowhub
      - JWT_SECRET=your-secret-key-change-this
    depends_on:
      - mongodb

  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:`}</pre>
            </div>
          </div>
        </section>

        {/* Environment Variables */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Environment Variables</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Customize WorkflowHub by creating a .env file in the root directory:
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
            <div className="p-4 rounded-lg bg-black/30 mb-4">
              <pre className="text-sm font-mono text-gray-300 overflow-x-auto">{`# Database
MONGODB_URI=mongodb://localhost:27017/workflowhub

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRES_IN=7d

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:4000

# SMTP (for email nodes)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# AI Providers (optional)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...`}</pre>
            </div>

            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-yellow-400 mb-1">Security Note</p>
                  <p className="text-sm text-gray-400">
                    Never commit .env files to version control. Add .env to your .gitignore file.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verify Installation */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Verify Installation</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Check that all services are running correctly:
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-blue-400" />
                Check Running Containers
              </h3>
              
              <div className="p-4 rounded-lg bg-black/30 mb-3">
                <pre className="text-sm font-mono text-gray-300">docker-compose ps</pre>
              </div>
              
              <p className="text-sm text-gray-400">
                You should see all services with status "Up"
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-green-400" />
                View Logs
              </h3>
              
              <div className="p-4 rounded-lg bg-black/30 mb-3">
                <pre className="text-sm font-mono text-gray-300">docker-compose logs -f</pre>
              </div>
              
              <p className="text-sm text-gray-400">
                Follow logs in real-time. Press Ctrl+C to exit
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                Test API Health
              </h3>
              
              <div className="p-4 rounded-lg bg-black/30 mb-3">
                <pre className="text-sm font-mono text-gray-300">curl http://localhost:4000/api/health</pre>
              </div>
              
              <p className="text-sm text-gray-400">
                Should return: {`{"status": "ok"}`}
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Troubleshooting</h2>
          
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="font-bold mb-2 text-red-400">Port Already in Use</h3>
              <p className="text-sm text-gray-400 mb-3">
                If port 3000 or 4000 is already in use, modify the ports in docker-compose.yml
              </p>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                ports:<br/>
                &nbsp;&nbsp;- "8080:3000"  # Change 3000 to 8080
              </div>
            </div>

            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="font-bold mb-2 text-red-400">Services Won't Start</h3>
              <p className="text-sm text-gray-400 mb-3">
                Stop all containers and rebuild:
              </p>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                docker-compose down<br/>
                docker-compose up -d --build
              </div>
            </div>

            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="font-bold mb-2 text-red-400">Database Connection Error</h3>
              <p className="text-sm text-gray-400 mb-3">
                Ensure MongoDB is running and accessible:
              </p>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                docker-compose logs mongodb
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <h2 className="text-2xl font-bold mb-4">Installation Complete! 🎉</h2>
            <p className="text-gray-400 mb-6">
              WorkflowHub is now running on your machine. Let's take a quick tour of the interface!
            </p>
            
            <Link
              href="/docs/getting-started/quick-start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-all"
            >
              Continue to Quick Start →
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <Link
            href="/docs/getting-started"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <span>←</span>
            <span>Getting Started</span>
          </Link>
          
          <Link
            href="/docs/getting-started/quick-start"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
          >
            <span>Next: Quick Start</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}