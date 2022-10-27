const allDicts = {};
class Dict {
	getInfo() {
		return {
			id: 'dictionaries',
			name: 'Dictionaries',
			blocks: [
				{
					opcode: 'addItem',
					blockType: Scratch.BlockType.COMMAND,
					text: 'add [VALUE] to dictionary [DICT] with key [KEY]',
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
				},
				{
					opcode: 'createDict',
					blockType: Scratch.BlockType.COMMAND,
					text: 'create dictionary [DICT]',
					DICT: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'my dictionary'
					}
				},
				{
					opcode: 'replaceItem',
					blockType: Scratch.BlockType.COMMAND,
					text: 'replace item with key [KEY] from dictionary [DICT] with [VALUE]',
					KEY: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'item 1',
					},
					DICT: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'my dictionary'
					}
					VALUE: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'thing'
					}
				},
				{
					opcode: 'reportItem',
					blockType: Scratch.BlockType.REPORTER,
					text: 'item with key [KEY] from dictionary [DICT]',
					KEY: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'item 1'
					},
					DICT: {
						type: Scratch.ArumentType.STRING,
						defaultValue: 'my dictionary'
					}
				}
				{
					opcode: 'isEmpty',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'dictionary [DICT] is empty?',
					DICT: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'my dictionary'
					}
				}
			]
		};
	}
	addItem(args) {
		if(allDicts[args.DICT] && !allDicts[args.DICT][args.KEY]){
			allDicts[args.DICT][args.KEY] = args.VALUE;
		}
	}
	createDict(args){
		if(!allDicts[args.DICT]){
			allDicts[args.DICT] = {};
		}
	}
	replaceItem(args){
		if(allDicts[args.DICT][args.KEY]){
			allDicts[args.DICT][args.KEY] = args.VALUE;
		}
	}
	reportItem(args) {
		if(allDicts[args.DICT][args.KEY]){
			return allDicts[args.DICT][args.KEY];
		} else {
			return '';
		}
	}
	isEmpty(args) {
		return allDicts[args.DICT].keys().length == 0;
	}
}
Scratch.extensions.register(new Dict());
