const fs = require('fs');

// Read both files
const indexContent = fs.readFileSync('index.html', 'utf8');
const newSection = fs.readFileSync('testimonial_final.txt', 'utf8');

// Find the start and end of the old testimonial section
const startMarker = '        <!-- Testimonials -->';
const endMarker = '        </section>';

const startIndex = indexContent.indexOf(startMarker);
if (startIndex === -1) {
    console.log('Start marker not found!');
    process.exit(1);
}

// Find the closing </section> tag after the start marker
const searchStart = startIndex + startMarker.length;
const endIndex = indexContent.indexOf(endMarker, searchStart);
if (endIndex === -1) {
    console.log('End marker not found!');
    process.exit(1);
}

// Calculate the end position (include the closing tag)
const endPosition = endIndex + endMarker.length;

// Build the new content
const before = indexContent.substring(0, startIndex);
const after = indexContent.substring(endPosition);
const newContent = before + newSection + after;

// Write the new content
fs.writeFileSync('index.html', newContent, 'utf8');
console.log('✅ Testimonial section replaced successfully!');
console.log(`Replaced ${endPosition - startIndex} characters with ${newSection.length} characters`);
