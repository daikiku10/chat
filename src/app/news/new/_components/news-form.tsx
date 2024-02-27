import "dayjs/locale/ja";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  Stack,
  Textarea,
} from "@mantine/core";
import { NewsFormSchema, newsFormSchema } from "../../news-from-schema";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { DatePickerInput, DatesProvider } from "@mantine/dates";
import dayjs from "dayjs";
import { useEffect } from "react";

type Props = {
  isEdit?: boolean;
  isError: boolean;
  defaultValues: NewsFormSchema;
  /** 登録・更新ボタン押下時の実行関数 */
  onSubmit: (data: NewsFormSchema) => void;
  onDelete?: () => void;
  setMessage: (message: boolean) => void;
};

/**
 * ニュース登録・編集画面で使用するニュースフォーム
 */
export const NewsForm = ({
  isEdit,
  isError,
  defaultValues,
  onSubmit,
  onDelete,
  setMessage,
}: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<NewsFormSchema>({
    resolver: valibotResolver(newsFormSchema),
    defaultValues: defaultValues,
    // TODO: mode: "onBlur",
  });

  useEffect(() => {}, []);

  return (
    <form noValidate>
      <Stack>
        <Flex>
          <DatesProvider settings={{ locale: "ja", firstDayOfWeek: 0 }}>
            <DatePickerInput
              label="お知らせ日"
              valueFormat="YYYY-MM-DD"
              monthLabelFormat="YYYY年 M月"
              defaultValue={new Date(defaultValues.date)}
              required
              onChange={(value) => {
                clearErrors("date");
                // YYYY-MM-DD形式に変換セットする
                setValue("date", dayjs(value).format("YYYY-MM-DD"));
                setMessage(true);
              }}
              error={errors.date?.message}
              getDayProps={(date) => {
                // 土曜日と日曜日は色を変える
                if (date.getDay() === 6) return { style: { color: "blue" } };
                if (date.getDay() === 0) return { style: { color: "red" } };
                return {};
              }}
            />
          </DatesProvider>
        </Flex>
        <Flex>
          <Checkbox.Group
            label="公開先"
            required
            defaultValue={defaultValues.destination}
            error={errors.destination?.message}
          >
            <Group>
              <Checkbox
                {...register("destination")}
                label="企業"
                value="forCompany"
              />
              <Checkbox
                {...register("destination")}
                label="人材"
                value="forTalent"
              />
              <Checkbox
                {...register("destination")}
                label="未ログイン"
                value="forNotLogin"
              />
            </Group>
          </Checkbox.Group>
        </Flex>

        <Flex>
          <Textarea {...register("main")} label="本文" />
        </Flex>

        <Flex>
          {isEdit && (
            <Box mr={3}>
              <Button onClick={onDelete}>削除</Button>
            </Box>
          )}

          <Box>
            <Button onClick={handleSubmit((data) => onSubmit(data))}>
              {isEdit ? "更新" : "登録"}
            </Button>
            {isError && <>エラーが発生しました。</>}
          </Box>
        </Flex>
      </Stack>
    </form>
  );
};
