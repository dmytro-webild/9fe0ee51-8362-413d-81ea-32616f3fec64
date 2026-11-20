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
              name: "Calling Guide",
              href: "#about"
            },
            {
              name: "What to Share",
              href: "#product"
            }
          ]}
          cta={{
            text: "Call (818) 282-8559",
            href: "tel:818) 282-8559"
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
                },
                {
                  text: "Mon-Fri 8:00 AM - 5:00 PM",
                  href: "#home"
                }
              ]
            },
            {
              title: "Information",
              links: [
                {
                  text: "Plumbing Help",
                  href: "#home"
                },
                {
                  text: "Before You Call",
                  href: "#about"
                },
                {
                  text: "Details Needed",
                  href: "#product"
                }
              ]
            },
            {
              title: "Contact Direct",
              links: [
                {
                  text: "(818) 282-8559",
                  href: "tel:818) 282-8559"
                },
                {
                  text: "info@plumbingworkswh.com",
                  href: "mailto:info@plumbingworkswh.com"
                }
              ]
            },
            {
              title: "Concept Notice",
              links: [
                {
                  text: "Unofficial website concept",
                  href: "#home"
                },
                {
                  text: "Woodland Hills Plumbing Help",
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
