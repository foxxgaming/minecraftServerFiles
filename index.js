const { exec } = require("child_process");

exec("java -Xmx1024M -Xms1024M -jar paper.jar nogui", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});