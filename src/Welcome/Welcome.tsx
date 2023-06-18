import { Button, Stack, Text } from '@mantine/core';

export function Welcome() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button>Github Action</Button>
    </Stack>
  );
}
