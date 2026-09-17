import os
import re

# StatsCounter
path = 'src/components/StatsCounter.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
# Replace useState for facts, settings, loading
content = re.sub(r'\s*const \[.*?, set.*?\] = useState\(.*?\);', '', content)
# Replace signature
content = content.replace('export default function StatsCounter()', 'export default function StatsCounter({ facts = [], settings = null })')
# Replace the fetch block
content = re.sub(r'\s*useEffect\(\(\) => \{\s*async function getFactsData.*?getFactsData\(\);\s*\}, \[\]\);', '', content, flags=re.DOTALL)
# Remove loading check
content = re.sub(r'\s*if \(loading\) return null;', '', content)
content = content.replace('if (!loading && facts.length > 0)', 'if (facts.length > 0)')
content = content.replace('[loading, facts]', '[facts]')
# Fix imports
content = content.replace('import { fetchApi } from \'../utils/apiClient\';', '')
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

# HeroSlider
path = 'src/components/HeroSlider.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'\s*const \[.*?, set.*?\] = useState\(.*?\);', '', content)
content = content.replace('export default function HeroSlider()', 'export default function HeroSlider({ slides = [] })')
content = re.sub(r'\s*useEffect\(\(\) => \{\s*async function getBannerData.*?getBannerData\(\);\s*\}, \[\]\);', '', content, flags=re.DOTALL)
content = re.sub(r'\s*if\s*\(loading\)\s*\{\s*return\s*\(.*?\);\s*\}', '', content, flags=re.DOTALL)
content = content.replace('if (!loading && slides.length > 0)', 'if (slides.length > 0)')
content = content.replace('[loading, slides]', '[slides]')
content = content.replace('import { fetchApi } from \'../utils/apiClient\';', '')
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

# Header
path = 'src/components/Header.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('export default function Header()', 'export default function Header({ menuItems = [], footerSettings = null })')
content = re.sub(r'\s*const \[menuItems, setMenuItems\] = useState\(\[\]\);', '', content)
content = re.sub(r'\s*const \[footerSettings, setFooterSettings\] = useState\(null\);', '', content)
content = re.sub(r'\s*const \[loading, setLoading\] = useState\(true\);', '', content)
content = re.sub(r'\s*useEffect\(\(\) => \{\s*async function fetchHeaderData.*?fetchHeaderData\(\);\s*\}, \[\]\);', '', content, flags=re.DOTALL)
content = content.replace('import { fetchApi } from \'../utils/apiClient\';', '')
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
    
print("Second batch completed.")
