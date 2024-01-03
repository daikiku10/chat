"use client";

import { Button } from "@/components/atoms/Button";
import { Text, TextField } from "@radix-ui/themes";
import * as styles from "./LoginForm.css";
// import { registerLoginUser } from "./hooks";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const USERNAME_MAXLENGTH = 10;

/**
 * ログインフォーム
 * @returns コンポーネント
 */
const LoginForm = () => {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>();

  return (
    <div>
      <form
        action="/chat"
        onSubmit={handleSubmit((data) => console.log("form", data))}
      >
        <div className={styles.textField}>
          <TextField.Input
            {...register("name", {
              required: "必須項目です。",
              maxLength: {
                value: USERNAME_MAXLENGTH,
                message: "5文字以内で入力！",
              },
            })}
            placeholder="なまえを入力してください"
            maxLength={USERNAME_MAXLENGTH}
          />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
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
