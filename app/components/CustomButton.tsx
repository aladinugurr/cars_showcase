"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  rightIcon,
  type,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            alt="right-icon"
            src={rightIcon}
            fill
            className="object-contain"
          ></Image>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
