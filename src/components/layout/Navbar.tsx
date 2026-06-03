import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/pan-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/documents", label: "Documents" },
  { to: "/inquiry", label: "Apply Now" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-elegant" : "bg-background/40 backdrop-blur"
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-hero grid place-items-center shadow-elegant group-hover:shadow-glow transition-smooth">
            <ShieldCheck className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-foreground">PAN Sahayak</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Trusted PAN Service</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-smooth",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="default">
            <Link to="/inquiry">Get Started</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-xl text-sm font-medium",
                    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/inquiry">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
