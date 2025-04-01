// import { db } from "@/db";
import { categories } from "@/db/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import "dotenv/config";
// const { db } = require("../db");
// const { categories } = require("../db/schema");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

const categoryNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("Seeding categories....");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding categories", error);
    process.exit(1);
  }
}

main();
