import { randId } from "./helper";

enum  RuleType {
    State='state',
    Number='number'
}

enum ValueType {
    TextContent = "textContent",
    Attr = "attr"
    
}


export function parserHTML(){
    const rules = [
        {
            uid: randId(),
            type: "state",
            label: "title",
            selectors: "head > title",
            valueType: ValueType.TextContent,
            required: false, // 是否校验
            rule: [],
        },
        {
            uid: randId(),
            // type: "state",
            label: "title",
            selectors: "head [name=\"description\"]",
            valueType: ValueType.Attr,
            attrName: "content",
            required: false, // 是否校验
            rule: [],
        }
    ];

    const res = rules.map((data)=>{
        if(data.valueType == ValueType.TextContent){
            return {
                uid: data.uid,
                value: document.querySelector(data.selectors)?.textContent,
            }
        }else if(data.valueType == ValueType.Attr){
            return {
                uid: data.uid,
                value: document.querySelector(data.selectors)?.getAttribute(data?.attrName || ""),
            } 
        }
    })

    console.log(res);
}