import json
import textwrap

import requests

CDN_ROOT = "https://ipe-plugins.js.org/"

plugins = requests.get(CDN_ROOT + "index.json").json()
result = []
result2 = []
for name in plugins:
    name: str
    content = requests.get(CDN_ROOT + "plugins/" + name).text
    content = content.replace("testingcf.jsdelivr.net", "cdn.jsdelivr.net")
    func_name = (name
                 .replace("-", "_")
                 .replace(".js", "")
                 .replace("/", "_"))
    result.append(f"export function {func_name}() {{"
                  f"{textwrap.indent(content, '  ')}"
                  "}")
    result2.append(f"'{name}': {func_name},")
with open("src/libs/plugins.js", "w") as f:
    f.write("\n".join(result))

print("\n".join(result2))
