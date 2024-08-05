
export default function Whyus1() {


    return(
        <section id="why-us" className="py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Why Choose Aditya Clinic?`}</h2>
              <p className="text-muted-foreground mb-6">
                {`Our practice is dedicated to providing the highest quality of care for our patients. Here's why you should choose us:`}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
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
                    className="w-6 h-6 text-primary flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold">Experienced Doctors</h4>
                    <p className="text-muted-foreground">
                      Our team of doctors have years of experience in their respective fields, ensuring you receive
                      the best possible care.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
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
                    className="w-6 h-6 text-primary flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold">Personalized Approach</h4>
                    <p className="text-muted-foreground">
                      We take the time to understand your unique health needs and tailor our treatment plans
                      accordingly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
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
                    className="w-6 h-6 text-primary flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <div>
                    <h4 className="text-lg font-bold">Cutting-Edge Facilities</h4>
                    <p className="text-muted-foreground">
                      Our state-of-the-art facilities are equipped with the latest medical technology to ensure the
                      best possible care.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className="flex items-center justify-center">
              <img
                src="/img/dr1.jpg"
                
                alt="Doctor"
                className="rounded-lg shadow-lg full-w"
                // style="aspect-ratio: 500 / 500; object-fit: cover;"
              />
            </div>
          </div>
        </div>
      </section>
    )
}