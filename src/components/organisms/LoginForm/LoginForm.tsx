"use client";

import { Button } from "@/components/atoms/Button";
import { Text } from "@radix-ui/themes";
import * as styles from "./LoginForm.css";
import { registerLoginUser } from "./hooks";
import { useRouter } from "next/navigation";

/**
 * ログインフォーム
 * @returns コンポーネント
 */
const LoginForm = () => {
  const router = useRouter();
  return (
    <div>
      <form
        action="/chat"
        onSubmit={(e) => {
          e.preventDefault();
          registerLoginUser();
          router.push("/chat");
        }}
      >
        <div className={styles.textField}>
          {/* TODO: テキストフィールドにする */}
          <Text>なまえを入力</Text>
        </div>

        <div>
          <Button className={styles.button} type="submit" size="4">
            チャットをはじめる
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
