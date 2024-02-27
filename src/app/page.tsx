import { Flex } from "@mantine/core";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function Page() {
  return (
    <Flex h="100vh" justify="center" align="center">
      <h1>Welcome!</h1>
    </Flex>
  );
}
