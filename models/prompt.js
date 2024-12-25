import { Schema, model, models } from "mongoose";
const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", // it is a reference for relations one user can create many prmpts
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is reuired!"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;

// ASK ASK ASK !!!!! about this schema model!!!!
