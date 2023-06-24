import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schema";

export default defineConfig({
  basePath: "/admin", //studio da yapılabilir
  projectId,
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema,
});
