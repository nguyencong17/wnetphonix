import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IconButton from "../IconButton/IconButton";
import { Button } from "../ui/button";
import Link from "next/link";

function Plan() {
  return (
    <div className="pricing">
      <div className="container mx-auto relative px-4">
        <div className="flex items-center justify-between text-center lg:text-left">
          <div className="max-w-[1100px]">
            <h3 className="mb-4">Choose the plan that's right for you</h3>
            <p className="">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
        </div>
        <div>
          <Tabs defaultValue="monthly" className="text-center lg:text-left">
            <TabsList className="lg:absolute top-[32px] right-0 mt-[32px] lg:m-0 rounded-lg bg-secondary border border-neutral-600 p-1 h-auto">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="mt-10 lg:mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-7 lg:p-12 rounded-lg border">
                  <h4>Basic Plan</h4>
                  <p className="mt-4 text-[18px]">
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </p>
                  <div className="flex items-end justify-center lg:justify-start mt-10">
                    <h3 className="mb-0 leading-none text-[40px]">$9.99</h3>
                    <p className="mx-2">/</p>
                    <p className="text-[18px]">month</p>
                  </div>
                  <div className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start">
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]' variant="secondary">Start Free Trial</Button>
                    </Link>
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]'>Choose Plan</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-7 lg:p-12 rounded-lg border">
                  <h4>Standard Plan</h4>
                  <p className="mt-4 text-[18px]">
                    Access to a wider selection of movies and shows, including
                    most new releases and exclusive content
                  </p>
                  <div className="flex items-end justify-center lg:justify-start mt-10">
                    <h3 className="mb-0 leading-none text-[40px]">$12.99</h3>
                    <p className="mx-2">/</p>
                    <p className="text-[18px]">month</p>
                  </div>
                  <div className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start">
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]' variant="secondary">Start Free Trial</Button>
                    </Link>
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]'>Choose Plan</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-7 lg:p-12 rounded-lg border">
                  <h4>Premium Plan</h4>
                  <p className="mt-4 text-[18px]">
                    Access to a widest selection of movies and shows, including
                    all new releases and Offline Viewing
                  </p>
                  <div className="flex items-end justify-center lg:justify-start mt-10">
                    <h3 className="mb-0 leading-none text-[40px]">$14.99</h3>
                    <p className="mx-2">/</p>
                    <p className="text-[18px]">month</p>
                  </div>
                  <div className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start">
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]' variant="secondary">Start Free Trial</Button>
                    </Link>
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]'>Choose Plan</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="yearly" className="mt-10 lg:mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-7 lg:p-12 rounded-lg border">
                  <h4>Basic Plan +</h4>
                  <p className="mt-4 text-[18px]">
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </p>
                  <div className="flex items-end justify-center lg:justify-start mt-10">
                    <h3 className="mb-0 leading-none text-[40px]">$16.9</h3>
                    <p className="mx-2">/</p>
                    <p className="text-[18px]">month</p>
                  </div>
                  <div className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start">
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]' variant="secondary">Start Free Trial</Button>
                    </Link>
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]'>Choose Plan</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-7 lg:p-12 rounded-lg border">
                  <h4>Standard Plan +</h4>
                  <p className="mt-4 text-[18px]">
                    Access to a wider selection of movies and shows, including
                    most new releases and exclusive content
                  </p>
                  <div className="flex items-end justify-center lg:justify-start mt-10">
                    <h3 className="mb-0 leading-none text-[40px]">$19.99</h3>
                    <p className="mx-2">/</p>
                    <p className="text-[18px]">month</p>
                  </div>
                  <div className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start">
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]' variant="secondary">Start Free Trial</Button>
                    </Link>
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]'>Choose Plan</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-7 lg:p-12 rounded-lg border">
                  <h4>Premium Plan +</h4>
                  <p className="mt-4 text-[18px]">
                    Access to a widest selection of movies and shows, including
                    all new releases and Offline Viewing
                  </p>
                  <div className="flex items-end justify-center lg:justify-start mt-10">
                    <h3 className="mb-0 leading-none text-[40px]">$24.99</h3>
                    <p className="mx-2">/</p>
                    <p className="text-[18px]">month</p>
                  </div>
                  <div className="flex gap-4 mt-10 flex-wrap justify-center lg:justify-start">
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]' variant="secondary">Start Free Trial</Button>
                    </Link>
                    <Link href={"/pricing"}>
                      <Button className='p-4 w-auto h-auto text-[16px]'>Choose Plan</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Plan;
