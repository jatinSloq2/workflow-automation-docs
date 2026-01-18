import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FilesNodesPage() {
  const nodes = [
    {
      title: 'Upload File',
      description: 'Process uploaded files including CSV, Excel, JSON, images, and PDFs',
      icon: '📤',
      href: '/docs/nodes/files/upload-file',
      color: 'from-yellow-500 to-orange-500',
      formats: ['CSV', 'Excel', 'JSON', 'Images', 'PDF', 'Text'],
    },
    {
      title: 'Read/Write File',
      description: 'Read and write files from disk with different encodings',
      icon: '📁',
      href: '/docs/nodes/files/read-file',
      color: 'from-amber-500 to-yellow-500',
      formats: ['Text', 'Binary', 'UTF-8'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/nodes" className="hover:text-white">Nodes</Link>
          <span>/</span>
          <span className="text-white">Files & Storage</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <span className="text-sm text-yellow-300">📂 File Operations</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            File & Storage Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Handle file operations in your workflows - upload, process, read, and write files. 
            Support for multiple file formats and encodings.
          </p>
        </div>

        {/* Available Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Available Operations</h2>
          
          <div className="space-y-6">
            {nodes.map((node) => (
              <Link
                key={node.href}
                href={node.href}
                className="group relative overflow-hidden rounded-2xl block"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${node.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="text-4xl mb-4">{node.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed mb-4">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-2">
                      <div className="text-xs text-gray-400 mb-2 font-semibold uppercase">Formats:</div>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {node.formats.map((format) => (
                          <span key={format} className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-300">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Supported File Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Supported File Types</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <h3 className="text-lg font-bold mb-3 text-blue-400">📊 Data Files</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• CSV - Comma-separated values</li>
                <li>• Excel (.xlsx, .xls)</li>
                <li>• JSON - Structured data</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h3 className="text-lg font-bold mb-3 text-purple-400">🖼️ Media Files</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Images (PNG, JPG, GIF)</li>
                <li>• PDF - Portable documents</li>
                <li>• Binary files</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="text-lg font-bold mb-3 text-green-400">📄 Text Files</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Plain text (.txt)</li>
                <li>• HTML documents</li>
                <li>• XML / Markdown</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-orange-400">📥 Data Import</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Import CSV data for processing</li>
                <li>• Parse Excel files</li>
                <li>• Load JSON configurations</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 hover:border-amber-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-amber-400">📤 Data Export</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Generate reports and files</li>
                <li>• Export processed data</li>
                <li>• Save results to disk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Validate File Format</h4>
              <p className="text-sm text-gray-300">
                Check file types and content before processing to avoid errors.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Handle Large Files</h4>
              <p className="text-sm text-gray-300">
                For large files, consider streaming or batch processing approach.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Set Proper Encoding</h4>
              <p className="text-sm text-gray-300">
                Ensure files are read/written with correct character encoding (UTF-8 recommended).
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Store Sensitive Data</h4>
              <p className="text-sm text-gray-300">
                Avoid storing passwords or API keys in plain text files.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
          <h3 className="text-2xl font-bold mb-4">Get Started with File Operations</h3>
          <p className="text-gray-300 mb-6">
            Choose a file operation to learn how to handle files in your workflows:
          </p>
          <div className="flex flex-wrap gap-3">
            {nodes.map((node) => (
              <Link 
                key={node.href}
                href={node.href} 
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <span>{node.icon}</span>
                {node.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
