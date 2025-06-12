import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export function JadziaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "jadzia" }[]>([
    { text: "Cześć! Jestem Jadzia Kim, twoja wirtualna nauczycielka koreańskiego. W czym mogę Ci pomóc?", sender: "jadzia" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    
    // Simulate Jadzia typing
    setIsTyping(true);
    
    // Simulate response after delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { 
          text: "To świetne pytanie! Aby zacząć naukę koreańskiego, polecam najpierw zapoznać się z alfabetem Hangul. Mamy specjalny kurs dla początkujących, który krok po kroku wprowadza w podstawy języka.", 
          sender: "jadzia" 
        },
      ]);
    }, 1500);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl shadow-blue-500/20 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
                  <span className="text-lg font-bold">JK</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Jadzia Kim</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-800"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-blue-900/10 to-black/90 space-y-4">
              {messages.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-blue-900/30 border border-blue-900/50 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-blue-900/30 border border-blue-900/50 text-white max-w-[80%] rounded-2xl p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Input */}
            <div className="p-4 bg-blue-900/20 border-t border-blue-900/30">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Napisz wiadomość..."
                    className="w-full rounded-full bg-blue-900/30 border border-blue-900/50 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-gray-500"
                  />
                  <Button
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-blue-400 hover:bg-blue-900/30 hover:text-blue-300"
                >
                  <Sparkles className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-2 text-center">
                <span className="text-xs text-gray-500">Powered by Koreański.online AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}