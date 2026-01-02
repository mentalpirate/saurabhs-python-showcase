import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Saurabh Choudhary
            <span className="text-primary">/&gt;</span>
            <span className="mx-2">•</span>
            © {new Date().getFullYear()}
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with
            <Heart className="w-4 h-4 text-primary mx-1" />
            and Python
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
