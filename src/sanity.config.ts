import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "qjhbstq4",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool(), visionTool({ defaultApiVersion: "2023-03-09" })],
  schema: { types: schemas },
});

export default config;
