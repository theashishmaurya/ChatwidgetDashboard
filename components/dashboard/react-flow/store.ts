import create from "zustand"
import {
    Connection,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    addEdge,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    applyNodeChanges,
    applyEdgeChanges,
  } from 'react-flow-renderer';
import { initialEdges, initialNodes } from "../utils/data";



export type NodeArrayData = {id:string,name:string}
export type groupFor = "checkboxs" | "radios"

type RFState = {
    nodes : Node[],
    edges :Edge[],
    onNodesChange : OnNodesChange,
    onEdgesChange : OnEdgesChange,
    onConnect : OnConnect,
    addNode : (node:Node) => void,
    deleteNode : (node:string) => void,
    updateNodeText  :(nodeId : string , text :string) => void,
    updateInputNode : (nodeId : string , inputFor :string) => void,
    updateGroupCustomNode : (nodeId : string ,groupFor :groupFor, ArrayData : NodeArrayData[]) => void,
}

const useRFStore = create <RFState>((set,get)=>({
    nodes :initialNodes,
    edges :initialEdges,
    onNodesChange : (changes:NodeChange[])=>{
        set({
            nodes : applyNodeChanges(changes,get().nodes)
        })
    },  
    onEdgesChange: (changes: EdgeChange[]) => {
        set({
          edges: applyEdgeChanges(changes, get().edges),
        });
      },
      onConnect: (connection: Connection) => {
        set({
          edges: addEdge(connection, get().edges),
        });
      },

      addNode : (node : Node)=>{
          set({ nodes : [...get().nodes,node]})
      },

      deleteNode : (nodeId : string)=>{
          set({nodes : get().nodes.filter(node=>node.id !== nodeId)})
      },
      // Updates the text of the node :)
      updateNodeText : (nodeId :string , text:string)=>{
        set({
            nodes : get().nodes.map((node)=>{
                if(node.id === nodeId){

                    node.data = {...node.data , text :text}
                }

                return node
            })
        })
      },

      updateInputNode : (nodeId :string , inputFor:string)=>{
        set({
            nodes : get().nodes.map((node)=>{
                if(node.id === nodeId){

                    node.data = {...node.data , inputFor }
                }

                return node
            })
        })
      },



      // Nodes such as Radio node and Checkbox Node
      updateGroupCustomNode :(nodeId:string , groupFor :groupFor , ArrayData : NodeArrayData[])=>{
        set({
            nodes : get().nodes.map((node)=>{
                if(node.id === nodeId){
                    node.data = {...node.data , [groupFor] :ArrayData }
                }

                return node
            })
        })
      },
}))


export default useRFStore


