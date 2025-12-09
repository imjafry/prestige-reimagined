import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface BookVisitSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+880", country: "Bangladesh" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
  { code: "+968", country: "Oman" },
  { code: "+974", country: "Qatar" },
  { code: "+966", country: "Saudi" },
  { code: "+965", country: "Kuwait" },
  { code: "+65", country: "Singapore" },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export const BookVisitSidebar = ({
  isOpen,
  onClose,
  projectTitle,
}: BookVisitSidebarProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    whatsappActivated: false,
    project: projectTitle || "",
    scheduleDate: "",
    scheduleTime: "",
    newsletter: false,
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Site Visit Booked!",
      description: "We will confirm your visit shortly.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+91",
      mobile: "",
      whatsappActivated: false,
      project: "",
      scheduleDate: "",
      scheduleTime: "",
      newsletter: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/50 z-50"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-sm transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Content */}
            <div className="p-6 pt-16">
              <h2 className="font-display text-2xl text-foreground mb-8">
                REQUEST A CALLBACK
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name<span className="text-gold">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name<span className="text-gold">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Email<span className="text-gold">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile<span className="text-gold">*</span>
                  </label>
                  <div className="flex items-center border-b border-border">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-1 text-muted-foreground py-2 pr-2"
                      >
                        {formData.countryCode}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-sm shadow-lg z-10 max-h-40 overflow-y-auto">
                          {countryCodes.map((item) => (
                            <button
                              key={item.code}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, countryCode: item.code });
                                setShowCountryDropdown(false);
                              }}
                              className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                            >
                              {item.code} {item.country}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <Input
                      type="tel"
                      placeholder="Your Mobile"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      required
                      className="border-0 rounded-none bg-transparent px-0 focus-visible:ring-0 flex-1"
                    />
                  </div>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="whatsapp-visit"
                    checked={formData.whatsappActivated}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, whatsappActivated: checked as boolean })
                    }
                    className="border-charcoal data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                  />
                  <label htmlFor="whatsapp-visit" className="text-sm text-muted-foreground">
                    Do you have whatsapp activated on this number ?
                  </label>
                </div>

                {/* Project */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project<span className="text-gold">*</span>
                  </label>
                  <div className="border-b border-border">
                    <div className="flex items-center justify-between py-2">
                      <span className={formData.project ? "text-foreground" : "text-muted-foreground"}>
                        {formData.project || "Select Project"}
                      </span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Schedule Date */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Schedule Date<span className="text-gold">*</span>
                  </label>
                  <Input
                    type="date"
                    placeholder="Enter Schedule Date"
                    value={formData.scheduleDate}
                    onChange={(e) =>
                      setFormData({ ...formData, scheduleDate: e.target.value })
                    }
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold"
                  />
                </div>

                {/* Schedule Time */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Schedule Time
                  </label>
                  <div className="relative border-b border-border">
                    <button
                      type="button"
                      onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                      className="w-full flex items-center gap-2 py-2"
                    >
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className={formData.scheduleTime ? "text-foreground" : "text-muted-foreground"}>
                        {formData.scheduleTime || "Select Time"}
                      </span>
                    </button>
                    {showTimeDropdown && (
                      <div className="absolute top-full left-0 w-full mt-1 bg-background border border-border rounded-sm shadow-lg z-10 max-h-40 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, scheduleTime: time });
                              setShowTimeDropdown(false);
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-muted text-sm"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="newsletter-visit"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked as boolean })
                    }
                    className="border-charcoal data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5"
                  />
                  <label htmlFor="newsletter-visit" className="text-sm text-muted-foreground">
                    Yes, I want to stay informed and receive newsletter and marketing updates.
                  </label>
                </div>

                {/* Terms */}
                <p className="text-sm text-muted-foreground">
                  By submitting this form you agree to the{" "}
                  <a href="#" className="text-gold hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gold hover:underline">
                    Privacy Policy
                  </a>
                </p>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full py-6 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold"
                >
                  Send OTP
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
