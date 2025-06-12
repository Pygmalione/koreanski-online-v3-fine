import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/layout/theme-provider";
import { AnimatePresence } from "framer-motion";
import "./index.css";

// Pages
import Index from "./pages/index";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Logout from "./pages/logout";
import GoalsPage from "./pages/goals";
import TrialLessonPage from "./pages/trial-lesson";
import Dashboard from "./pages/dashboard";
import DesignSystemPage from "./pages/design-system";
import AnimationDemo from "./pages/animation-demo";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signup' element={<SignupForm />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/goals' element={<GoalsPage />} />
              <Route path='/trial-lesson' element={<TrialLessonPage />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/design-system' element={<DesignSystemPage />} />
              <Route path='/animation-demo' element={<AnimationDemo />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
        <Sonner />
        <Toaster />
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);