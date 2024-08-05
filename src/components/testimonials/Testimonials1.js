

export default function Testimonials1() {


    return(
        <section id="testimonials" className="py-12 md:py-16 lg:py-20 ">
        <div className="px-4 md:px-8">
          <div data-aos="fade" className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our patients have to say about their experiences at Aditya Clinic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 ">
            <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p className="text-muted-foreground italic">{`"He has now become our family doctor, trust me how he treats his patient outstandingly, at low fees, great😊"`}</p>
              <p className="text-right font-bold">- Ranjan Mishra</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              </div>
            </div>
            <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p className="text-muted-foreground italic">{`"Best knowledgeable doctor and good conversation skill and perfect treatment in Naigaon East."`}</p>
              <p className="text-right font-bold">- Ashish Kumar</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              </div>
            </div>
            <div data-aos="fade-up" className="bg-card p-6 rounded-lg shadow-md bg-base-100">
              <p className="text-muted-foreground italic">{`"Aditya Clinic is my go-to place for all my healthcare needs. The doctors are knowledgeable and the services are comprehensive."`}</p>
              <p className="text-right font-bold">- Santosh Yadav</p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              </div>
            </div>
          </div>

          <p data-aos="fade" className="text-center py-4">Visit <a target="_blank" className="text-primary" href="https://maps.app.goo.gl/7hpwq6WBE6rhCnkB9">Google Maps</a> to read more reviews</p>
        </div>
    </section>
    )

}