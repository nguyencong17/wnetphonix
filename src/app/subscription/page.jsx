import Cta from "@/components/Cta/page";

const { default: Pricing } = require("@/components/Pricing/Pricing");

function Subscription() {
  return (
    <>
      <Pricing/>
      <Cta/>
    </>
  );
}

export default Subscription;