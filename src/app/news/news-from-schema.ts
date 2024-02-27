import * as v from "valibot";

export const newsFormSchema = v.object({
  date: v.string("", [v.minLength(1, "お知らせ日は必須です。")]),
  main: v.string(),
  destination: v.array(v.picklist(["forCompany", "forTalent", "forNotLogin"]), [
    v.notLength(0, "公開先は必須です。"),
  ]),
});

export type NewsFormSchema = v.Output<typeof newsFormSchema>;
