import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Blogs',
};

export default function BlogsPage() {
  return (
    <main className="pt-18">
      <Container className="py-section">
        <h1 className="text-h1 font-heading text-ink">Blogs</h1>
      </Container>
    </main>
  );
}
