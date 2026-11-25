import Link from 'next/link';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsBody,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function NotFound() {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      <DocsPage>
        <DocsTitle>Page not found</DocsTitle>
        <DocsBody>
          <p>The page you are looking for does not exist or may have moved.</p>
          <p className="flex flex-wrap gap-4">
            <Link href="/" className="text-fd-primary underline underline-offset-4">
              Introduction
            </Link>
            <Link href="/quickstart" className="text-fd-primary underline underline-offset-4">
              Quickstart
            </Link>
          </p>
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
