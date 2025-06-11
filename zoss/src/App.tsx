
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import UsageBenefits from "./pages/UsageBenefits";
import SubscriptionModel from "./pages/SubscriptionModel";
import B2CSolutions from "./pages/B2CSolutions";
import CommercialB2B from "./pages/CommercialB2B";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/usage-benefits" element={<UsageBenefits />} />
              <Route path="/subscription-model" element={<SubscriptionModel />} />
              <Route path="/b2c-solutions" element={<B2CSolutions />} />
              <Route path="/commercial-b2b" element={<CommercialB2B />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
