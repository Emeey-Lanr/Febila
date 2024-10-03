import { connectToDb } from "./lib/db";

export async function register() {
    await connectToDb()
}