import os
import re

components_dir = 'src/components'
for filename in os.listdir(components_dir):
    if not filename.endswith('.js'):
        continue
    path = os.path.join(components_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace __html: something } with __html: something || '' }
    # Be careful not to replace if it already has || ''
    content = re.sub(r'(__html:\s*)([a-zA-Z0-9_\.\[\]]+)\s*\}\s*\}', r"\1\2 || '' }}", content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed dangerouslySetInnerHTML fallback")
