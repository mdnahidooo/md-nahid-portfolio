"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Sun, Moon, Laptop } from "lucide-react";
import { Palette, Zap, Scroll, Sparkles, Music } from "lucide-react";

export default function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className="h-5 w-5 dark:hidden" />
                    <Moon className="h-5 w-5 hidden dark:block" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">

                {/* Base Themes */}
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Laptop className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Accent Themes ONLY */}
                <DropdownMenuItem onClick={() => setTheme("cyberpunk")}>
                    <Zap className="mr-2 h-4 w-4 text-fuchsia-500" />
                    Cyberpunk
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("retro")}>
                    <Palette className="mr-2 h-4 w-4 text-amber-500" />
                    Retro
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("paper")}>
                    <Scroll className="mr-2 h-4 w-4 text-stone-400" />
                    Paper
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("aurora")}>
                    <Sparkles className="mr-2 h-4 w-4 text-emerald-400" />
                    Aurora
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme("synthwave")}>
                    <Music className="mr-2 h-4 w-4 text-pink-500" />
                    Synthwave
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}