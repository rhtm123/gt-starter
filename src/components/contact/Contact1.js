
import { IoHomeOutline } from "react-icons/io5";

export default function Contact1() {


    return (
        <section id="visit-us" className="w-full py-12 md:py-24 lg:py-32 bg-base-100">
 
    <div className="px-4 md:px-8">

        <div data-aos="fade">
        <h2  className="text-3xl font-bold sm:text-4xl md:text-5xl">Visit Us</h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Come see us in person at our clinic.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div data-aos="fade-up" className="space-y-4 py-4 p-4 my-4 rounded-xl bg-base-200">
        <div className="flex items-center gap-4">
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
            className="h-6 w-6 text-primary"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div>
            <div className="font-medium">Phone</div>
            <a href="#" className="text-muted-foreground hover:underline">
              +91 9028-43-7292
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
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
            className="h-6 w-6 text-primary"
          >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
          </svg>
          <div>
            <div className="font-medium">Email</div>
            <a href="#" className="text-muted-foreground hover:underline">
              dy8277554@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          
          <IoHomeOutline size={24} className="h-6 w-6 text-primary" />
          <div>
            <div className="font-medium">Address</div>
            <p className="text-muted-foreground">Shop No 09, Casita Enclave, near Seven Square Academy School, Naigaon East, Maharashtra</p>
          </div>
          </div>

          </div>

          
          <div data-aos="fade-up" className="my-4">
          <div className="w-full border rounded-xl">
          <iframe className="w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15056.541067988197!2d72.8603544!3d19.3632948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af91fcb511b9%3A0x3a4f1d8bd63944b0!2sAditya%20Clinic!5e0!3m2!1sen!2sin!4v1721459560799!5m2!1sen!2sin" width="auto" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          </div>
        </div>
      </div>
    </section>
    )
}