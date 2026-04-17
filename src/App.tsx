import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Menu from "./pages/Menu.tsx";
import About from "./pages/About.tsx";
import Events from "./pages/Events.tsx";
import Gallery from "./pages/Gallery.tsx";
import Reservations from "./pages/Reservations.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/the-glass-house/" element={<Index />} />
          <Route path="/the-glass-house/menu" element={<Menu />} />
          <Route path="/the-glass-house/about" element={<About />} />
          <Route path="/the-glass-house/events" element={<Events />} />
          <Route path="/the-glass-house/gallery" element={<Gallery />} />
          <Route path="/the-glass-house/reservations" element={<Reservations />} />
          <Route path="/the-glass-house/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
