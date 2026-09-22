export interface GreetingOptions {
  name: string;
  punctuation?: string;
}

export function createGreeting({
  name,
  punctuation = '!',
}: GreetingOptions): string {
  const normalizedName = name.trim();

  if (!normalizedName) {
    throw new Error('name must not be empty');
  }

  return `Hello, ${normalizedName}${punctuation}`;
}
