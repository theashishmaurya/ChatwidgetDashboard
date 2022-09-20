import { Edge,Node } from "react-flow-renderer";
import { ParseNodes } from "./ParseNodes";

// To create a Adjacency List

  //To find the end Nodes from the Nodes
  
  export const findEndNodes = (Nodes : Node[])=>{
    let EndNodes = new Map()
    for(let i = 0 ; i < Nodes.length ; i++){
      if(Nodes[i]?.type === "end"){
        EndNodes.set(Nodes[i], "end")
      }
    }
    return EndNodes;
  }

  // Traverse the Node to find the End
  export const Traverse =  (edges:Edge[] , nodes: Node[]) => {

    let  {SerializedGraph , DataMap  } = ParseNodes(nodes ,edges)
      let EndNodes = findEndNodes(nodes)
      let visited = new Map();
      let stack = [];

      stack.push("source");

      while (stack.length > 0) {
        let currNode = stack.pop();

        if (!visited.has(currNode)) {
          visited.set(currNode, true);
          console.log(DataMap.get(currNode));
        //   if (currNode.type === "end" || currNode.type == "end") {
        //     console.log("Thankyou");
        //     break;
        //   }
        }
        console.log(currNode)
        let edgesArr = SerializedGraph.get(currNode);
        console.log(edgesArr);
        // Get the value from user
        // let value;
        // if (edgesArr.length > 2) {
        //   // value = await getUserValue();
        //   stack = [];
        //   stack.push(value);
        // } 


          for (let e of edgesArr) {
            console.log(e)
            if (!visited.has(e.target)) {
              stack.push(e.target);
            }
        }
      }
    };