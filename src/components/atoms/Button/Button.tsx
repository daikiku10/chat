"use client";
import { Button } from "@radix-ui/themes";
import { Children, ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

/**
 * ボタンコンポーネント
 */
const ChatButton = ({ children, onClick }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ChatButton;
