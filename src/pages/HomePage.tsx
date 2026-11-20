import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop />

      <LoaderChipFill label="Plumbing Works" />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Unofficial website concept"
          title="Plumbing help in Woodland Hills"
          description="Reliable plumbing assistance for homeowners in Woodland Hills, California."
          primaryButton={{
            text: "Call (818) 282-8559",
            href: "tel:+18182828559"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/top-view-pipe-wrench-left-side-wooden-background-with-copy-space_141793-15202.jpg"
          imageAlt="pipe wrench on wooden background"
          introDelay={1.2}
          kpis={[
            {
              label: "Service location",
              value: "Woodland Hills",
              delta: "CA"
            },
            {
              label: "Direct line",
              value: "(818) 282-8559",
              delta: "Call"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="Before you call, have these three details ready"
          items={[
            {
              icon: "alert-circle",
              title: "The plumbing issue",
              description: "Describe what is leaking, clogged, or broken at your Woodland Hills property."
            },
            {
              icon: "map-pin",
              title: "Your neighborhood",
              description: "Tell us your specific location or street name within Woodland Hills."
            },
            {
              icon: "clock",
              title: "Preferred timing",
              description: "Let us know when you prefer our plumbing technician to visit your home."
            }
          ]}
        />
      </div>
    </>
  );
}
