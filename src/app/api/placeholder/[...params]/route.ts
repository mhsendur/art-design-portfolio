import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const [width, height] = params.params;
  
  // Simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect x="2" y="2" width="${parseInt(width) - 4}" height="${parseInt(height) - 4}" fill="none" stroke="#e5e5e5" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#a3a3a3" text-anchor="middle" dy=".3em">
        ${width} × ${height}
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
} 