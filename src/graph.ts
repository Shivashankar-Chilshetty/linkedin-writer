
import { State } from "./state";
import { START, END, StateGraph, MemorySaver } from "@langchain/langgraph";

//node 1
async function writer(state: typeof State.State) {
    //call llm
    return state;
}

//node 2
async function critique(state: typeof State.State) {
    //call llm
    return state;
}

function shouldContinue(state: typeof State.State) {
    //determine whether to continue or end
    const continueWriting = state.get("continueWriting");
    return continueWriting ? "writer" : END;
}

const graph = new StateGraph(State)
    .addNode("writer", writer)
    .addNode("critique", critique)
    .addEdge(START, "writer")
    .addEdge("critique", "writer")
    .addConditionalEdge("writer", shouldContinue);