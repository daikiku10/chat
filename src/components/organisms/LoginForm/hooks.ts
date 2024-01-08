export const registerLoginUser = async (name: string) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ name }),
  } satisfies RequestInit;
  const result = await fetch(
    "http://localhost:8080/api/v1/chat/user",
    options,
  ).then((data) => data.json());

  // TODO: バックエンド側のエラーコードによってエラーハンドリングを行う。
  return;
};
