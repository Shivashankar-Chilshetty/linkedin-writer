import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

// maintain custom state annotations here

export const State = Annotation.Root({
  ...MessagesAnnotation.spec,    // inherit message history annotation
  revisions: Annotation<number>   // custom annotation to track number of revisions(i,e number of times critique sends feedback to writer)
});