const { exec , spawn } = require("child_process");

console.log("Iniciando");
while(true){
 const ls = spawn("git pull");

	ls.stdout.on("data", data => {
		    console.log(`stdout: ${data}`);
	});

	ls.stderr.on("data", data => {
		    console.log(`stderr: ${data}`);
	});

	ls.on('error', (error) => {
		    console.log(`error: ${error.message}`);
	});

	ls.on("close", code => {
		    console.log(`child process exited with code ${code}`);
		});
};
