"use client";

import { useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  // 1. State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2. State for submission status and error handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 3. Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4. Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setErrorMessage(null);

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
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setSubmissionStatus("error");
        setErrorMessage("Failed to send your message. Please try again.");
        console.error("Formspree submission failed:", response.statusText);
      }
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12  lg:py-20">
      <h1 className="font-extrabold text-[64px] leading-none tracking-[-0.01em] text-center text-black">
        Contact Us
      </h1>
      <section className="">
        <main className="absolute top-[17rem] z-10 w-full mx-auto ">
          <div className="flex    items-center justify-center p-4">
            <div className="w-full max-w-[708px] bg-white rounded-3xl p-8 md:p-12 shadow-[1px_2px_35px_0px_rgba(57,57,57,0.1)]">
              <h1 className="font-medium text-[18px] leading-[120%] tracking-[-0.03em] mb-8">
                Please send your message below
              </h1>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {" "}
                {/* Add onSubmit handler */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      name="name" // Add name attribute
                      placeholder="Your name"
                      value={formData.name} // Control the input
                      onChange={handleInputChange} // Add onChange handler
                      className="p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 focus-visible:border-[#EBEAEA]  focus-visible:border-[2px] focus-visible:ring-[#EBEAEA] focus:ring-0 focus-visible:ring-0 border-[#EBEAEA]"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email" // Add name attribute
                      placeholder="Your email"
                      value={formData.email} // Control the input
                      onChange={handleInputChange} // Add onChange handler
                      className="p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 focus-visible:border-[#EBEAEA]  focus-visible:border-[2px] focus-visible:ring-[#EBEAEA] focus:ring-0 focus-visible:ring-0 border-[#EBEAEA]"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    name="message" // Add name attribute
                    placeholder="Your message"
                    rows={8}
                    value={formData.message} // Control the input
                    onChange={handleInputChange} // Add onChange handler
                    className="p-[20px] text-lg rounded-[16px] border-[2px] focus:outline-0 outline-0 min-h-[100px] resize-none focus-visible:border-[#EBEAEA]  focus-visible:border-[2px] focus-visible:ring-[#EBEAEA] focus:ring-0 focus-visible:ring-0 border-[#EBEAEA] "
                  />
                </div>
                {/* Submission feedback messages */}
                {submissionStatus === "success" && (
                  <p className="text-green-600 font-medium">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p className="text-red-600 font-medium">{errorMessage}</p>
                )}
                <div className="flex justify-start pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting} // Disable button during submission
                    className="bg-[#FF7E29] hover:bg-[#FF6602] text-white px-6 py-2 h-auto rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Submit"}
                    <ArrowRight className="w-5 h-5 ml-2" />{" "}
                    {/* Added ml-2 for spacing */}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
