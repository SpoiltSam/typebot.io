import { executePrismaCommand } from "./executeCommand";
//Try swapping DATABASE_URL to DIRECT_URL
if (process.env.DIRECT_URL?.startsWith("postgres"))
  executePrismaCommand("prisma migrate deploy");
