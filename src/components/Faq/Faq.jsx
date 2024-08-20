import React from "react";
import IconButton from "../IconButton/IconButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq(props) {
  return (
    <div className="faq">
      <div className="container mx-auto pb-[128px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[1100px]">
            <h3 className="mb-4">Frequently Asked Questions</h3>
            <p className="mb-8">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <IconButton label={"Ask a Question"} />
        </div>
        <div className="flex gap-16">
          <div className="flex-1">
            <Accordion type="single" collapsible className="arcodion-item pb-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">01</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" collapsible className="arcodion-item py-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">02</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">How much does StreamVibe cost?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" collapsible className="arcodion-item py-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">03</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">What content is available on StreamVibe?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" collapsible className="arcodion-item py-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">04</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">How can I watch StreamVibe?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="flex-1">
            <Accordion type="single" collapsible className="arcodion-item pb-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">05</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">How do I sign up for StreamVibe?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" collapsible className="arcodion-item py-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">06</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">What is the StreamVibe free trial?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" collapsible className="arcodion-item py-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">07</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">What are the StreamVibe payment methods?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
            <Accordion type="single" collapsible className="arcodion-item py-8">
              <div className="flex gap-8">
                <div className="w-[68px] h-[68px] bg-[#343434] rounded-[8px] flex items-center justify-center text-white font-bold text-[20px]">08</div>
                <div className="flex-1">
                  <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger className="text-white leading-normal text-[24px]">How do I contact StreamVibe customer support?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
