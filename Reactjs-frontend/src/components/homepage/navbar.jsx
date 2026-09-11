import React, { useState, useRef, useEffect, useCallback } from "react";
import style from './styles/navbar.module.css';

/* -------------------------------------------------------------------- */
/*  Icons — small hand-drawn line icons, no external icon library       */
/* -------------------------------------------------------------------- */

const ShirtIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 4 4.5 7 6.5 10 8.5 8.3V20h7V8.3L17.5 10l2-3-4-3-2 1.4h-3z" />
    </svg>
);

const PantsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 3.5h11l-.8 16.5h-3.6L12.3 9.8l-.9 10.2H7.3z" />
    </svg>
);

const ShoeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 17.2c0-2 1.8-3.2 3.7-3.2h1.9l2.2-3 4 1.1 1.1 2.1h3.6c1.2 0 1.5 1.6.7 2.6-.5.7-1.4 1.2-2.4 1.2H4.3c-.5 0-.8-.3-.8-.8z" />
        <path d="M3.5 17.2h17" />
    </svg>
);

const BagIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8h12l-1 12H7z" />
        <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
);

const ChevronIcon = ({ open }) => (
    <svg
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .25s ease" }}
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

const MenuIcon = ({ open }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
);

/* -------------------------------------------------------------------- */
/*  Data                                                                 */
/* -------------------------------------------------------------------- */

const CATEGORIES = [
    { id: "shirts", label: "Shirts", desc: "Everyday & formal fits", Icon: ShirtIcon, href: "/products/shirts" },
    { id: "pants", label: "Pants", desc: "Denim, chino & trousers", Icon: PantsIcon, href: "/products/pants" },
    { id: "shoes", label: "Shoes", desc: "Sneakers & formal wear", Icon: ShoeIcon, href: "/products/shoes" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
    const [cartCount, setCartCount] = useState(2);
    const [popKey, setPopKey] = useState(0);

    const navRef = useRef(null);
    const itemRefs = useRef({});
    const closeTimer = useRef(null);

    // scroll -> glass to solid
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // close mobile panel on wide viewport
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 720) setMobileOpen(false); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const moveIndicatorTo = useCallback((id) => {
        const el = itemRefs.current[id];
        if (!el) return;
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
        setHoveredId(id);
    }, []);

    const hideIndicator = () => {
        setIndicator((prev) => ({ ...prev, opacity: 0 }));
        setHoveredId(null);
    };

    const openDropdown = () => {
        clearTimeout(closeTimer.current);
        setDropdownOpen(true);
    };
    const scheduleClose = () => {
        clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
    };

    const onKeyDownProducts = (e) => {
        if (e.key === "Escape") setDropdownOpen(false);
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setDropdownOpen((v) => !v);
        }
    };

    const bumpCart = () => {
        setCartCount((c) => c + 1);
        setPopKey((k) => k + 1);
    };

    return (
        <div className={style.strataScope}>
            <nav className={`${style.strataNavbar} ${isScrolled ? style.isScrolled : ""}`}>
                <a
                    href="/"
                    className={`${style.strataLogo} ${style.strataFadeIn}`}
                    style={{ animationDelay: "0ms" }}
                >
                    STRATA
                </a>

                <ul
                    className={style.strataNav}
                    ref={navRef}
                    onMouseLeave={() => {
                        hideIndicator();
                        scheduleClose();
                    }}
                >
                    <span
                        className={style.strataNavIndicator}
                        style={{
                            transform: `translateX(${indicator.left}px)`,
                            width: indicator.width,
                            opacity: indicator.opacity,
                        }}
                    />

                    <li
                        className={`${style.strataNavItem} ${style.strataFadeIn}`}
                        style={{ animationDelay: "60ms" }}
                        onMouseEnter={() => {
                            moveIndicatorTo("products");
                            openDropdown();
                        }}
                    >
                        <button
                            type="button"
                            ref={(el) => (itemRefs.current.products = el)}
                            className={style.strataNavLink}
                            style={{
                                color:
                                    hoveredId === "products" || dropdownOpen
                                        ? "#fff"
                                        : undefined,
                            }}
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                            onClick={() => setDropdownOpen((v) => !v)}
                            onKeyDown={onKeyDownProducts}
                        >
                            Products
                            <ChevronIcon open={dropdownOpen} />
                        </button>

                        <div
                            className={`${style.strataDropdown} ${dropdownOpen ? style.isOpen : ""
                                }`}
                            onMouseEnter={openDropdown}
                            onMouseLeave={scheduleClose}
                            role="menu"
                        >
                            {CATEGORIES.map((cat, i) => (
                                <a
                                    key={cat.id}
                                    href={cat.href}
                                    role="menuitem"
                                    className={style.strataDropdownRow}
                                    style={{
                                        animationDelay: dropdownOpen
                                            ? `${80 + i * 60}ms`
                                            : "0ms",
                                    }}
                                >
                                    <span className={style.strataDropdownIcon}>
                                        <cat.Icon />
                                    </span>

                                    <span className={style.strataDropdownText}>
                                        <span className={style.strataDropdownLabel}>
                                            {cat.label}
                                        </span>

                                        <span className={style.strataDropdownDesc}>
                                            {cat.desc}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </li>

                    <li
                        className={`${style.strataNavItem} ${style.strataFadeIn}`}
                        style={{ animationDelay: "110ms" }}
                        onMouseEnter={() => {
                            moveIndicatorTo("offers");
                            scheduleClose();
                        }}
                    >
                        <a
                            href="/offers"
                            ref={(el) => (itemRefs.current.offers = el)}
                            className={style.strataNavLink}
                            style={{
                                color:
                                    hoveredId === "offers"
                                        ? "#fff"
                                        : undefined,
                            }}
                        >
                            Offers
                        </a>
                    </li>
                </ul>

                <div className={style.strataActions}>
                    <button
                        type="button"
                        className={`${style.strataCartBtn} ${style.strataFadeIn}`}
                        style={{ animationDelay: "150ms" }}
                        aria-label={`Cart, ${cartCount} items`}
                        onClick={bumpCart}
                        title="Demo: click to bump the cart count"
                    >
                        <BagIcon />
                        <span
                            className={style.strataCartBadge}
                            key={popKey}
                        >
                            {cartCount}
                        </span>
                    </button>

                    <button
                        type="button"
                        className={`${style.strataHamburger} ${style.strataFadeIn}`}
                        style={{ animationDelay: "150ms" }}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <MenuIcon open={mobileOpen} />
                    </button>
                </div>
            </nav>

            {/* Mobile panel */}
            <div
                className={`${style.strataMobile} ${mobileOpen ? style.isOpen : ""
                    }`}
            >
                <button
                    type="button"
                    className={style.strataMobileProductsToggle}
                    aria-expanded={mobileProductsOpen}
                    onClick={() => setMobileProductsOpen((v) => !v)}
                >
                    Products
                    <ChevronIcon open={mobileProductsOpen} />
                </button>

                <div
                    className={`${style.strataMobileSubmenu} ${mobileProductsOpen ? style.isOpen : ""
                        }`}
                >
                    {CATEGORIES.map((cat) => (
                        <a
                            key={cat.id}
                            href={cat.href}
                            className={style.strataMobileSublink}
                        >
                            <cat.Icon /> {cat.label}
                        </a>
                    ))}
                </div>

                <a
                    href="/offers"
                    className={style.strataMobileLink}
                >
                    Offers
                </a>
            </div>
        </div>
    )
}


export default Navbar