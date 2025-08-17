import { GalleryLayout } from '@/components/layout/gallery-layout';
import { GalleryGrid } from '@/components/artwork/gallery-grid';
import { getArtworkByType } from '@/lib/content';

export default async function PaintingsPage() {
  const paintings = await getArtworkByType('oil');

  return (
    <GalleryLayout
      title="Oil Paintings"
      description="Traditional art with a modern perspective. Each painting tells a story through color, texture, and emotion."
    >
      <GalleryGrid items={paintings} type="oil" />
    </GalleryLayout>
  );
} 