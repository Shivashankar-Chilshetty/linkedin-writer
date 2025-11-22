import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

// maintain custom state annotations here

export const State = Annotation.Root({
  ...MessagesAnnotation.spec    // inherit message history annotation
});