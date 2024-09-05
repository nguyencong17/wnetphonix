import Cta from "@/components/Cta/page";
import Faq from "@/components/Faq/Faq";
import { Social } from "@/components/Social/Social";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Support() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between gap-16 mt-32 mb-32">
          <div>
            <h1 className="text-[46px] lg:max-w-[550px] mb-4 leading-[1.2]">
              Welcome to our StreamVibe support page!
            </h1>
            <p className="text-[18px] mb-4">
              We're here to help you with any problems you may be having with
              our product.
            </p>
            <div className="flex gap-4 items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p>noreply@gmailc.com</p>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <div className="flex gap-4 items-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <p>+84 123.456.789</p>
            </div>
            <Social />
          </div>
          <form
            action=""
            className="flex flex-1 flex-col gap-4 p-8 bg-[#1A1A1A] rounded-lg items-end"
          >
            <div className="grid grid-cols-2 gap-4 w-full">
              <Input type="text" placeholder="Enter First Name" />
              <Input type="text" placeholder="Enter Last Name" />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Input type="email" placeholder="Enter your email" />
              <Input type="text" placeholder="Enter Phone Number" />
            </div>
            <Textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></Textarea>
            <button
              type="submit"
              className="flex items-center space-x-2 hover:text-white bg-[#E50000] rounded-lg px-8 py-4 text-white font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Faq />
      <Cta />
    </>
  );
}

export default Support;
