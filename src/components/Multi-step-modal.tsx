"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "./ui/Visually-Hidden";

interface FormData {
  services: string[];
  customService: string;
  name: string;
  email: string;
  project: string;
}

interface MultiStepModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  "Web Design",
  "Mobile App",
  "Web App",
  "Web Development",
  "Game Design",
  "Other",
];

export default function MultiStepModal({
  open,
  onOpenChange,
}: MultiStepModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    customService: "",
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{
    services?: string;
    customService?: string;
    name?: string;
    email?: string;
    project?: string;
  }>({});

  // Add validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep1 = (): boolean => {
    const newErrors: typeof errors = {};

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (
      formData.services.includes("Other") &&
      formData.customService.trim() === ""
    ) {
      newErrors.customService = "Please specify your custom service";
    } else if (
      formData.services.includes("Other") &&
      formData.customService.trim().length < 3
    ) {
      newErrors.customService = "Custom service must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: typeof errors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFieldError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));

    // Clear custom service input if "Other" is deselected
    if (service === "Other" && formData.services.includes(service)) {
      setFormData((prev) => ({
        ...prev,
        customService: "",
      }));
    }

    // Clear related errors
    clearFieldError("services");
    if (service === "Other") {
      clearFieldError("customService");
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field when user starts typing
    clearFieldError(field as keyof typeof errors);
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      // This shouldn't happen as step 2 goes to submit
      setCurrentStep(3);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const formspreeEndpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully to Formspree!");
        setCurrentStep(3);
        setFormData({
          services: [],
          customService: "",
          name: "",
          email: "",
          project: "",
        });
        setErrors({});
      } else {
        console.error("Formspree submission failed:", response.statusText);
        setSubmissionError("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  // Update the validation logic for button states
  const canContinueStep1 = () => {
    if (formData.services.length === 0) return false;
    if (
      formData.services.includes("Other") &&
      formData.customService.trim().length < 3
    )
      return false;
    return true;
  };

  const canContinueStep2 = () => {
    if (formData.name.trim().length < 2) return false;
    if (formData.email.trim() === "" || !validateEmail(formData.email))
      return false;
    return true;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 bg-white rounded-3xl border-0">
        <div className="relative p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
                style={{
                  width:
                    currentStep === 1
                      ? "33%"
                      : currentStep === 2
                      ? "66%"
                      : "100%",
                }}
              />
            </div>
          </div>
          <VisuallyHidden>
            <DialogTitle>Accessible Dialog Title</DialogTitle>
          </VisuallyHidden>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold sm:text-[28px] leading-[120%] tracking-[-0.03em] text-[#1F1E1E] mb-4">
                  What will you like to do?
                </h2>
                <p className="text-[#8A8888] font-medium text-[18px] leading-[120%] tracking-[-0.03em]">
                  Select as many that applies.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`p-3 sm:p-4 rounded-full border-[1.5px] leading-[120%] tracking-[-0.03em] text-base sm:text-[18px] font-normal transition-all ${
                        formData.services.includes(service)
                          ? "border-[#FF7E29] bg-orange-50 text-[#FF7E29]"
                          : errors.services
                          ? "border-red-300 bg-transparent text-[#2E2D2D] hover:border-red-400"
                          : "border-[#EBEAEA] bg-transparent text-[#2E2D2D] hover:border-[#EBEAEA]"
                      }`}>
                      {service}
                    </button>
                  ))}
                </div>

                {errors.services && (
                  <p className="text-red-500 text-sm mt-2">{errors.services}</p>
                )}

                {formData.services.includes("Other") && (
                  <div className="mt-4">
                    <Input
                      placeholder="Please specify your service..."
                      value={formData.customService}
                      onChange={(e) =>
                        handleInputChange("customService", e.target.value)
                      }
                      className={`p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 focus:ring-0 focus-visible:ring-0 ${
                        errors.customService
                          ? "border-red-300 focus-visible:border-red-400"
                          : "border-[#EBEAEA] focus-visible:border-[#FF7E29]"
                      }`}
                    />
                    {errors.customService && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.customService}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-6">
                <Button
                  onClick={handleNext}
                  disabled={!canContinueStep1()}
                  className={`px-6 py-2 h-auto rounded-full text-lg font-medium transition-all ${
                    canContinueStep1()
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}>
                  Continue <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Information Form */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:font-bold text-[28px] leading-[120%] tracking-[-0.03em] text-[#1F1E1E]">
                  We'd like to know you
                </h2>
                <p className="font-medium text-[16px] py-1 leading-[120%] tracking-[-0.03em] text-[#8A8888]">
                  Please fill in your information.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 focus:ring-0 focus-visible:ring-0 ${
                        errors.name
                          ? "border-red-300 focus-visible:border-red-400"
                          : "border-[#EBEAEA] focus-visible:border-[#EBEAEA]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 focus:ring-0 focus-visible:ring-0 ${
                        errors.email
                          ? "border-red-300 focus-visible:border-red-400"
                          : "border-[#EBEAEA] focus-visible:border-[#EBEAEA]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <Textarea
                  placeholder="Tell us more about your project..."
                  value={formData.project}
                  onChange={(e) => handleInputChange("project", e.target.value)}
                  className="p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 min-h-[100px] resize-none focus-visible:border-[#EBEAEA] focus-visible:border-[2px] focus-visible:ring-[#EBEAEA] focus:ring-0 focus-visible:ring-0 border-[#EBEAEA]"
                />
              </div>

              {submissionError && (
                <p className="text-red-500 text-sm mt-2">{submissionError}</p>
              )}

              <div className="flex justify-start space-x-4 pt-6">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="px-6 py-2 h-auto rounded-full font-medium text-[18px] leading-[160%] tracking-[-0.03em] hover:bg-transparent border-[#FFF0E5]">
                  <ArrowLeft className="w-5 h-5 mr-2" /> Go back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!canContinueStep2() || isSubmitting}
                  className={`px-6 py-2 h-auto rounded-full text-lg font-medium transition-all ${
                    canContinueStep2() && !isSubmitting
                      ? "bg-[#FF7E29] hover:bg-[#FF6602] text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}>
                  {isSubmitting ? "Submitting..." : "Submit"}{" "}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Thank You */}
          {currentStep === 3 && (
            <div className="text-center space-y-6 py-6">
              <div className="flex justify-center">
                <div className=" h-[117px] w-[190px]">
                  <img src={"/icons/thankyou.svg"} alt="Thank You" />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold sm:text-[28px] leading-[120%] tracking-[-0.03em] text-center mb-4">
                  Thank you!
                </h2>
                <p className="font-normal text-[18px] leading-[160%] tracking-[-0.03em] text-center text-[#8A8888] max-w-md mx-auto">
                  That's all for now, you'll get a response from us in 3 working
                  days.
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
