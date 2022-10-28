var allDicts = {};
class Abcde {
	getInfo() {
		return {
			id: 'dicts',
			name: 'Dictionaries',
			blocks: [
				{
					opcode: 'addItem',
					blockType: Scratch.BlockType.COMMAND,
					text: 'add [VALUE] to dictionary [DICT] with key [KEY]',
					'arguments': {
						VALUE: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'thing'
						},
						DICT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'my dictionary'
						},
						KEY: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'item 1'
						}
					}
				},
				{
					opcode: 'createDict',
					blockType: Scratch.BlockType.COMMAND,
					text: 'create dictionary [DICT]',
					'arguments': {
						DICT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'my dictionary'
						}
					}
				},
				{
					opcode: 'replaceItem',
					blockType: Scratch.BlockType.COMMAND,
					text: 'replace item with key [KEY] from dictionary [DICT] with [VALUE]',
					'arguments': {
						KEY: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'item 1'
						},
						DICT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'my dictionary'
						},
						VALUE: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'thing'
						}
					}
				},
				{
				    opcode: 'deleteItem',
				    blockType: Scratch.BlockType.COMMAND,
				    text: 'delete item with key [KEY] from dictionary [DICT]',
				    'arguments': {
				        KEY: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'item 1'
				        },
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        }
				    }
				},
				{
				    opcode: 'deleteDict',
				    blockType: Scratch.BlockType.COMMAND,
				    text: 'delete dictionary [DICT]',
				    'arguments': {
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        }
				    }
				},
				{
					opcode: 'reportItem',
					blockType: Scratch.BlockType.REPORTER,
					text: 'item with key [KEY] from dictionary [DICT]',
					'arguments': {
						KEY: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'item 1'
						},
						DICT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'my dictionary'
						}
					},
					disableMonitor: true
				},
				{
				    opcode: 'reportDict',
				    blockType: Scratch.BlockType.REPORTER,
				    text: 'dictionary [DICT]',
				    'arguments': {
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        }
				    },
				    disableMonitor: false
				},
				{
					opcode: 'isEmpty',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'dictionary [DICT] is empty?',
					'arguments': {
						DICT: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'my dictionary'
						}
					},
					disableMonitor: true
				}
			]
		};
	}
	addItem(args) {
        if(allDicts[args.DICT] && !allDicts[args.DICT][args.KEY]){
            allDicts[args.DICT][args.KEY] = args.VALUE;
        }
	}
	createDict(args) {
        if(!allDicts[args.DICT]){
            allDicts[args.DICT] = {};
        }
	}
	replaceItem(args) {
        if(allDicts[args.DICT][args.KEY]){
          allDicts[args.DICT][args.KEY] = args.VALUE;
        }
	}
	deleteItem(args){
        if(allDicts[args.DICT][args.KEY]){
            delete allDicts[args.DICT][args.KEY];
        }
	}
	deleteDict(args) {
	    if(allDicts[args.DICT]){
	        delete allDicts[args.DICT];
	    }
	}
	reportItem(args) {
        if(allDicts[args.DICT].hasKey(args.KEY)){
            return allDicts[args.DICT][args.KEY];
        } else {
            return '';
        }
	}
	reportDict(args) {
	    if(allDicts[args.DICT]){
	        return JSON.stringify(allDicts[args.DICT]);
	    } else {
	        return '';
	    }
	}
	isEmpty(args) {
        if(allDicts[args.DICT]){
            return Object.keys(allDicts[args.DICT]).length == 0;
        } else {
            return true;
        }
	}
}
Scratch.extensions.register(new Abcde());
