import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "0a03nuk3",
  dataset: "production",
  apiVersion: "2024-03-31",
  useCdn: false, // Set to true for production if you have high traffic
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
