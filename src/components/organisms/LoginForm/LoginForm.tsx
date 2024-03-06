"use client";

import { Button } from "@/components/atoms/Button";
import { Text, TextField } from "@radix-ui/themes";
import * as styles from "./LoginForm.css";
import { registerLoginUser } from "./hooks";
import { useForm } from "react-hook-form";
import { useOfferYear } from "@/hooks/use-offer-year";
import { useEffect } from "react";

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

  const { offerYear, setOfferYear } = useOfferYear();
  console.log(offerYear);

  useEffect(() => {
    setOfferYear("2023");
  }, [setOfferYear]);

  return (
    <div>
      <form
        action="/chat"
        onSubmit={handleSubmit((data) => {
          registerLoginUser(data.name);
        })}
      >
        <div className={styles.textField}>
          <TextField.Input
            {...register("name", {
              required: "必須項目です。",
              maxLength: {
                value: USERNAME_MAXLENGTH,
                message: "10文字以内で入力！",
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
          <Button onClick={() => setOfferYear("2222")}>test</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
