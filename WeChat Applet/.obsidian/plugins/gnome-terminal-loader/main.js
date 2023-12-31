/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => GnomeTerminal
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var GnomeTerminal = class extends import_obsidian.Plugin {
  async onload() {
    if (import_obsidian.Platform.isLinux) {
      const loadGnomeTerminal = this.addRibbonIcon(
        "terminal-square",
        "Gnome Terminal",
        (evt) => {
          const { spawn } = require("child_process");
          let openTerminalAtPath = spawn("gnome-terminal", { cwd: this.app.vault.adapter.basePath });
          openTerminalAtPath.on("error", (err) => {
            console.log(err);
          });
        }
      );
      const pythonGnomeTerminal = this.addRibbonIcon(
        "file-terminal",
        "main.py (Gnome Terminal)",
        (evt) => {
          const fs = require("fs");
          const { spawn } = require("child_process");
          const main_file_path = this.app.vault.adapter.basePath + "/main.py";
          if (!fs.existsSync(main_file_path)) {
            const file_data = `print("=" * 80)
print("No main.py was found so one was created!")
print("Add your own code to this file: ${main_file_path}")
print("=" * 80)
input("Key enter to close.")`;
            fs.writeFile(
              main_file_path,
              file_data,
              function(err) {
                if (err) {
                  return console.error(err);
                }
              }
            );
          }
          const command = "gnome-terminal";
          const cmd_args = ["--", "python3", "main.py"];
          let openTerminalAtPath = spawn(command, cmd_args, {
            shell: true,
            //@ts-ignore
            cwd: this.app.vault.adapter.basePath
          });
          openTerminalAtPath.on("error", (err) => {
            console.log(err);
          });
        }
      );
    }
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtQbGF0Zm9ybSwgUGx1Z2lufSBmcm9tICdvYnNpZGlhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdub21lVGVybWluYWwgZXh0ZW5kcyBQbHVnaW4ge1xuXG5cdGFzeW5jIG9ubG9hZCgpIHtcblxuXHRcdGlmIChQbGF0Zm9ybS5pc0xpbnV4KSB7XG5cdFx0XHRjb25zdCBsb2FkR25vbWVUZXJtaW5hbCA9IHRoaXMuYWRkUmliYm9uSWNvbihcblx0XHRcdFx0J3Rlcm1pbmFsLXNxdWFyZScsICdHbm9tZSBUZXJtaW5hbCcsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7c3Bhd259ID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuXHRcdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHRcdGxldCBvcGVuVGVybWluYWxBdFBhdGggPSBzcGF3bignZ25vbWUtdGVybWluYWwnLCB7Y3dkOiB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmJhc2VQYXRofSk7XG5cdFx0XHRcdFx0b3BlblRlcm1pbmFsQXRQYXRoLm9uKCdlcnJvcicsIChlcnI6IEVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgcHl0aG9uR25vbWVUZXJtaW5hbCA9IHRoaXMuYWRkUmliYm9uSWNvbihcblx0XHRcdFx0J2ZpbGUtdGVybWluYWwnLCAnbWFpbi5weSAoR25vbWUgVGVybWluYWwpJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXHRcdFx0XHRcdGNvbnN0IHtzcGF3bn0gPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG5cblx0XHRcdFx0XHQvL0B0cy1pZ25vcmVcblx0XHRcdFx0XHRjb25zdCBtYWluX2ZpbGVfcGF0aCA9IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuYmFzZVBhdGggKyAnL21haW4ucHknXG5cblx0XHRcdFx0XHRpZiAoIWZzLmV4aXN0c1N5bmMobWFpbl9maWxlX3BhdGgpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWxlX2RhdGE6IHN0cmluZyA9ICdwcmludChcIj1cIiAqIDgwKVxcbicgK1xuXHRcdFx0XHRcdFx0XHQncHJpbnQoXCJObyBtYWluLnB5IHdhcyBmb3VuZCBzbyBvbmUgd2FzIGNyZWF0ZWQhXCIpXFxuJyArXG5cdFx0XHRcdFx0XHRcdGBwcmludChcIkFkZCB5b3VyIG93biBjb2RlIHRvIHRoaXMgZmlsZTogJHttYWluX2ZpbGVfcGF0aH1cIilcXG5gICtcblx0XHRcdFx0XHRcdFx0J3ByaW50KFwiPVwiICogODApXFxuJyArXG5cdFx0XHRcdFx0XHRcdCdpbnB1dChcIktleSBlbnRlciB0byBjbG9zZS5cIiknXG5cdFx0XHRcdFx0XHRmcy53cml0ZUZpbGUoXG5cdFx0XHRcdFx0XHRcdG1haW5fZmlsZV9wYXRoLFxuXHRcdFx0XHRcdFx0XHRmaWxlX2RhdGEsXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChlcnI6IGFueSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBjb21tYW5kID0gJ2dub21lLXRlcm1pbmFsJ1xuXHRcdFx0XHRcdGNvbnN0IGNtZF9hcmdzID0gW1wiLS1cIiwgXCJweXRob24zXCIsIFwibWFpbi5weVwiXVxuXG5cdFx0XHRcdFx0bGV0IG9wZW5UZXJtaW5hbEF0UGF0aCA9IHNwYXduKGNvbW1hbmQsIGNtZF9hcmdzLCB7XG5cdFx0XHRcdFx0XHRzaGVsbDogdHJ1ZSwgLy9AdHMtaWdub3JlXG5cdFx0XHRcdFx0XHRjd2Q6IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuYmFzZVBhdGhcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRvcGVuVGVybWluYWxBdFBhdGgub24oJ2Vycm9yJywgKGVycjogRXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG5cblx0b251bmxvYWQoKSB7XG5cblx0fVxuXG59XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBK0I7QUFFL0IsSUFBcUIsZ0JBQXJCLGNBQTJDLHVCQUFPO0FBQUEsRUFFakQsTUFBTSxTQUFTO0FBRWQsUUFBSSx5QkFBUyxTQUFTO0FBQ3JCLFlBQU0sb0JBQW9CLEtBQUs7QUFBQSxRQUM5QjtBQUFBLFFBQW1CO0FBQUEsUUFBa0IsQ0FBQyxRQUFvQjtBQUN6RCxnQkFBTSxFQUFDLE1BQUssSUFBSSxRQUFRLGVBQWU7QUFFdkMsY0FBSSxxQkFBcUIsTUFBTSxrQkFBa0IsRUFBQyxLQUFLLEtBQUssSUFBSSxNQUFNLFFBQVEsU0FBUSxDQUFDO0FBQ3ZGLDZCQUFtQixHQUFHLFNBQVMsQ0FBQyxRQUFlO0FBQzlDLG9CQUFRLElBQUksR0FBRztBQUFBLFVBQ2hCLENBQUM7QUFBQSxRQUNGO0FBQUEsTUFBQztBQUVGLFlBQU0sc0JBQXNCLEtBQUs7QUFBQSxRQUNoQztBQUFBLFFBQWlCO0FBQUEsUUFBNEIsQ0FBQyxRQUFvQjtBQUNqRSxnQkFBTSxLQUFLLFFBQVEsSUFBSTtBQUN2QixnQkFBTSxFQUFDLE1BQUssSUFBSSxRQUFRLGVBQWU7QUFHdkMsZ0JBQU0saUJBQWlCLEtBQUssSUFBSSxNQUFNLFFBQVEsV0FBVztBQUV6RCxjQUFJLENBQUMsR0FBRyxXQUFXLGNBQWMsR0FBRztBQUNuQyxrQkFBTSxZQUFvQjtBQUFBO0FBQUEseUNBRWlCO0FBQUE7QUFBQTtBQUczQyxlQUFHO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxjQUNBLFNBQVUsS0FBVTtBQUNuQixvQkFBSSxLQUFLO0FBQ1IseUJBQU8sUUFBUSxNQUFNLEdBQUc7QUFBQSxnQkFDekI7QUFBQSxjQUNEO0FBQUEsWUFBQztBQUFBLFVBQ0g7QUFFQSxnQkFBTSxVQUFVO0FBQ2hCLGdCQUFNLFdBQVcsQ0FBQyxNQUFNLFdBQVcsU0FBUztBQUU1QyxjQUFJLHFCQUFxQixNQUFNLFNBQVMsVUFBVTtBQUFBLFlBQ2pELE9BQU87QUFBQTtBQUFBLFlBQ1AsS0FBSyxLQUFLLElBQUksTUFBTSxRQUFRO0FBQUEsVUFDN0IsQ0FBQztBQUNELDZCQUFtQixHQUFHLFNBQVMsQ0FBQyxRQUFlO0FBQzlDLG9CQUFRLElBQUksR0FBRztBQUFBLFVBQ2hCLENBQUM7QUFBQSxRQUNGO0FBQUEsTUFBQztBQUFBLElBQ0g7QUFBQSxFQUVEO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFFWDtBQUVEOyIsCiAgIm5hbWVzIjogW10KfQo=
