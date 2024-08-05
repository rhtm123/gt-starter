

export function Hero1(){

    return(
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 data-aos="fade" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Welcome to Aditya Clinic
              </h1>
              <p data-aos="fade-up" className="max-w-[600px] text-muted-foreground md:text-lg">
                {`The clinic is dedicated to providing high-quality medical care to patients of all ages, ranging from newborns to seniors. With a team of experienced and compassionate doctors, nurses, and support staff, Aditya Clinic is committed to helping patients achieve optimal health outcomes`}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                data-aos="zoom-in"
                className="btn btn-primary"
                href="#contact"
              >
                Book Appointment
              </a>
              <a
                data-aos="zoom-in"
                className="btn btn-primary"
                href={"tel:"+process.env.MOBILE_NUMBER}
              >
                Call us
              </a>
            </div>
          </div>
          <img
    
            data-aos="fade-up"
            src="/img/dr2.jpg"
            
            alt="Doctor"
            className="rounded-xl w-full"
          />
        </div>
      </section>
    )
}