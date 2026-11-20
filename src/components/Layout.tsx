import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Plumbing Works"
          navItems={[
            {
              name: "Home",
              href: "#home"
            },
            {
              name: "Before You Call",
              href: "#about"
            }
          ]}
          cta={{
            text: "Call (818) 282-8559",
            href: "tel:+18182828559"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="tray" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="Plumbing Works"
          wordmark="Plumbing Works"
          columns={[
            {
              title: "Service Area",
              links: [
                {
                  text: "Woodland Hills, CA",
                  href: "#home"
                }
              ]
            },
            {
              title: "Before You Call",
              links: [
                {
                  text: "The Plumbing Issue",
                  href: "#about"
                },
                {
                  text: "Your Neighborhood",
                  href: "#about"
                },
                {
                  text: "Preferred Timing",
                  href: "#about"
                }
              ]
            },
            {
              title: "Direct Phone",
              links: [
                {
                  text: "(818) 282-8559",
                  href: "tel:+18182828559"
                }
              ]
            },
            {
              title: "Concept Notice",
              links: [
                {
                  text: "Unofficial website concept",
                  href: "#home"
                }
              ]
            }
          ]}
          copyright="© 2026 Plumbing Works. Unofficial website concept. All rights reserved."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
