"use client";
import { ICar } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

type CarDetailProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: ICar;
};

function CarDetail({ isOpen, closeModal, car }: CarDetailProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='mt-4'>
                    <button
                      type='button'
                      className=' absolute top-2 right-2 inline-flex justify-center rounded-md border border-transparent  text-sm font-medium  hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      <Image
                        src={"/close.svg"}
                        alt='close'
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                  <div className='flex-1 flex flex-col gap-3 mt-5'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                      <Image
                        src={generateCarImageUrl(car)}
                        alt='hero'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt='hero'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt='hero'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt='hero'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {car.make} {car.model}
                    </h2>
                    <div className='mt-3 flex flex-wrap gap-4'>
                      {Object.entries(car).map(([key, value]: string[]) => (
                        <div
                          className='flex justify-between gap-5 w-full text-right'
                          key={key}
                        >
                          <h4 className='text-grey capitalize'>
                            {key.split("_").join(" ")}
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {key !== "transmission"
                              ? value
                              : value === "a"
                              ? "Automatic"
                              : "Manual"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetail;
