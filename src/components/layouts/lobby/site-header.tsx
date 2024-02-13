"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PiListBold } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSelectedLayoutSegment } from "next/navigation";

export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}

const components: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "How to install dependencies and structure your app.",
      },
      {
        title: "Typography",
        href: "/docs/primitives/typography",
        description: "Styles for headings, paragraphs, lists...etc",
      },
    ],
  },
  {
    title: "Components",
    href: "/docs/components",
    description: "Re-usable components built using Radix UI and Tailwind CSS.",
    items: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Alert",
        href: "/docs/primitives/alert",
        description: "A component for displaying a short, important message.",
      },
      {
        title: "Badge",
        href: "/docs/primitives/badge",
        description: "A small status descriptor for UI elements.",
      },
      {
        title: "Button",
        href: "/docs/primitives/button",
        description: "A clickable button.",
      },
      {
        title: "Checkbox",
        href: "/docs/primitives/checkbox",
        description: "A control that allows users to select multiple options.",
      },
      {
        title: "Dialog",
        href: "/docs/primitives/dialog",
        description: "A modal dialog.",
      },
      {
        title: "Disclosure",
        href: "/docs/primitives/disclosure",
        description:
          "A disclosure is a button that controls the visibility of content.",
      },
      {
        title: "Group",
        href: "/docs/primitives/group",
        description: "A wrapper component that groups its children.",
      },
      {
        title: "Image",
        href: "/docs/primitives/image",
        description: "An image component.",
      },
      {
        title: "Input",
        href: "/docs/primitives/input",
        description: "A text input.",
      },
      {
        title: "Listbox",
        href: "/docs/primitives/listbox",
        description: "A listbox.",
      },
      {
        title: "Menu",
        href: "/docs/primitives/menu",
        description: "A menu.",
      },
      {
        title: "Radio",
        href: "/docs/primitives/radio",
        description: "A radio input.",
      },
      {
        title: "Select",
        href: "/docs/primitives/select",
        description: "A select input.",
      },
      {
        title: "Switch",
        href: "/docs/primitives/switch",
        description: "A switch input.",
      },
      {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A tab group.",
      },
      {
        title: "Textarea",
        href: "/docs/primitives/textarea",
        description: "A textarea.",
      },
      {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A tooltip.",
      },
    ],
  },
];

export const SiteHeader = () => {
  return (
    <header className="bg-teal-500 sticky top-0 z-10">
      <nav className="flex justify-between items-center py-2 max-w-7xl mx-auto px-4 md:px-8 2xl:p-0">
        <div className="flex items-center gap-4">
          <MobileNav mainNavItems={components} />
          <h1 className="text-5xl title font-bold text-white">Hustle</h1>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base text-white">
                  Getting started
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <h3 className="text-3xl title">Hustle</h3>
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base text-white">
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "bg-transparent !text-base text-white",
                    })}
                  >
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* <ul className="flex gap-2 text-lg font-medium">
            <li>Precios</li>
            <li>Recursos</li>
            <li>Conocenos</li>
          </ul> */}
        </div>
        <div className="flex items-center gap-4 font-medium">
          <a className="underline text-white font-bold" href="/">
            Ingresar
          </a>
          <a
            className="bg-white px-4 py-1.5 rounded-2xl font-semibold"
            href="/"
          >
            Únete
          </a>
        </div>
      </nav>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface MobileNavProps {
  mainNavItems: NavItem[];
}

export function MobileNav({ mainNavItems }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <PiListBold className="text-3xl text-white" />
          {/* <ViewVerticalIcon className="size-6" aria-hidden="true" /> */}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <h3 className="text-3xl title">Hustle</h3>
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="pl-1 pr-7">
            <Accordion
              type="multiple"
              defaultValue={mainNavItems.map((item) => item.title)}
              className="w-full"
            >
              {mainNavItems?.map((item) => (
                <AccordionItem value={item.title} key={item.title}>
                  <AccordionTrigger className="text-sm capitalize">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.items?.map((subItem) =>
                        subItem.href ? (
                          <MobileLink
                            key={item.title}
                            href={String(subItem.href)}
                            segment={String(segment)}
                            setIsOpen={setIsOpen}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div
                            key={item.title}
                            className="text-foreground/70 transition-colors"
                          >
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
