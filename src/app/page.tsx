import * as styles from "./page.css";
import { LoginForm } from "@/components/organisms/LoginForm";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>dai chat</h1>

      <LoginForm />
    </main>
  );
}
