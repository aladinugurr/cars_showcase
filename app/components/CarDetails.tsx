"use client";
import { Fragment } from "react";
import Image from "next/image";
import { carProps } from "@types";

import { generateCardImageUrl } from "@utils";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isModalOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

const CarDetails = ({ isModalOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="easy-in duration-200"
            leaveTo="opaciry-0"
            leaveFrom="opacity-100"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="easy-in duration-200"
                leaveTo="opaciry-0 scale-100"
                leaveFrom="opacity-100 scale-95"
              >
                <Dialog.Panel className="p-5 relative w-full max-w-lg max-h-[90vh] transform overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all flex flex-col text-left">
                  <button
                    className="absolute top-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full right-3"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    ></Image>
                  </button>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        fill
                        priority
                        src={generateCardImageUrl(car)}
                        alt="car-model"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          fill
                          priority
                          src={generateCardImageUrl(car, "29")}
                          alt="car-model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          fill
                          priority
                          src={generateCardImageUrl(car, "33")}
                          alt="car-model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          fill
                          priority
                          src={generateCardImageUrl(car, "13")}
                          alt="car-model"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between w-full gap-5 text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
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
};

export default CarDetails;
