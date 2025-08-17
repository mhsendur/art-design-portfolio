import { GalleryLayout } from '@/components/layout/gallery-layout';
import { GalleryGrid } from '@/components/artwork/gallery-grid';
import { getArtworkByType } from '@/lib/content';

export default async function PhotosPage() {
  const photos = await getArtworkByType('photo');

  return (
    <GalleryLayout
      title="Photography"
      description="Capturing moments, emotions, and stories through the lens. A collection of my photographic explorations."
    >
      <GalleryGrid items={photos} type="photo" />
    </GalleryLayout>
  );
} 