import os
import re

components_dir = 'src/components'
files_to_convert = [
    'EventsNotices.js', 'CoreValues.js', 'Gallery.js', 'Testimonials.js',
    'LatestNews.js', 'BlogGrid.js', 'GalleryGrid.js', 'FaqSection.js',
    'PrivacyPolicyContent.js', 'PopularClasses.js', 'AboutUs.js', 'Footer.js'
]

# Props mapping per component
props_map = {
    'EventsNotices': '{ notices = [] }',
    'CoreValues': '{ features = [], settings = null }',
    'Gallery': '{ photos = [], settings = null }',
    'Testimonials': '{ testimonials = [], settings = null }',
    'LatestNews': '{ posts = [] }',
    'BlogGrid': '{ posts = [] }',
    'GalleryGrid': '{ images = [], settings = null }',
    'FaqSection': '{ items = [], settings = null, ctaSettings = null }',
    'PrivacyPolicyContent': '{ sections = [], settings = null }',
    'PopularClasses': '{ classes = [], settings = null }',
    'AboutUs': '{ content = {} }',
    'Footer': '{ fSettings = {}, sMedia = [] }'
}

for filename in files_to_convert:
    path = os.path.join(components_dir, filename)
    if not os.path.exists(path):
        continue
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove "use client"
    content = re.sub(r'^"use client";\s*\n', '', content, flags=re.MULTILINE)
    
    # 2. Change imports: remove { useState, useEffect }
    content = re.sub(r'import React, \{\s*useState,\s*useEffect\s*\} from \'react\';', "import React from 'react';", content)
    content = re.sub(r'import React, \{\s*useState,\s*useEffect,\s*useRef\s*\} from \'react\';', "import React, { useRef } from 'react';", content)
    
    # 3. Remove fetchApi import
    content = re.sub(r'import \{ fetchApi \} from \'.*/utils/apiClient\';\n?', '', content)
    
    # 4. Get component name and replace function signature
    comp_name_match = re.search(r'export default function ([A-Za-z0-9_]+)\(\)', content)
    if comp_name_match:
        comp_name = comp_name_match.group(1)
        props = props_map.get(comp_name, '{ data = null }')
        content = content.replace(f'export default function {comp_name}()', f'export default function {comp_name}({props})')
    
    # 5. Remove useState blocks inside function body
    content = re.sub(r'\s*const \[.*?, set.*?\] = useState\(.*?\);', '', content)
    
    # 6. Remove useEffect block for fetchApi
    content = re.sub(r'\s*useEffect\(\(\) => \{\s*async function get.*?\(\) \{.*?\}\s*get.*?;\s*\}, \[\]\);', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*useEffect\(\(\) => \{\s*async function load.*?\(\) \{.*?\}\s*load.*?;\s*\}, \[\]\);', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*useEffect\(\(\) => \{\s*async function fetch.*?\(\) \{.*?\}\s*fetch.*?;\s*\}, \[\]\);', '', content, flags=re.DOTALL)
    
    # 7. Remove if(loading) blocks
    content = re.sub(r'\s*if\s*\(loading\)\s*\{\s*return\s*\(.*?\);\s*\}', '', content, flags=re.DOTALL)
    content = re.sub(r'\s*if\s*\(loading\)\s*return null;', '', content)
    
    # 8. Minor cleanups
    # LatestNews loading ternary
    content = re.sub(r'loading \? \(\s*<div.*?loading latest news.*?</p></div>\s*\)\s*:\s*news\.length > 0 \?', 'posts.length > 0 ?', content, flags=re.DOTALL)
    content = content.replace('news.length > 0 ?', 'posts.length > 0 ?')
    content = content.replace('news.map', 'posts.map')
    content = content.replace('setNews(res.posts);', '')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Batch conversion completed successfully.")
