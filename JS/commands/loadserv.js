module.exports = {
	name: 'loadserv',
    description: 'Loads all messages from server files',
    isAdmin: true,
    hidden: false,
	execute(serverListJSON, fs) {
        let filePath = "../assets/servers/";
        let toReturnJSON = [];

        const serverFiles = fs.readdirSync(filePath).filter(file => file.endsWith(".json"));
        for(const file of serverFiles)
        {
            let jsonText = fs.readFileSync(filePath + file, "utf8");
            toReturnJSON.push(JSON.parse(jsonText));
        }

        return toReturnJSON;
	},
};