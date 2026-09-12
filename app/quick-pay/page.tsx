"use client";

import { useState } from "react";
import { CreditCard, Shield, QrCode, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const courseOptions = [
  { id: "beginner-1", name: "Beginner Level - 1 (3 Months)", price: 15000 },
  { id: "beginner-2", name: "Beginner Level - 2 (3 Months)", price: 15000 },
  { id: "intermediate-1", name: "Intermediate Level - 1 (4 Months)", price: 20000 },
  { id: "intermediate-2", name: "Intermediate Level - 2 (4 Months)", price: 20000 },
  { id: "advanced-1", name: "Advanced Level - 1 (6 Months)", price: 30000 },
  { id: "online-monthly", name: "Online Coaching Monthly Package", price: 2800 },
  { id: "single-eval", name: "Single Evaluation Session", price: 800 },
];

export default function QuickPayPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    txnRef: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const selectedCourseData = courseOptions.find((c) => c.id === selectedCourse);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 pt-32 font-sans">
        <div className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-2xl max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Payment Submitted!</h2>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Thank you, <strong>{formData.name}</strong>. Your transaction reference has been logged. Our accounts team will verify your fee payment and send an official receipt shortly.
          </p>
          <div className="p-4 bg-white rounded-2xl border border-slate-200 text-left text-xs font-semibold space-y-2 text-slate-700">
            <div><span className="text-slate-400 uppercase font-bold">Course:</span> {selectedCourseData?.name}</div>
            <div><span className="text-slate-400 uppercase font-bold">Amount:</span> ₹{selectedCourseData?.price}</div>
            <div><span className="text-slate-400 uppercase font-bold">Txn Ref:</span> {formData.txnRef || "PENDING-VERIFY"}</div>
          </div>
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black h-12 rounded-xl text-xs uppercase tracking-wider shadow-md"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <Badge className="mb-4 bg-blue-50 text-blue-800 border-blue-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-blue-700" />
            256-Bit SSL Encrypted Portal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Telangana Chess Foundation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-amber-600">Fee Payment Portal</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Fast, transparent, and direct fee submission for classroom and online chess programs.
          </p>
        </div>
      </section>

      {/* Main Payment Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl space-y-6">
                <h3 className="text-2xl font-black text-slate-900">Student & Course Details</h3>

                <form onSubmit={handlePaymentSubmit} className="space-y-5">
                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Select Program / Course *</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse} required>
                      <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-bold text-xs uppercase">
                        <SelectValue placeholder="Choose program..." />
                      </SelectTrigger>
                      <SelectContent>
                        {courseOptions.map((c) => (
                          <SelectItem key={c.id} value={c.id} className="font-bold text-xs">
                            {c.name} - ₹{c.price.toLocaleString("en-IN")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Student Name *</Label>
                      <Input required value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Full Name" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-medium" />
                    </div>
                    <div>
                      <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Email Address *</Label>
                      <Input required type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="email@example.com" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-medium" />
                    </div>
                  </div>

                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Phone / WhatsApp Number *</Label>
                    <Input required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+91 9864646481" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-medium" />
                  </div>

                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Payment Method</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "upi", name: "UPI / GPay / PhonePe", icon: QrCode },
                        { id: "bank", name: "NEFT / Bank Transfer", icon: CreditCard },
                      ].map((m) => (
                        <div
                          key={m.id}
                          onClick={() => setSelectedMethod(m.id)}
                          className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-2.5 font-bold text-xs ${
                            selectedMethod === m.id ? "border-blue-700 bg-blue-50/80 text-blue-900" : "border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <m.icon className="w-4 h-4 text-blue-700" />
                          <span>{m.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedMethod === "upi" && (
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
                      <div className="flex items-center gap-2 font-black text-blue-900 text-xs uppercase tracking-wider">
                        <QrCode className="w-4 h-4 text-blue-700" /> Official Foundation UPI ID
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-blue-200 text-slate-900 font-mono text-sm font-bold flex justify-between items-center">
                        <span>telanganachessfoundation@upi</span>
                        <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-sans font-bold uppercase">Active</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Scan via Google Pay, PhonePe, Paytm, or BHIM UPI.</p>
                    </div>
                  )}

                  {selectedMethod === "bank" && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                      <div className="font-bold text-slate-900 text-sm">Bank Account Details:</div>
                      <div><strong>Account Name:</strong> Telangana Chess Foundation</div>
                      <div><strong>Account No:</strong> 50200084920194</div>
                      <div><strong>Bank:</strong> HDFC Bank</div>
                      <div><strong>IFSC Code:</strong> HDFC0001234</div>
                    </div>
                  )}

                  <div>
                    <Label className="block font-black text-xs uppercase tracking-wider text-slate-600 mb-2">Transaction Ref / UTR No.</Label>
                    <Input value={formData.txnRef} onChange={(e) => handleInputChange("txnRef", e.target.value)} placeholder="Enter 12-digit UTR or Transaction ID" className="h-12 rounded-xl bg-slate-50 border-slate-200 text-slate-900 font-mono" />
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing || !selectedCourse || !formData.name}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black h-14 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-blue-700/20 disabled:opacity-50"
                  >
                    {isProcessing ? "Verifying Transaction..." : `Submit Fee Payment (₹${selectedCourseData ? selectedCourseData.price.toLocaleString("en-IN") : 0})`}
                  </Button>
                </form>
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl space-y-6 sticky top-28">
                <h3 className="text-xl font-black text-slate-900">Summary</h3>

                {selectedCourseData ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                      <span>{selectedCourseData.name}</span>
                      <span>₹{selectedCourseData.price.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="h-px bg-slate-200" />
                    <div className="flex justify-between items-center text-lg font-black text-slate-900">
                      <span>Total Due</span>
                      <span className="text-blue-700">₹{selectedCourseData.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center text-slate-400 text-xs font-semibold space-y-2">
                    <AlertCircle className="w-8 h-8 mx-auto text-slate-300" />
                    <p>Select a program to view fee calculation.</p>
                  </div>
                )}

                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official Tax Invoice provided upon confirmation
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp support: +91 9864646481
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
