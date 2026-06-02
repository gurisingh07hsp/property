"use client";

import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";

interface HeaderSelectorProps {
    headerStyle?: Number;
    scroll: boolean;
    isMobileMenu?: boolean;
    handleMobileMenu?: () => void;
}

export default function HeaderSelector({ headerStyle, scroll, isMobileMenu, handleMobileMenu }: HeaderSelectorProps) {
    const menuProps = { scroll, isMobileMenu, handleMobileMenu };
    if (headerStyle === 2) return <Header2 {...menuProps} />;
    if (headerStyle === 3) return <Header3 {...menuProps} />;
    if (headerStyle === 4) return <Header4 {...menuProps} />;
    if (headerStyle === 5) return <Header5 {...menuProps} />;
    return <Header1 {...menuProps} />;
} 