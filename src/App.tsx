import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import WhyReusables from "./pages/WhyReusables";
import PromotionalMerchandise from "./pages/PromotionalMerchandise";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
     <BrowserRouter basename="/redrink-reimagined">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-reusables" element={<WhyReusables />} />
          <Route path="/promotional-merchandise" element={<PromotionalMerchandise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
