"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "@/components/ui/navigationMenu"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function MainNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/countries' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pays
            </NavigationMenuLink>
          </Link>
          <Link href='/wealth' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Fortunes
            </NavigationMenuLink>
          </Link>
          <Link href='/population' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Population
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
