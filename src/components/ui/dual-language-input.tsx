import { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export interface DualLanguageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  polishPlaceholder?: string;
  koreanPlaceholder?: string;
  error?: string;
  showLanguageToggle?: boolean;
}

export const DualLanguageInput = forwardRef<HTMLInputElement, DualLanguageInputProps>(
  ({ 
    className, 
    label, 
    polishPlaceholder = "Wpisz tekst...", 
    koreanPlaceholder = "텍스트를 입력하세요...", 
    error, 
    showLanguageToggle = true,
    ...props 
  }, ref) => {
    const [isKorean, setIsKorean] = useState(false);
    
    const toggleLanguage = () => {
      setIsKorean(!isKorean);
    };

    return (
      <div className="space-y-2">
        {label && (
          <div className="flex items-center justify-between">
            <Label htmlFor={props.id}>{label}</Label>
            {showLanguageToggle && (
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center text-xs text-primary-500 hover:text-primary-600"
              >
                <Globe className="h-3 w-3 mr-1" />
                {isKorean ? "Polski" : "한국어"}
              </button>
            )}
          </div>
        )}
        
        <div className="relative">
          <Input
            ref={ref}
            className={cn(
              "pr-10",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            placeholder={isKorean ? koreanPlaceholder : polishPlaceholder}
            {...props}
          />
          
          {showLanguageToggle && (
            <button
              type="button"
              onClick={toggleLanguage}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-500"
            >
              <Globe className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

DualLanguageInput.displayName = "DualLanguageInput";