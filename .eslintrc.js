module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "eslint:recommended",
  ],
  rules: {
    // オプション["エラータイプ", "指定する内容"]
    semi: ["error", "always"],
    quotes: "error",
    "no-undef": "error",
  },
  // 機能を拡張する(ルール)
  // "plugins": []

  // eslintrcの設定全体を拡張する
  // "extends"

  // package.jsonのreactのバージョンを確認させる
  settings: {
    react: {
      version: "detect",
    },
  },
};
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     "airbnb",
//     "airbnb-typescript",
//     "airbnb/hooks",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: "./tsconfig.json",
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["import"],
//   rules: {
//     "react/function-component-definition": [
//       2,
//       { namedComponents: "arrow-function" },
//     ],
//     "@typescript-eslint/no-use-before-define": ["error"],
//     "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
//     "import/extensions": [
//       "error",
//       "ignorePackages",
//       {
//         js: "never",
//         jsx: "never",
//         ts: "never",
//         tsx: "never",
//       },
//     ],
//     // react ver17からimport Reactしなくても良くなったのでoff
//     "react/react-in-jsx-scope": "off",
//     // export default推奨をoff
//     "import/prefer-default-export": "off",
//     // reducerのstateに代入する処理で凛とエラーが起きてしまうため無効化
//     "no-param-reassign": "off",
//     // 一行に一つのコードのルールを無効化
//     "react/jsx-one-expression-per-line": 0,
//     // import/export を拡張子の記載なしでも可能にする
//     "import/prefer-default-export": "off",
//     // テンプレートリテラル内に入れられる値を文字列と数値以外も許可する
//     "@typescript-eslint/restrict-template-expressions": "off",
//     // 使われていない変数にエラーを出す
//     "@typescript-eslint/no-unused-vars": "error",
//     // オプショナルパラメータを設定した際にデフォルト値を入れるルールをオフ
//     "react/require-default-props": "off",
//     "react/jsx-props-no-spreading": "off",
//   },
//   settings: {
//     "import/resolver": {
//       node: {
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//       },
//     },
//   },
// };
