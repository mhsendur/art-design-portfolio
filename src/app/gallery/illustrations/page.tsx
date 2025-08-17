import { GalleryLayout } from '@/components/layout/gallery-layout';
import { GalleryGrid } from '@/components/artwork/gallery-grid';
import { getArtworkByType } from '@/lib/content';

export default async function IllustrationsPage() {
  const illustrations = await getArtworkByType('illustration');

  return (
    <GalleryLayout
      title="Illustrations"
      description="Digital and traditional illustrations showcasing creativity, imagination, and technical skill."
    >
      <GalleryGrid items={illustrations} type="illustration" />
    </GalleryLayout>
  );
} 