"use client";
import { Paper, Title } from "@mantine/core";
import { NewsForm } from "./_components/news-form";
import { NewsFormSchema } from "../news-from-schema";
import { useEffect, useState } from "react";

export default function Page() {
  const [isError, setIsError] = useState(false);
  const defaultValues: NewsFormSchema = {
    destination: ["forCompany", "forNotLogin"],
    date: "2023-12-25",
    main: "https://www.google.co.jp/\n\n改行してます",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsError(true);
    }, 5000);
  }, []);

  const onSubmit = async (data: NewsFormSchema) => {
    console.log(data);
  };

  const onDelete = () => {
    console.log("モーダル開くよ！");
  };

  const newsFromProps = {
    isEdit: true,
    isError,
    defaultValues,
    onSubmit,
    onDelete,
    setMessage: setIsError,
  };

  return (
    <div>
      <div>パン屑リスト</div>
      <Title size="h2">ニュース登録</Title>
      <Paper shadow="md" p="xl" mt="md">
        <Title size="h3">ニュース情報</Title>

        <NewsForm {...newsFromProps} />
      </Paper>
    </div>
  );
}
