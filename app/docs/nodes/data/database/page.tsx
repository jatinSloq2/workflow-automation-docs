import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Database, Zap, Lock, TrendingUp } from 'lucide-react';

export default function DatabaseNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🗄️</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Database
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Data</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">NoSQL</Badge>
                  <Badge variant="outline">Multi-DB</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Query and manipulate data across MySQL, PostgreSQL, MongoDB, and SQLite databases
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Database className="h-8 w-8 text-blue-400 mb-2" />
            <div className="text-2xl font-bold text-white">4+ DBs</div>
            <div className="text-sm text-gray-400">Supported</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Zap className="h-8 w-8 text-yellow-400 mb-2" />
            <div className="text-2xl font-bold text-white">5 Ops</div>
            <div className="text-sm text-gray-400">Operations</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Lock className="h-8 w-8 text-green-400 mb-2" />
            <div className="text-2xl font-bold text-white">Secure</div>
            <div className="text-sm text-gray-400">Connections</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <TrendingUp className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-2xl font-bold text-white">Dynamic</div>
            <div className="text-sm text-gray-400">Queries</div>
          </div>
        </div>

        {/* Overview */}
        <section>
          <h2 className="text-3xl font-black mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Database node provides a unified interface to interact with various database systems. Execute SELECT queries to retrieve data, INSERT to add records, UPDATE to modify existing data, DELETE to remove records, or run custom raw SQL/MongoDB queries.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Supports dynamic queries with expression interpolation, making it easy to use data from previous nodes in your database operations.
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Required</th>
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'dbType', type: 'Select', req: '✅', desc: 'mysql, postgresql, mongodb, sqlite' },
                  { field: 'operation', type: 'Select', req: '✅', desc: 'select, insert, update, delete, raw' },
                  { field: 'query', type: 'Text', req: '✅', desc: 'SQL/MongoDB query (supports expressions)' },
                  { field: 'host', type: 'String', req: '✅', desc: 'Database server hostname' },
                  { field: 'port', type: 'Number', req: '✅', desc: 'Database port (5432 for PostgreSQL)' },
                  { field: 'database', type: 'String', req: '✅', desc: 'Database name' },
                  { field: 'username', type: 'String', req: '✅', desc: 'Database username' },
                  { field: 'password', type: 'String', req: '✅', desc: 'Database password' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
                    </td>
                    <td className="py-4 px-6 text-gray-300 text-sm">{row.type}</td>
                    <td className="py-4 px-6 text-sm">{row.req}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout type="warning" title="Security Warning">
            Never hardcode database credentials in workflows. Use environment variables or secure credential storage. Always validate and sanitize inputs to prevent SQL injection.
          </Callout>
        </section>

        {/* Database Types */}
        <section>
          <h2 className="text-3xl font-black mb-6">Supported Databases</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-3 text-blue-400">PostgreSQL</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Default Port:</strong> 5432</p>
                <p><strong>Best For:</strong> Complex queries, ACID compliance, JSON data</p>
                <p><strong>Features:</strong> Advanced indexing, full-text search, array types</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">MySQL</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Default Port:</strong> 3306</p>
                <p><strong>Best For:</strong> Web applications, read-heavy workloads</p>
                <p><strong>Features:</strong> Replication, clustering, high performance</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="text-xl font-bold mb-3 text-green-400">MongoDB</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Default Port:</strong> 27017</p>
                <p><strong>Best For:</strong> Document storage, flexible schemas</p>
                <p><strong>Features:</strong> NoSQL, horizontal scaling, geospatial queries</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3 text-purple-400">SQLite</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p><strong>Default Port:</strong> N/A (file-based)</p>
                <p><strong>Best For:</strong> Embedded databases, small projects</p>
                <p><strong>Features:</strong> Zero configuration, lightweight, serverless</p>
              </div>
            </div>
          </div>
        </section>

        {/* Output */}
        <section>
          <h2 className="text-3xl font-black mb-4">Output</h2>
          <CodeBlock
            language="json"
            code={`{
  "dbType": "postgresql",
  "operation": "select",
  "query": "SELECT * FROM users WHERE id = 123",
  "result": [
    {
      "id": 123,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "executedAt": "2024-01-18T12:00:00Z"
}`}
          />
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 1: SELECT Query</h3>
              <p className="text-gray-300 mb-4">Retrieve user data with dynamic ID:</p>
              <CodeBlock
                language="sql"
                code={`-- Configuration
Database Type: postgresql
Operation: select
Query:

SELECT id, name, email, status
FROM users
WHERE id = {{$prev.data.userId}}
AND status = 'active'
ORDER BY created_at DESC
LIMIT 10`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Example 2: INSERT Query</h3>
              <p className="text-gray-300 mb-4">Add new user from webhook data:</p>
              <CodeBlock
                language="sql"
                code={`-- Configuration
Database Type: mysql
Operation: insert
Query:

INSERT INTO users (name, email, plan, created_at)
VALUES (
  '{{$input.name}}',
  '{{$input.email}}',
  '{{$input.plan}}',
  NOW()
)`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Example 3: UPDATE Query</h3>
              <p className="text-gray-300 mb-4">Update user status based on condition:</p>
              <CodeBlock
                language="sql"
                code={`-- Configuration
Database Type: postgresql
Operation: update
Query:

UPDATE users
SET 
  status = 'premium',
  upgraded_at = NOW()
WHERE email = '{{$prev.data.email}}'
AND status = 'free'`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 4: MongoDB Query</h3>
              <p className="text-gray-300 mb-4">NoSQL document query:</p>
              <CodeBlock
                language="javascript"
                code={`// Configuration
Database Type: mongodb
Operation: raw
Query:

db.users.find({
  "email": "{{$input.email}}",
  "status": { "$in": ["active", "premium"] }
}).sort({ created_at: -1 }).limit(5)`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Example 5: JOIN Query</h3>
              <p className="text-gray-300 mb-4">Complex query with joins:</p>
              <CodeBlock
                language="sql"
                code={`-- Configuration
Database Type: postgresql
Operation: raw
Query:

SELECT 
  u.id,
  u.name,
  u.email,
  o.order_id,
  o.total,
  o.created_at as order_date
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.email = '{{$node.webhook.data.email}}'
AND o.status = 'completed'
ORDER BY o.created_at DESC`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Example 6: Aggregate Query</h3>
              <p className="text-gray-300 mb-4">Calculate statistics:</p>
              <CodeBlock
                language="sql"
                code={`-- Configuration
Database Type: mysql
Operation: raw
Query:

SELECT 
  COUNT(*) as total_orders,
  SUM(total) as revenue,
  AVG(total) as avg_order_value,
  DATE(created_at) as order_date
FROM orders
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY DATE(created_at)
ORDER BY order_date DESC`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Parameterized Queries</h4>
              <p className="text-sm text-gray-300">
                Always use expressions like {`{{$prev.data.id}}`} instead of string concatenation to prevent SQL injection attacks.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Connection Pooling</h4>
              <p className="text-sm text-gray-300">
                For production workflows, configure connection pooling to improve performance and reduce database load.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Add Error Handling</h4>
              <p className="text-sm text-gray-300">
                Include IF nodes or error handling to manage failed queries gracefully.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Store Credentials in Workflows</h4>
              <p className="text-sm text-gray-300">
                Use environment variables or secure credential stores for database passwords.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Run Heavy Queries in Workflows</h4>
              <p className="text-sm text-gray-300">
                Avoid SELECT * or queries without LIMIT on large tables. Always add pagination.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Read Replicas</h4>
              <p className="text-sm text-gray-300">
                For read-heavy workflows, connect to read replicas to reduce load on primary database.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Indexing</h4>
              <p className="text-sm text-gray-300">
                Ensure commonly queried fields are indexed for better performance.
              </p>
            </div>
          </div>
        </section>

        {/* Security Tips */}
        <section>
          <h2 className="text-3xl font-black mb-6">Security Considerations</h2>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>SQL Injection:</strong> Always use expressions, never concatenate user input directly into queries</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>Least Privilege:</strong> Create database users with minimal required permissions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>Encryption:</strong> Use SSL/TLS for database connections in production</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>Audit Logs:</strong> Enable query logging for compliance and debugging</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>IP Whitelisting:</strong> Restrict database access to known workflow server IPs</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}