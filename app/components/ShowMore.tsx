"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@utils";

type Props = {};

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber += 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="flex-center mt-10 gap-5 w-full ">
      {!isNext && (
        <CustomButton
          title="Show More"
          type="button"
          containerStyles="bg-primary-blue
          rounded-full
          text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
