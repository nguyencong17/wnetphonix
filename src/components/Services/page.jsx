import Image from "next/image";
import sv1 from "../../../public/services/sv-1.svg";
import sv2 from "../../../public/services/sv-2.svg";
import sv3 from "../../../public/services/sv-3.svg";
import sv4 from "../../../public/services/sv-4.svg";
import sv5 from "../../../public/services/sv-5.svg";
import sv6 from "../../../public/services/sv-6.svg";
function Services(props) {
  return (
    <div className="service relative">
      <div className="container mx-auto px-4 py-[96px] lg:py-[128px]">
        <div className="max-w-[1100px]">
          <h3 className="mb-4 text-[28px] lg:text-[36px]">
            We Provide you streaming experience across various devices.
          </h3>
          <p className="mb-8">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className="grid grid- cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex gap-8 p-[40px] border rounded-lg bg-secondary items-start">
            <Image src={sv1} alt="sv1" width={72} height={72} />
            <div className="flex-1">
              <h5 className="mb-2">Smartphones</h5>
              <p className="leading-normal">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-[40px] border rounded-lg bg-secondary items-start">
            <Image src={sv2} alt="sv2" width={72} height={72} />
            <div className="flex-1">
              <h5 className="mb-2">Tablet</h5>
              <p className="leading-normal">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-[40px] border rounded-lg bg-secondary items-start">
            <Image src={sv3} alt="sv3" width={72} height={72} />
            <div className="flex-1">
              <h5 className="mb-2">Smart TV</h5>
              <p className="leading-normal">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-[40px] border rounded-lg bg-secondary items-start">
            <Image src={sv4} alt="sv4" width={72} height={72} />
            <div className="flex-1">
              <h5 className="mb-2">Laptops</h5>
              <p className="leading-normal">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-[40px] border rounded-lg bg-secondary items-start">
            <Image src={sv5} alt="sv5" width={72} height={72} />
            <div className="flex-1">
              <h5 className="mb-2">Gaming Consoles</h5>
              <p className="leading-normal">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
          <div className="flex gap-8 p-[40px] border rounded-lg bg-secondary items-start">
            <Image src={sv6} alt="sv6" width={72} height={72} />
            <div className="flex-1">
              <h5 className="mb-2">VR Headsets</h5>
              <p className="leading-normal">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
