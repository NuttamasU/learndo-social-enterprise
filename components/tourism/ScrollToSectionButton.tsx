"use client";

import { IconArrowRight } from "@tabler/icons-react";

type Props = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
};

export default function ScrollToSectionButton({
  targetId,
  children,
  className,
}: Props) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
    >
      {children}
      <IconArrowRight size={17} />
    </button>
  );
}