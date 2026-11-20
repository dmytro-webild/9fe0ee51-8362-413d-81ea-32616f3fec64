import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import FeaturesStackingTilesMakro from "@/components/sections/features/FeaturesStackingTilesMakro";
import PricingTrayPlans from "@/components/sections/pricing/PricingTrayPlans";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop

      />

      <LoaderChipFill
        label="Plumbing Works"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Unofficial website concept"
          title="Plumbing help in Woodland Hills"
          description="Reliable plumbing assistance and professional service for homeowners in Woodland Hills, California."
          primaryButton={{
            text: "Call (818) 282-8559",
            href: "tel:818) 282-8559"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/top-view-pipe-wrench-left-side-wooden-background-with-copy-space_141793-15202.jpg"
          imageAlt="water flowing from a faucet"
          introDelay={1.2}
          kpis={[
            {
              label: "Service location",
              value: "91367",
              delta: "CA"
            },
            {
              label: "Hours of operation",
              value: "8am - 5pm",
              delta: "Mon-Fri"
            },
            {
              label: "Direct line",
              value: "Active",
              delta: "Call"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="Before you call, have these three details ready so our Woodland Hills plumbing team can assist you efficiently."
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

      <div id="product" data-webild-section="FeaturesStackingTilesMakro" data-webild-section-id="FeaturesStackingTilesMakro-1" data-section="product" data-tone="card">
        <FeaturesStackingTilesMakro
          items={[
            {
              tag: "Step 1",
              icon: "file-text",
              title: "The issue",
              description: "Describe what is happening with your pipes, fixtures, or water flow when calling.",
              note: "Helps us bring the right tools",
              imageSrc: "https://img.b2bpic.net/free-photo/plumber-repair-experienced-attentive-middleaged-man-examining-bottom-kitchen-sink_259150-58266.jpg",
              imageAlt: "Plumber repair Experienced attentive middleaged man examining bottom of kitchen sink"
            },
            {
              tag: "Step 2",
              icon: "map-pin",
              title: "Neighborhood",
              description: "Tell us your specific location or cross streets in Woodland Hills.",
              note: "Confirms service in Woodland Hills",
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-man-working-as-plumber_23-2150746303.jpg",
              imageAlt: "Side view man working as plumber"
            },
            {
              tag: "Step 3",
              icon: "clock",
              title: "Preferred timing",
              description: "Let us know when you are available or if you need assistance as soon as possible.",
              note: "Scheduled during our working hours",
              imageSrc: "https://img.b2bpic.net/free-photo/white-kitchen-sink-faucet-close-up_58702-1750.jpg",
              imageAlt: "White kitchen sink faucet  - Close up"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingTrayPlans" data-webild-section-id="PricingTrayPlans-1" data-section="pricing">
        <PricingTrayPlans
          tag="Service Guidance"
          title="Plumbing assistance in"
          highlight="Woodland Hills"
          description="Call Plumbing Works at (818) 282-8559 for reliable local plumbing assistance."
          items={[
            {
              name: "Basic Repairs",
              description: "Help with leaky faucets, clogged sinks, and pipe fixes.",
              price: "Call",
              period: "for assistance",
              features: [
                "Woodland Hills local service",
                "Direct phone guidance",
                "Standard operating hours"
              ],
              cta: {
                text: "Call (818) 282-8559",
                href: "tel:818) 282-8559"
              }
            },
            {
              name: "Fixture Help",
              description: "Assistance for bathroom, kitchen, and laundry plumbing fixtures.",
              price: "Call",
              period: "for assistance",
              highlighted: true,
              includesPrevious: true,
              features: [
                "Everything in Basic Repairs",
                "Kitchen and bath fixtures",
                "Drain and pipe inspection"
              ],
              cta: {
                text: "Call (818) 282-8559",
                href: "tel:818) 282-8559"
              }
            },
            {
              name: "Pipe Service",
              description: "General plumbing evaluations and local pipe maintenance.",
              price: "Call",
              period: "for assistance",
              includesPrevious: true,
              features: [
                "Everything in Fixture Help",
                "Residential plumbing review",
                "Clear project guidance"
              ],
              cta: {
                text: "Call (818) 282-8559",
                href: "tel:818) 282-8559"
              }
            }
          ]}
          enterprise={{
            label: "Direct Call",
            title: "Need immediate plumbing guidance?",
            description: "Speak directly with Plumbing Works in Woodland Hills to share your issue, neighborhood, and timing.",
            cta: {
              text: "Call (818) 282-8559",
              href: "tel:818) 282-8559"
            }
          }}
        />
      </div>

      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Local Reviews"
          title="Woodland Hills customer experiences"
          items={[
            {
              company: "Woodland Hills Home",
              quote: "I called Plumbing Works with my plumbing issue and neighborhood details ready. The phone clear guidance made organizing service straightforward.",
              name: "Molly Walsh",
              role: "Homeowner, Woodland Hills",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-smiling-blonde-young-woman-sitting-sofa-looking-camera_23-2148029185.jpg",
              stats: [
                {
                  label: "Area",
                  value: "Woodland Hills"
                },
                {
                  label: "Contact",
                  value: "Direct Call"
                }
              ]
            },
            {
              company: "Topanga Area Home",
              quote: "Having the issue description and timing preferred before calling (818) 282-8559 helped get practical plumbing guidance right away.",
              name: "Andre Graham",
              role: "Resident, Woodland Hills",
              imageSrc: "https://img.b2bpic.net/free-photo/airbnb-host-welcoming-guests_23-2149872043.jpg",
              stats: [
                {
                  label: "Location",
                  value: "Woodland Hills"
                },
                {
                  label: "Hours",
                  value: "Mon-Fri 8-5"
                }
              ]
            },
            {
              company: "Local Property",
              quote: "Plumbing Works explained exactly what details to share over the phone, making local service inquiries quick and simple.",
              name: "Megan Bennett",
              role: "Property Owner, CA",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-beautiful-woman-listening-music_23-2148586256.jpg",
              stats: [
                {
                  label: "Phone Service",
                  value: "(818) 282-8559"
                },
                {
                  label: "Status",
                  value: "Local Assistance"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Call Plumbing Works in Woodland Hills"
          formTitle="Call (818) 282-8559 today"
          fields={{
            name: "Your Name",
            email: "Your Email",
            company: "Neighborhood",
            message: "Plumbing Issue Details"
          }}
          placeholders={{
            name: "Enter your full name",
            email: "Enter your email",
            company: "Woodland Hills neighborhood",
            message: "Describe your plumbing issue and timing"
          }}
          submitText="Call (818) 282-8559"
          successText="Thank you for reaching out to Plumbing Works."
          imageSrc="https://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721549.jpg"
          imageAlt="Plumbing professional doing his job"
          ariaLabel="Contact Plumbing Works in Woodland Hills"
        />
      </div>
    </>
  );
}
