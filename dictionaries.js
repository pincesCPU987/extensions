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
				    opcode: 'reportKey',
				    blockType: Scratch.BlockType.REPORTER,
				    text: 'key of item [ITEM] from dictionary [DICT]',
				    'arguments': {
				        ITEM: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'thing'
				        },
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        }
				    }
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
				    disableMonitor: true
				},
				{
				    opcode: 'reportLength',
				    blockType: Scratch.BlockType.REPORTER,
				    text: 'length of dictionary [DICT]',
				    'arguments': {
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        }
				    },
				    disableMonitor: true
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
				},
				{
				    opcode: 'dictContainsItem',
				    blockType: Scratch.BlockType.BOOLEAN,
				    text: 'dictionary [DICT] contains item [ITEM]?',
				    'arguments': {
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        },
				        ITEM: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'thing'
				        }
				    },
				    disableMonitor: true
				},
				{
				    opcode: 'dictContainsKey',
				    blockType: Scratch.BlockType.BOOLEAN,
				    text: 'dictionary [DICT] has key [KEY]?',
				    'arguments': {
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
				    opcode: 'dictExists',
				    blockType: Scratch.BlockType.BOOLEAN,
				    text: 'dictionary [DICT] exists?',
				    'arguments': {
				        DICT: {
				            type: Scratch.ArgumentType.STRING,
				            defaultValue: 'my dictionary'
				        }
				    }
				},
				{
				    opcode: 'reportAll',
				    blockType: Scratch.BlockType.REPORTER,
				    text: 'all dictionaries',
				    disableMonitor: false
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
	    if(allDicts[args.DICT]){
            if(allDicts[args.DICT][args.KEY]){
              allDicts[args.DICT][args.KEY] = args.VALUE;
            }
	    }
	}
	deleteItem(args){
	    if(allDicts[args.DICT]){
            if(allDicts[args.DICT][args.KEY]){
                delete allDicts[args.DICT][args.KEY];
            }
	    }
	}
	deleteDict(args) {
	    if(allDicts[args.DICT]){
	        delete allDicts[args.DICT];
	    }
	}
	reportItem(args) {
	    if(allDicts[args.DICT]){
            if(allDicts[args.DICT][args.KEY]){
                return allDicts[args.DICT][args.KEY];
            } else {
                return '';
            }
	    } else {
	        return '';
	    }
	}
	reportKey(args){
	    if(allDicts[args.DICT]){
	        return Object.keys(allDicts[args.DICT]).find(key => allDicts[args.DICT][key] === value);
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
	reportLength(args) {
	    if(allDicts[args.DICT]){
	        return Object.keys(allDicts[args.DICT]).length;
	    } else {
	        return 0;
	    }
	}
	isEmpty(args) {
        if(allDicts[args.DICT]){
            return Object.keys(allDicts[args.DICT]).length == 0;
        } else {
            return true;
        }
	}
	dictContainsItem(args) {
	    if(allDicts[args.DICT]){
	        var a = Object.keys(allDicts[args.DICT]);
		    var b = [];
		for(var i = 0; i < a.length; i++){
			b.push(allDicts[args.DICT][a[i]]);
		}
		return b.includes(args.ITEM);
	    } else {
	        return false;
	    }
	}
	dictContainsKey(args) {
	    if(allDicts[args.DICT]){
	        return Object.keys(allDicts[args.DICT]).includes(args.KEY);
	    } else {
	        return false;
	    }
	}
	dictExists(args) {
	    return !!allDicts[args.DICT];
	}
	reportAll(args) {
	    return JSON.stringify(allDicts);
	}
}
Scratch.extensions.register(new Abcde());
