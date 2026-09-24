import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion as FdAccordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card as FdCard, Cards } from 'fumadocs-ui/components/card';
import { Step as FdStep, Steps } from 'fumadocs-ui/components/steps';
import { Tab as FdTab, Tabs as FdTabs } from 'fumadocs-ui/components/tabs';
import { Children, isValidElement, type ReactNode } from 'react';
import { Mermaid } from '@/components/mermaid';

// Mintlify-style primitives mapped onto Fumadocs, so content stays portable.

type WithChildren = { children?: ReactNode };

const Note = ({ children }: WithChildren) => <Callout type="info">{children}</Callout>;
const Info = ({ children }: WithChildren) => <Callout type="info">{children}</Callout>;
const Tip = ({ children }: WithChildren) => <Callout type="idea">{children}</Callout>;
const Warning = ({ children }: WithChildren) => <Callout type="warn">{children}</Callout>;
const Check = ({ children }: WithChildren) => <Callout type="success">{children}</Callout>;

const AccordionGroup = ({ children }: WithChildren) => (
  <Accordions multiple>{children}</Accordions>
);

function Accordion({ title, children }: WithChildren & { title: string; icon?: string }) {
  return <FdAccordion title={title}>{children}</FdAccordion>;
}

const Columns = ({ children }: WithChildren & { cols?: number }) => <Cards>{children}</Cards>;

function Card({ title, href, children }: WithChildren & { title: string; href?: string; icon?: string }) {
  return (
    <FdCard title={title} href={href}>
      {children}
    </FdCard>
  );
}

function Step({ title, children }: WithChildren & { title: string }) {
  return (
    <FdStep>
      <h3>{title}</h3>
      {children}
    </FdStep>
  );
}

function Tabs({ children }: WithChildren) {
  const items = Children.toArray(children)
    .filter(isValidElement)
    .map((child) => (child.props as { title: string }).title);
  return <FdTabs items={items}>{children}</FdTabs>;
}

function Tab({ title, children }: WithChildren & { title: string }) {
  return <FdTab value={title}>{children}</FdTab>;
}

type ParamFieldProps = WithChildren & {
  path?: string;
  body?: string;
  query?: string;
  type?: string;
  required?: boolean;
  default?: string;
};

function ParamField({ path, body, query, type, required, default: def, children }: ParamFieldProps) {
  const name = path ?? body ?? query;
  return (
    <div className="not-prose my-4 border-b pb-4 last:border-b-0">
      <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
        <span className="font-semibold text-fd-foreground">{name}</span>
        {type && (
          <span className="rounded bg-fd-muted px-1.5 py-0.5 text-xs text-fd-muted-foreground">{type}</span>
        )}
        {required && <span className="text-xs font-medium text-red-500">required</span>}
        {def && <span className="text-xs text-fd-muted-foreground">default: {def}</span>}
      </div>
      <div className="mt-2 text-sm text-fd-muted-foreground [&_code]:text-fd-foreground">{children}</div>
    </div>
  );
}

const methodColors: Record<string, string> = {
  GET: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  POST: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
};

function Endpoint({ method, path }: { method: string; path: string }) {
  return (
    <div className="not-prose my-6 flex items-center gap-3 rounded-lg border bg-fd-card px-4 py-3 font-mono text-sm">
      <span className={`rounded px-2 py-0.5 text-xs font-bold ${methodColors[method] ?? ''}`}>{method}</span>
      <span className="break-all text-fd-foreground">{path}</span>
    </div>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Note,
    Info,
    Tip,
    Warning,
    Check,
    AccordionGroup,
    Accordion,
    Columns,
    Card,
    Steps,
    Step,
    Tabs,
    Tab,
    ParamField,
    Endpoint,
    Mermaid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
