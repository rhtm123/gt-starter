import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";


export default function Services1(){



    return (
        <section id="services" className="py-12 bg-base-200 md:py-16 lg:py-20">
  <div className="px-4 md:px-8">
    <div data-aos="fade" className="flex flex-col items-center justify-center space-y-2 pb-6 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        From routine check-ups to specialized treatments, our team of experienced doctors and nurses are here to
        provide the care you and your family need.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="w-8 h-8 mb-4 text-primary"
    >
      <path d="M12 6v4"></path>
      <path d="M14 14h-4"></path>
      <path d="M14 18h-4"></path>
      <path d="M14 8h-4"></path>
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
    </svg>
    <h3 className="text-2xl font-bold mb-2">Preventive Care</h3>
    <p className="text-muted-foreground">
      Comprehensive preventive care to maintain and improve your overall health and well-being.
    </p>
  </div>
  <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="w-8 h-8 mb-4 text-primary"
    >
      <path d="M9 12h.01"></path>
      <path d="M15 12h.01"></path>
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
    </svg>
    <h3 className="text-2xl font-bold mb-2">Primary Care</h3>
    <p className="text-muted-foreground">
      Comprehensive primary care services for patients of all ages, from newborns to seniors.
    </p>
  </div>
  <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="w-8 h-8 mb-4 text-primary"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
    </svg>
    <h3 className="text-2xl font-bold mb-2">Health Checkups</h3>
    <p className="text-muted-foreground">
      Routine health checkups to assess and monitor your overall health.
    </p>
  </div>
  <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md">
    <FaUserDoctor className="w-8 h-8 mb-4 text-primary" />
    <h3 className="text-2xl font-bold mb-2">Chronic Disease Care</h3>
    <p className="text-muted-foreground">
      Specialized care for chronic conditions such as diabetes, hypertension, and heart disease.
    </p>
  </div>
  <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md">
    <GiMedicines className="w-8 h-8 mb-4 text-primary" />
    <h3 className="text-2xl font-bold mb-2">Acute Illness Treatment</h3>
    <p className="text-muted-foreground">
      Prompt and effective treatment for acute illnesses such as colds, flu, and infections.
    </p>
  </div>
  <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md">
    <MdFamilyRestroom className="w-8 h-8 mb-4 text-primary" />
    <h3 className="text-2xl font-bold mb-2">Family Planning Services</h3>
    <p className="text-muted-foreground">
      Comprehensive family planning services including counseling and various contraceptive options.
    </p>
  </div>
</div>


  </div>
</section>
    )
}