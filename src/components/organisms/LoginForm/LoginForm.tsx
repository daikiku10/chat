"use client";

import { Button } from "@/components/atoms/Button";
import { Text } from "@radix-ui/themes";

/**
 * ログインフォーム
 * @returns コンポーネント
 */
const LoginForm = () => {
  return (
    <div>
      <Text>なまえを入力</Text>
      <Button onClick={() => console.log("クリック")}>
        チャットをはじめる
      </Button>
    </div>
  );
};

export default LoginForm;
