

export default function Faq1() {

    return (

        <section id="faq" className="py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-8">
          <div data-aos="fade" className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to some of the common questions our patients ask.
            </p>
          </div>
          <div className="mt-8 space-y-4">

          <details data-aos="fade-up" className="p-2 collapse collapse-arrow rounded-lg shadow">
            <summary className="collapse-title text-xl font-medium">What are your clinic hours?</summary>
            <div className="collapse-content">
            <p>Our clinic is open from 10 AM to 2 PM, 5:30 PM to 11 PM, Monday to Saturday.</p>
            <p>Our clinic is open from 10 AM to 2:30 PM, 5:30 PM to 11 PM, Only Sunday.</p>
            </div>
          </details>

          <details data-aos="fade-up" className="p-2 collapse collapse-arrow rounded-lg shadow">
            <summary className="collapse-title text-xl font-medium">Do you provide Home Visits?</summary>
            <div className="collapse-content">
            <p>Yeah I do provide home visit.</p>
            </div>
          </details>

          <details data-aos="fade-up" className="p-2 collapse collapse-arrow rounded-lg shadow">
            <summary className="collapse-title text-xl font-medium">How can I book an appointment?</summary>
            <div className="collapse-content">
            <p>You can book an appointment by calling us at +91 7208253036 or by filling the above form.</p>
            </div>
          </details>
            
           
          </div>  
        </div>
      </section>
    )
}