import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import myLoader from 'renderer/models/loadcmd'
import { wrapStr } from 'renderer/utils/DataTool';
// Define custom module in JSON format
let blockname="b_load_pic"
// Match Student's name
const jsondesc = {
    "type": `${blockname}`,
    "message0": "Load%1Image Nickname %2 Filename %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "drop1",
            "options": [
                ["Background","bg"],
                ["Mid-ground","mg"],
                ["Foreground","fg"],
            ]
        },
        {
            "type": "input_value",
            "name": "val1",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "val2",
            "check": "String"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Foreground image file is placed in /data/image/foreground Folder\nMid-ground image file is placed in /data/image/midground Folder\nBackground image file is placed in /data/image/background Folder",
    "helpUrl": ""
  }

// Insert Custom Module
Blockly.Blocks[blockname] = {
    init: function () {
        this.jsonInit(jsondesc);
    }
}

// Add JavaScript to a custom block
javascriptGenerator[blockname] = function (block) {
    const type = block.getFieldValue('drop1');
    const nickname = javascriptGenerator.valueToCode(block, 'val1', javascriptGenerator.ORDER_ATOMIC);
    const filename = javascriptGenerator.valueToCode(block, 'val2', javascriptGenerator.ORDER_ATOMIC);
    

    return `stagelist.push(\`${myLoader.load(type,wrapStr(nickname),wrapStr(filename))}\`);`
}

