# 1. Remove Kids Planet floating title from AboutUs.js
$content = Get-Content "src\components\AboutUs.js" -Raw
$content = $content -replace '(?s)<div className="about-three__img-title">.*?</div>', ''
Set-Content "src\components\AboutUs.js" -Value $content

# 2. Remove orange icons from CoreValues.js
$content = Get-Content "src\components\CoreValues.js" -Raw
$content = $content -replace '(?s)<div className="icon" style={{.*?</div>', ''
Set-Content "src\components\CoreValues.js" -Value $content

# 3. Remove Explore More button from Gallery.js
$content = Get-Content "src\components\Gallery.js" -Raw
$content = $content -replace '(?s)<div className="text-center" style={{ marginTop: ''50px'' }}>.*?</div>', ''
Set-Content "src\components\Gallery.js" -Value $content

# Remove taglines universally from components
$files = "PopularClasses.js", "AgeGroups.js", "Testimonials.js", "EventsNotices.js"
foreach ($file in $files) {
    $path = "src\components\$file"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        $content = $content -replace '(?s)<div className="section-title__tagline-box justify-content-center">.*?</div>', ''
        Set-Content $path -Value $content
    }
}
