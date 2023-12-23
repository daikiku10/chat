"use client";
import { Button } from "@radix-ui/themes";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Button>;

/**
 * ボタンコンポーネント
 */
const ChatButton = ({ children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>;
};

export default ChatButton;
