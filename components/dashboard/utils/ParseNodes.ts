import { Edge, Node } from "react-flow-renderer";
import { NodeArrayData } from "../react-flow/store";

export const ParseNodes =(Node :Node[], Edge : Edge[])=>{

    let component = {
        input : function (inputFor:any){

            if(inputFor === "email"){
                return `<input type="email" name="email" id="email" placeholder="Enter your email" />`
            }
           
            return `<input type="text" name=${inputFor} id=${inputFor} placeholder="Enter your answer" />`
                
        },
        flowMessage : function (message:string){
            return `<div><p>${message}</p></div>`
        },
        flowCheckbox : function (checkboxs : NodeArrayData[]){

            let checkboxsString = ""
            if (checkboxs){
            checkboxs.forEach((checkbox)=>{
                checkboxsString += `<div><input type="checkbox" name=${checkbox.name} id=${checkbox.id} value=${checkbox.name} /></div>`
            })
        }
            return checkboxsString

        },
        flowRadio : function (radios : NodeArrayData[]){
            let radiosString = ""
            if(radios){
            radios.forEach((radio)=>{
                radiosString += `<div><input type="radio" name=${radio.name} id=${radio.id} value=${radio.name} /></div>`
            })
        }
            return radiosString
        },
        flowButton : function (buttonText : string){
            return `<div><button>${buttonText}</button></div>`
        }
    }

    let SerializedGraph = new Map()


   type DataMap = Map<string,DataMapValues>;
   interface DataMapValues {
    component : string,
    type: string,
    fun : ()=>void
   }
    let DataMap   = new Map<string,DataMapValues>();
    Node.forEach((node)=>{
        const {id,type,data} = node
        if(type === "flowMessage" || type === "flowStart" || type === "flowEnd"){
            DataMap.set(id,{component : component.flowMessage(data.text)  ,type : type , fun : data.run})
        }
        else if(type === "flowInput"){
            DataMap.set(id,{component :component.input(data.inputFor) ,type ,fun : data.run } )
        }
        else if(type === "flowCheckbox"){
            DataMap.set(id,{component : component.flowCheckbox(data.checkboxs) ,type ,fun : data.run } )
        }
        else if(type === "flowRadio"){
            DataMap.set(id,{component : component.flowRadio(data.radios) ,type, fun : data.run } )
        }
        else if(type === "flowButton"){
            DataMap.set(id,{component  :component.flowButton(data.buttonText) , type , fun : data.run})
        }

    })

    Edge.map((obj) => {
        const { source, target } = obj;
    
        if (SerializedGraph.has(source)) {
          SerializedGraph.get(source).push({target});
        } else {
          SerializedGraph.set(source, [{target}]);
        }
        if (SerializedGraph.has(target)) {
          SerializedGraph.get(target).push({source});
        } else {
          SerializedGraph.set(target, [{source}]);
        }
      });
    
      return {SerializedGraph,DataMap }};
    
  








    
    





