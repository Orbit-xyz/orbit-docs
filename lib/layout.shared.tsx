import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appUrl, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/logo/light.png" alt="" width={24} height={24} className="dark:hidden" />
          <Image src="/logo/dark.png" alt="" width={24} height={24} className="hidden dark:block" />
          <span className="font-semibold">Orbit</span>
          <span className="text-fd-muted-foreground font-normal">Docs</span>
        </>
      ),
      url: '/',
    },
    links: [
      { text: 'Dashboard', url: `${appUrl}/dashboard`, external: true },
      { text: 'Contract', url: 'https://github.com/Orbit-xyz/Orbit', external: true },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
