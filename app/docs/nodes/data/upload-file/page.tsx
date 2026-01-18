import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { File, FileSpreadsheet, FileText, Image } from 'lucide-react';

export default function UploadFileNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📤</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Upload File
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Files</Badge>
                  <Badge variant="outline">CSV</Badge>
                  <Badge variant="outline">Excel</Badge>
                  <Badge variant="outline">JSON</Badge>
                  <Badge variant="outline">Images</Badge>
                  <Badge variant="outline">PDF</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Upload and process files including CSV, Excel, JSON, images, PDFs, and text documents
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: FileSpreadsheet, label: 'CSV/Excel', color: 'text-green-400' },
            { icon: FileText, label: 'JSON/Text', color: 'text-blue-400' },
            { icon: Image, label: 'Images', color: 'text-purple-400' },
            { icon: File, label: 'PDF', color: 'text-red-400' }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
              <div className="text-lg font-bold text-white">{stat.label}</div>
              <div className="text-xs text-gray-400">Supported</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section>
          <h2 className="text-3xl font-black mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Upload File node allows you to bring external data into your workflows. Upload CSV files for data processing, Excel spreadsheets for analysis, JSON files for import, images for AI analysis, or PDFs for text extraction.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Files are automatically parsed based on their type, making data immediately available for downstream nodes like AI Chat, Email, or Database operations.
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Required</th>
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'fileId', type: 'File', req: '✅', desc: 'Upload file via file picker' },
                  { field: 'parseOptions', type: 'JSON', req: '❌', desc: 'Additional parsing options for CSV/Excel' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
                    </td>
                    <td className="py-4 px-6 text-gray-300 text-sm">{row.type}</td>
                    <td className="py-4 px-6 text-sm">{row.req}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout type="info" title="File Size Limits">
            Maximum file size is typically 10MB. For larger files, consider using cloud storage URLs with the HTTP Request node instead.
          </Callout>
        </section>

        {/* Supported Formats */}
        <section>
          <h2 className="text-3xl font-black mb-6">Supported File Formats</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
              <FileSpreadsheet className="h-10 w-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold mb-3 text-green-400">Spreadsheets</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>CSV</strong> (.csv) - Comma-separated values</li>
                <li>• <strong>Excel</strong> (.xlsx, .xls) - Microsoft Excel files</li>
                <li>• Auto-detects headers and data types</li>
                <li>• Returns array of objects with column names as keys</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
              <FileText className="h-10 w-10 text-blue-400 mb-3" />
              <h3 className="text-xl font-bold mb-3 text-blue-400">Structured Data</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>JSON</strong> (.json) - JavaScript Object Notation</li>
                <li>• <strong>Text</strong> (.txt) - Plain text files</li>
                <li>• JSON is parsed automatically</li>
                <li>• Text returned as string</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
              <Image className="h-10 w-10 text-purple-400 mb-3" />
              <h3 className="text-xl font-bold mb-3 text-purple-400">Images</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>JPEG/JPG</strong> (.jpg, .jpeg)</li>
                <li>• <strong>PNG</strong> (.png)</li>
                <li>• Returns binary buffer</li>
                <li>• Use with AI Image Analysis node</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20">
              <File className="h-10 w-10 text-red-400 mb-3" />
              <h3 className="text-xl font-bold mb-3 text-red-400">Documents</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>PDF</strong> (.pdf) - Portable Document Format</li>
                <li>• Returns binary buffer</li>
                <li>• Use for text extraction or analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Output */}
        <section>
          <h2 className="text-3xl font-black mb-4">Output Examples</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">CSV/Excel Output</h3>
              <CodeBlock
                language="json"
                code={`{
  "data": [
    { "name": "Alice", "email": "alice@example.com", "age": 28 },
    { "name": "Bob", "email": "bob@example.com", "age": 35 },
    { "name": "Charlie", "email": "charlie@example.com", "age": 42 }
  ],
  "metadata": {
    "type": "csv",
    "rowCount": 3,
    "columns": ["name", "email", "age"],
    "fileId": "507f1f77bcf86cd799439011"
  }
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">JSON Output</h3>
              <CodeBlock
                language="json"
                code={`{
  "data": {
    "users": [
      { "id": 1, "name": "Alice" },
      { "id": 2, "name": "Bob" }
    ],
    "total": 2
  },
  "metadata": {
    "type": "json",
    "fileId": "507f1f77bcf86cd799439011"
  }
}`}
              />
            </div>
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Usage Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Example 1: Process Customer List</h3>
              <p className="text-gray-300 mb-4">Upload CSV and send personalized emails:</p>
              <CodeBlock
                language="text"
                code={`Workflow:
1. Upload File (CSV with: name, email, product)
2. AI Chat (Generate personalized message for each customer)
3. Email (Send to each customer)

CSV Content:
name,email,product
Alice,alice@example.com,Premium Plan
Bob,bob@example.com,Basic Plan

AI Chat Prompt:
"Write a friendly welcome email for {{$prev.data.name}} who purchased {{$prev.data.product}}"

Email Node:
To: {{$prev.data.email}}
Subject: Welcome, {{$prev.data.name}}!
Body: {{$prev.data.response}}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 2: Data Analysis with AI</h3>
              <CodeBlock
                language="text"
                code={`Workflow:
1. Upload File (sales_data.csv)
2. AI Chat (Analyze sales trends)

AI Chat Configuration:
System Prompt: "You are a data analyst"
Prompt: "Analyze this sales data and provide insights: {{$prev.data}}"

Result: AI provides analysis of trends, top products, recommendations`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 3: Import to Database</h3>
              <CodeBlock
                language="text"
                code={`Workflow:
1. Upload File (users.csv)
2. Filter (Remove duplicates/invalid emails)
3. Database (INSERT into users table)

Database Query:
INSERT INTO users (name, email, created_at)
VALUES (
  '{{$prev.data.name}}',
  '{{$prev.data.email}}',
  NOW()
)`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Example 4: Excel Report Processing</h3>
              <CodeBlock
                language="text"
                code={`Workflow:
1. Upload File (monthly_report.xlsx)
2. Aggregate (Calculate totals, averages)
3. AI Chat (Generate executive summary)
4. Email (Send summary to management)

Result: Automated monthly report processing and distribution`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Example 5: Batch Data Updates</h3>
              <CodeBlock
                language="text"
                code={`Workflow:
1. Upload File (user_updates.csv with: id, status, plan)
2. Loop Over Items
3. Database UPDATE (Update each user)

CSV:
id,status,plan
123,active,premium
456,inactive,free

Database Query:
UPDATE users 
SET status = '{{$item.status}}', plan = '{{$item.plan}}'
WHERE id = {{$item.id}}`}
              />
            </div>
          </div>
        </section>

        {/* Parse Options */}
        <section>
          <h2 className="text-3xl font-black mb-6">Advanced: Parse Options</h2>

          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <p className="text-gray-300 mb-4">For CSV/Excel files, you can customize parsing:</p>
            <CodeBlock
              language="json"
              code={`{
  "delimiter": ",",        // CSV delimiter (default: ,)
  "header": true,          // First row is header (default: true)
  "skipEmptyLines": true,  // Skip empty rows (default: true)
  "dynamicTyping": true    // Auto-convert numbers/booleans (default: true)
}`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Validate Data After Upload</h4>
              <p className="text-sm text-gray-300">
                Use Filter or IF nodes to validate data quality before processing (check for required fields, valid formats).
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Consistent Column Names</h4>
              <p className="text-sm text-gray-300">
                Ensure your CSV/Excel files have consistent, lowercase column names without spaces (use underscores).
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Handle Errors Gracefully</h4>
              <p className="text-sm text-gray-300">
                Add error handling for invalid file formats or corrupted data to prevent workflow failures.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Upload Sensitive Data</h4>
              <p className="text-sm text-gray-300">
                Avoid uploading files with passwords, API keys, or personally identifiable information unless encrypted.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: File Size</h4>
              <p className="text-sm text-gray-300">
                For files larger than 10MB, use Limit node to process in batches or upload to cloud storage first.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Character Encoding</h4>
              <p className="text-sm text-gray-300">
                Ensure CSV files are UTF-8 encoded to handle special characters correctly.
              </p>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section>
          <h2 className="text-3xl font-black mb-6">Common Issues & Solutions</h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h4 className="font-bold text-orange-400 mb-2">Issue: CSV columns not parsing correctly</h4>
              <p className="text-sm text-gray-300 mb-2"><strong>Solution:</strong> Check delimiter in parseOptions. Some CSVs use semicolons (;) or tabs.</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h4 className="font-bold text-orange-400 mb-2">Issue: Empty rows in output</h4>
              <p className="text-sm text-gray-300 mb-2"><strong>Solution:</strong> Set skipEmptyLines: true in parseOptions.</p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h4 className="font-bold text-orange-400 mb-2">Issue: Numbers treated as strings</h4>
              <p className="text-sm text-gray-300 mb-2"><strong>Solution:</strong> Enable dynamicTyping: true to auto-convert data types.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}