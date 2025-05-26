'use client';

import { useState } from 'react';
import { Upload, FileText, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ComboBox, ComboBoxItem } from '../common/comboBox';
import Heading from '../common/heading';
import SectionContainer from '../common/sectionContainer';

const materialOptions: ComboBoxItem[] = [
  { value: 'pla', label: 'PLA - Biodegradable Plastic' },
  { value: 'abs', label: 'ABS - Durable Plastic' },
  { value: 'petg', label: 'PETG - Chemical Resistant' },
  { value: 'tpu', label: 'TPU - Flexible Material' },
  { value: 'wood', label: 'Wood Fill - Natural Look' },
  { value: 'metal', label: 'Metal Fill - Metallic Finish' },
  { value: 'carbon', label: 'Carbon Fiber - High Strength' },
  { value: 'resin', label: 'Resin - High Detail' },
];

export default function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [message, setMessage] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { selectedFile, selectedMaterial, message });
  };

  return (
    <SectionContainer sectionClassName="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Heading
          pillText="Get Started"
          title="Upload Your"
          titleBold="3D Files"
          description="Upload your 3D files, select materials, and provide project details to get started with your modeling project."
          className="items-center text-center"
        />

        <Card className="border border-zinc-100 rounded-3xl overflow-hidden shadow-lg mt-12">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* File Upload Area */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-gray-900">
                  Upload 3D File
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200 ${
                    isDragOver
                      ? 'border-blue-400 bg-blue-50'
                      : selectedFile
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept=".stl,.obj,.ply,.3mf,.amf"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <div className="text-center space-y-4">
                    {selectedFile ? (
                      <>
                        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                          <FileText className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-900">
                            {selectedFile.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                          <Upload className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-900">
                            Drag & drop your 3D file here
                          </p>
                          <p className="text-sm text-gray-500">
                            or click to browse files
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            Supported formats: STL, OBJ, PLY, 3MF, AMF
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Material Selection */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-gray-900">
                  Printing Material
                </label>
                <ComboBox
                  items={materialOptions}
                  placeholder="Select printing material..."
                  searchPlaceholder="Search materials..."
                  emptyMessage="No materials found."
                  width="w-full"
                  value={selectedMaterial}
                  onChange={setSelectedMaterial}
                  className="w-full"
                />
              </div>

              {/* Message/Instructions */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-gray-900">
                  Project Details & Instructions
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe your project requirements, preferred dimensions, special instructions, or any other details that will help us provide an accurate quote..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="px-8 py-4 text-base font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  disabled={!selectedFile || !selectedMaterial}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit for Quote
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
