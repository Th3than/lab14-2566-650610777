"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        mt="xs"
        placeholder="Do you enjoy eating?"
        minRows={3}
      />
      <Button mt={"xs"} color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} size="sm" />
      </Group>
      <Text size={"md"} color="grey" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} size="sm" />
      </Group>
      <Text size={"md"} color="grey" align="center">
        My favourite part is pepperoni
      </Text>
      <Pagination total={20} mt={"md"} color="orange" position="center" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Natan Bunkerd 650610777
      </Text>
    </Container>
  );
}
