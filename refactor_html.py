import os
import re

components_dir = 'src/components'
for filename in os.listdir(components_dir):
    if not filename.endswith('.js'):
        continue
    path = os.path.join(components_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace <Tag dangerouslySetInnerHTML={{ __html: ... }}> \n </Tag> with <Tag dangerouslySetInnerHTML={{ __html: ... }} />
    content = re.sub(r'(dangerouslySetInnerHTML=\{\{\s*__html:[^\}]+\}\})\s*>\s*<\/[a-zA-Z0-9]+>', r'\1 />', content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed dangerouslySetInnerHTML")
