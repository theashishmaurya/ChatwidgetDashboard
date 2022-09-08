import { Edge,Node } from "react-flow-renderer";

// To create a Adjacency List
export const createAdjacencyList = (edges: Edge[]) => {
    let Graph = new Map();
  
    edges.map((obj) => {
      const { source, target } = obj;
  
      if (Graph.has(source)) {
        Graph.get(source).push({target});
      } else {
        Graph.set(source, [{target}]);
      }
  
      if (Graph.has(target)) {
        Graph.get(target).push({source});
      } else {
        Graph.set(target, [{source}]);
      }
    });
  
    return Graph;
  };


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
  export const Traverse = async (edges:Edge[] , nodes: Node[]) => {
      let Graph = createAdjacencyList(edges);
      let EndNodes = findEndNodes(nodes)
      let visited = new Map();
      let stack = [];

      stack.push("source");

      while (stack.length > 0) {
        let currNode = stack.pop();

        if (!visited.has(currNode)) {
          visited.set(currNode, true);
          console.log(currNode);

        //   if (currNode.type === "end" || currNode.type == "end") {
        //     console.log("Thankyou");
        //     break;
        //   }
        }
        let edgesArr = Graph.get(currNode);
        console.log(edgesArr);
        // Get the value from user
        // let value;
        // if (edgesArr.length > 2) {
        //   // value = await getUserValue();
        //   stack = [];
        //   stack.push(value);
        // } 
        
          for (let e of edgesArr) {
            if (!visited.has(e)) {
              stack.push(e);
            }
        }
      }
    };