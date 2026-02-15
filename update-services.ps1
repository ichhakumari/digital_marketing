# PowerShell script to update all service pages efficiently

Write-Host "Updating remaining service pages..." -ForegroundColor Green

# Note: This script documents the manual updates needed for each page
# Due to file encoding and special characters, manual updates via multi_replace are recommended

$services = @(
    @{
        file = "social-media-marketing.html"
        title = "Social Media Marketing Services | Digital Marketing Agency Delhi NCR"
        metaDesc = "Expert Social Media Marketing services in Delhi NCR. Build brand awareness and engage your audience with strategic social media campaigns."
        breadcrumb = "Social Media Marketing"
        heading = "Social Media <span class=`"text-[#C4A484]`">Marketing</span>"
        tagline = "Build brand awareness and engage your audience with strategic social media marketing."
        cta = "Get Free Social Audit"
    },
    @{
        file = "content-marketing.html"
        title = "Content Marketing Services | Digital Marketing Agency Delhi NCR"
        metaDesc = "Professional Content Marketing services in Delhi NCR. Attract, engage, and convert with high-quality content that drives results."
        breadcrumb = "Content Marketing"
        heading = "Content <span class=`"text-[#C4A484]`">Marketing</span>"
        tagline = "Attract, engage, and convert your audience with high-quality content that drives results."
        cta = "Get Free Content Strategy"
    }
)

Write-Host "Service pages configuration ready for manual updates" -ForegroundColor Yellow
Write-Host "Total pages to update: $($services.Count)" -ForegroundColor Cyan
