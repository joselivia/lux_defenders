import React from "react";
import {
  Star,
  Merge,
  Split,
  Minimize,
  Pencil,
  Signature,
  RefreshCw,
  FileText,
  ArrowRight,
  ArrowLeft,
  Image,
  GalleryHorizontal,
  Lock,
  Unlock,
  RotateCw,
  Eraser,
  Copy,
  ListOrdered,
  Globe,
  Briefcase,
  Camera,
  ScanText,
  Paintbrush,
  Hash,
  Eye,
  GitCompare,
  Zap,
  MessageSquare,
  FilePlus,
  Layers,
} from "lucide-react";

interface ToolItem {
  id: string;
  title: string;
  icon: React.ElementType;
  isFavorite?: boolean;
}

const allPdfTools: ToolItem[] = [
  { id: "merge-pdf", title: "Merge PDF", icon: Merge },
  { id: "split-pdf", title: "Split PDF", icon: Split },
  { id: "compress-pdf", title: "Compress PDF", icon: Minimize },
  { id: "edit-pdf", title: "Edit PDF", icon: Pencil },
  { id: "sign-pdf", title: "Sign PDF", icon: Signature },
  { id: "pdf-converter", title: "PDF Converter", icon: RefreshCw },
  {
    id: "convert-to-pdf",
    title: "Convert to PDF",
    icon: () => (
      <>
        <FileText size={28} />
        <ArrowRight size={16} className="absolute bottom-1 right-1" />
      </>
    ),
  },
  {
    id: "convert-pdf-to",
    title: "Convert PDF to ...",
    icon: () => (
      <>
        <FileText size={28} />
        <ArrowLeft size={16} className="absolute bottom-1 right-1" />
      </>
    ),
  },
  {
    id: "images-to-pdf",
    title: "Images to PDF",
    icon: () => (
      <>
        <Image size={28} />
        <ArrowRight size={16} className="absolute bottom-1 right-1" />
      </>
    ),
  },
  {
    id: "pdf-to-images",
    title: "PDF to images",
    icon: () => (
      <>
        <FileText size={28} />
        <ArrowRight size={16} className="absolute bottom-1 right-1" />
      </>
    ),
  },
  {
    id: "extract-pdf-images",
    title: "Extract PDF Images",
    icon: GalleryHorizontal,
  },
  { id: "protect-pdf", title: "Protect PDF", icon: Lock },
  { id: "unlock-pdf", title: "Unlock PDF", icon: Unlock },
  { id: "rotate-pdf-pages", title: "Rotate PDF pages", icon: RotateCw },
  { id: "remove-pdf-pages", title: "Remove PDF pages", icon: Eraser },
  { id: "extract-pdf-pages", title: "Extract PDF pages", icon: Copy },
  {
    id: "rearrange-pdf-pages",
    title: "Rearrange PDF pages",
    icon: ListOrdered,
  },
  {
    id: "webpage-to-pdf",
    title: "Webpage to PDF",
    icon: () => (
      <>
        <Globe size={28} />
        <ArrowRight size={16} className="absolute bottom-1 right-1" />
      </>
    ),
  },
  {
    id: "create-pdf-job-application",
    title: "Create PDF job application",
    icon: Briefcase,
  },
  {
    id: "create-pdf-with-camera",
    title: "Create PDF with a camera",
    icon: Camera,
  },
  { id: "pdf-ocr", title: "PDF OCR", icon: ScanText },
  { id: "add-watermark", title: "Add watermark", icon: Paintbrush },
  { id: "add-page-numbers", title: "Add page numbers", icon: Hash },
  { id: "view-as-pdf", title: "View as PDF", icon: Eye },
  { id: "pdf-overlay", title: "PDF Overlay", icon: Layers },
  { id: "compare-pdfs", title: "Compare PDFs", icon: GitCompare },
  {
    id: "web-optimize-pdf",
    title: "Web optimize PDF",
    icon: () => (
      <>
        <Globe size={28} />
        <Zap size={16} className="absolute bottom-1 right-1" />
      </>
    ),
  },
  { id: "annotate-pdf", title: "Annotate PDF", icon: MessageSquare },
  { id: "redact-pdf", title: "Redact PDF", icon: Eraser },
  { id: "create-pdf", title: "Create PDF", icon: FilePlus },
];

const frequentlyUsedTools: ToolItem[] = allPdfTools
  .filter((tool) =>
    [
      "merge-pdf",
      "split-pdf",
      "compress-pdf",
      "edit-pdf",
      "sign-pdf",
      "pdf-converter",
    ].includes(tool.id)
  )
  .map((tool) => ({ ...tool, isFavorite: true }));

const ToolCard: React.FC<{ tool: ToolItem }> = ({ tool }) => {
  const IconComponent = tool.icon;

  return (
    <div
      className="relative bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-lg
                        hover:bg-gray-700 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer
                        transform hover:-translate-y-1"
    >
      {/* Favorite Star Icon (conditionally rendered) */}
      {tool.isFavorite && (
        <div className="absolute top-3 right-3 text-yellow-400">
          <Star size={20} fill="currentColor" />
        </div>
      )}
      {/* Tool Icon */}
      <div className="mb-4 text-blue-400 relative">
        <IconComponent size={36} /> {/* Render the Lucide icon */}
      </div>
      {/* Tool Title */}
      <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
    </div>
  );
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className=" flex justify-center mb-16 gap-6 ">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 text-center ">
            The services Are UnAvailable
          </h1>
          <a href="https://tools.pdf24.org/en/all-tools" className="flex justify-center text-4xl items-center text-green-700">click here</a>
        </div>

        {/* Frequently Used Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-200">
            Frequently used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {frequentlyUsedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        {/* All Tools Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-200">
            All Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {allPdfTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
