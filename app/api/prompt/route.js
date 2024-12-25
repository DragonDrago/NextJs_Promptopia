import { connectToDb } from "../../../utils/database";
import Prompt from "../../../models/prompt";
export const GET = async (request) => {
  try {
    await connectToDb();
    const promts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(promts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts" + `${error}`, {
      status: 500,
    });
  }
};
