import { a as __toESM } from "../_runtime.mjs";
import { i as performance_default, n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleAlert, C as FolderCheck, D as Earth, E as ExternalLink, F as Award, I as ArrowUp, L as ArrowLeft, M as ChevronLeft, N as Check, O as ClipboardCheck, P as Calculator, R as Anchor, S as Headphones, T as FileCheck, _ as MapPin, a as Target, b as LoaderCircle, c as ShieldCheck, d as Plane, f as Phone, g as Menu, h as MessageCircle, i as TrendingUp, j as ChevronRight, k as CircleCheck, l as Send, m as PackageCheck, n as X, o as Stamp, p as Package, r as Users, s as Ship, t as Zap, u as Plus, v as Mail, w as FileText, x as Info, y as Lock } from "../_libs/lucide-react.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CqQSr-sj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "ASN",
	fullName: "ASN للاستيراد والتصدير والتخليص الجمركي",
	phones: [{
		display: "+20 109 992 0438",
		href: "tel:+201099920438"
	}, {
		display: "+20 100 180 3403",
		href: "tel:+201001803403"
	}],
	email: "contact@asn-eg.com",
	whatsapp: {
		number: "201019944112",
		url: "https://wa.me/201019944112?text=" + encodeURIComponent("مرحبًا، أود الحصول على استشارة مجانية بخصوص خدمات الاستيراد والتصدير والتخليص الجمركي.")
	},
	mapsUrl: "https://www.google.com/maps/place/30%C2%B006'57.4%22N+31%C2%B024'29.1%22E/@30.1159477,31.4102736,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1159477!4d31.4080849",
	mapsEmbed: "https://www.google.com/maps?q=30.1159477,31.4080849&z=17&output=embed",
	emailjs: {
		serviceId: "YOUR_SERVICE_ID",
		templateId: "YOUR_TEMPLATE_ID",
		publicKey: "YOUR_PUBLIC_KEY"
	}
};
var NAV_ITEMS = [
	{
		label: "الرئيسية",
		href: "#home"
	},
	{
		label: "عن الشركة",
		href: "#about"
	},
	{
		label: "فريق العمل",
		href: "#team"
	},
	{
		label: "خدماتنا",
		href: "#services"
	},
	{
		label: "لماذا ASN",
		href: "#why-asn"
	},
	{
		label: "رسالتنا",
		href: "#our-message"
	},
	{
		label: "الأسئلة الشائعة",
		href: "#faq"
	},
	{
		label: "تواصل معنا",
		href: "#contact"
	}
];
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-navy text-white text-xs sm:text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn flex h-11 items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 opacity-90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "size-3.5 text-accent",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "جمهورية مصر العربية" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [SITE.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: p.href,
					className: "hidden sm:inline-flex items-center gap-1.5 opacity-90 transition hover:text-accent hover:opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-3.5",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "ltr-num tracking-wide",
						children: p.display
					})]
				}, p.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.phones[0].href,
					className: "sm:hidden inline-flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-3.5",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "ltr-num",
						children: SITE.phones[0].display
					})]
				})]
			})]
		})
	});
}
var asn_logo_default = "/assets/asn-logo-DX0dPGth.png";
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-white/85 backdrop-blur"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-asn flex h-20 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3 shrink-0",
					"aria-label": "ASN — الرئيسية",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: asn_logo_default,
						alt: "شعار ASN",
						width: 56,
						height: 56,
						className: "size-12 md:size-14 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex flex-col leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-extrabold text-navy tracking-tight",
							children: "ASN"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: "للاستيراد والتصدير والتخليص الجمركي"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden lg:flex items-center gap-1 text-sm font-semibold text-navy",
					children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "relative px-3 py-2 rounded-lg transition hover:text-secondary hover:bg-muted",
						children: item.label
					}) }, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.whatsapp.url,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden sm:inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-4",
							"aria-hidden": true
						}), "استشارة مجانية"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-navy hover:bg-muted",
						onClick: () => setOpen((v) => !v),
						"aria-label": "فتح القائمة",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: { duration: .25 },
			className: "lg:hidden overflow-hidden border-t border-border bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "container-asn py-3 flex flex-col",
				children: [NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy hover:bg-muted",
					children: item.label
				}) }, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.whatsapp.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-4 py-3 text-sm font-bold text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "استشارة مجانية"]
				})]
			})
		}) })]
	});
}
var slides = [
	{
		img: "/assets/hero-1-DqYa7lXI.jpg",
		headline: "حلول متكاملة للعمليات اللوجستية، مع أفضل شركة شحن دولي بترخيص IATA",
		kicker: "شحن دولي • تخليص جمركي"
	},
	{
		img: "/assets/hero-2-Bbmqyd-2.jpg",
		headline: "أسرع طريق استيراد وتصدير وتخليص جمركي في منصة واحدة",
		kicker: "جوي • بحري • بري"
	},
	{
		img: "/assets/hero-3-Cuo3m6Uo.jpg",
		headline: "العالم بين يديك.. الاستيراد والتصدير أسهل مع ASN الحاصلة على ترخيص IATA",
		kicker: "شبكة عالمية"
	}
];
function Hero() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5e3);
		return () => clearInterval(t);
	}, []);
	const next = () => setI((v) => (v + 1) % slides.length);
	const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				children: slides.map((s, idx) => idx === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "absolute inset-0",
					initial: {
						opacity: 0,
						scale: 1.08
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: 1.04
					},
					transition: {
						duration: 1.2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: "",
							className: "h-full w-full object-cover",
							width: 1920,
							height: 1080,
							fetchPriority: idx === 0 ? "high" : "auto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-navy/85 via-navy/55 to-navy/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							style: { background: "radial-gradient(80% 60% at 80% 30%, transparent 0%, rgba(14,42,71,0.6) 100%)" }
						})
					]
				}, idx) : null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex h-full items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-asn",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								transition: {
									duration: .7,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs sm:text-sm font-bold text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent animate-pulse" }), slides[i].kicker]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-6 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25]",
									children: slides[i].headline
								})]
							}, i)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .4,
								duration: .6
							},
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.whatsapp.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-elevated transition hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), "استشارة مجانية"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-xl glass-dark px-6 py-3.5 text-sm sm:text-base font-bold text-white transition hover:bg-white/20",
								children: "تواصل معنا"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prev,
				"aria-label": "السابق",
				className: "absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 grid place-items-center size-11 md:size-12 rounded-full glass-dark text-white hover:bg-white/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: next,
				"aria-label": "التالي",
				className: "absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 grid place-items-center size-11 md:size-12 rounded-full glass-dark text-white hover:bg-white/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2",
				children: slides.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(idx),
					"aria-label": `شريحة ${idx + 1}`,
					className: `h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-4 bg-white/40 hover:bg-white/70"}`
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "absolute bottom-0 left-0 right-0 z-10 w-full text-background",
				viewBox: "0 0 1440 80",
				preserveAspectRatio: "none",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "currentColor",
					d: "M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,80L0,80Z"
				})
			})
		]
	});
}
var variants = {
	up: {
		hidden: {
			opacity: 0,
			y: 40
		},
		show: {
			opacity: 1,
			y: 0
		}
	},
	left: {
		hidden: {
			opacity: 0,
			x: -40
		},
		show: {
			opacity: 1,
			x: 0
		}
	},
	right: {
		hidden: {
			opacity: 0,
			x: 40
		},
		show: {
			opacity: 1,
			x: 0
		}
	},
	scale: {
		hidden: {
			opacity: 0,
			scale: .92
		},
		show: {
			opacity: 1,
			scale: 1
		}
	},
	none: {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	}
};
function Reveal({ children, dir = "up", delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: variants[dir],
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Counter({ to, suffix = "+", duration = 2e3 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance_default.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "ltr-num",
		children: [n, suffix]
	});
}
var about_default = "/assets/about-XMg2ISG4.jpg";
var stats = [
	{
		icon: Anchor,
		value: 15,
		suffix: "+",
		label: "سنوات الخبرة"
	},
	{
		icon: Users,
		value: 850,
		suffix: "+",
		label: "العملاء"
	},
	{
		icon: Package,
		value: 12e3,
		suffix: "+",
		label: "الشحنات"
	},
	{
		icon: Earth,
		value: 40,
		suffix: "+",
		label: "الدول"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 lg:py-32 bg-background overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "right",
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-4 rounded-3xl gradient-primary opacity-10 blur-2xl",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden rounded-3xl shadow-elevated bg-section",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_default,
									alt: "شبكة الشحن الدولي",
									className: "w-full h-auto",
									width: 1200,
									height: 1e3,
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl shadow-elevated p-4 animate-float",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid place-items-center size-12 rounded-xl gradient-primary text-white font-black",
										children: "IATA"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "اعتماد دولي"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-navy",
											children: "ترخيص IATA"
										})]
									})]
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 lg:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						dir: "left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block text-xs font-black tracking-widest text-secondary uppercase",
								children: "من نحن"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy",
								children: ["عن ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "الشركة"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4 text-navy-light leading-loose text-[15px] sm:text-base",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ASN شركة استيراد وتصدير جمركي رائدة في جمهورية مصر العربية، وتعتبر من أهم شركات الشحن الدولي الحاصلة على ترخيص IATA." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "تمتلك الشركة خبرات واسعة في تقديم خدمات الشحن وإنهاء الإجراءات القانونية والجمركية. تُركز على تلبية متطلبات العميل، ونسعى لمواكبة التطويرات، وإتمام عملنا بأسرع وأسهل الطرق، وأكثرها أمانًا وتوفيرًا لعملائنا." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "شركة تخليص جمركي متخصصة في جميع الخدمات اللوجستية الخاصة بالاستيراد والتصدير من وإلى جمهورية مصر العربية. نتعاقد مع أفضل شركات شحن دولي وأهم شركات الشحن العالمية لتلبية احتياجات عملائنا بأسعار تنافسية، وجودة عالية." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated",
									children: "تواصل معنا الآن"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SITE.whatsapp.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "ms-3 inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-navy hover:border-secondary",
									children: "استشارة مجانية"
								})]
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				dir: "up",
				className: "mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated hover:border-secondary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-6 -left-6 size-24 rounded-full gradient-primary opacity-5 group-hover:opacity-10 transition" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "size-8 text-secondary",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-3xl lg:text-4xl font-black text-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.value,
									suffix: s.suffix
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground font-semibold",
								children: s.label
							})
						]
					}, s.label))
				})
			})]
		})
	});
}
var team_default = "/assets/team-CZGcn-B5.jpg";
var timeline = [
	{
		icon: FileText,
		label: "استلام المستندات"
	},
	{
		icon: ClipboardCheck,
		label: "مراجعة البيانات"
	},
	{
		icon: FolderCheck,
		label: "إعداد الملفات"
	},
	{
		icon: Stamp,
		label: "التخليص الجمركي"
	},
	{
		icon: Ship,
		label: "خروج الشحنة"
	},
	{
		icon: PackageCheck,
		label: "التسليم"
	}
];
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "relative py-24 lg:py-32 bg-section overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					dir: "right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block text-xs font-black tracking-widest text-secondary uppercase",
							children: "Work Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy",
							children: ["فريق ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "العمل"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-navy-light leading-loose text-[15px] sm:text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "تضم شركة ASN فريق عمل متميز ومتخصص في شؤون الجمارك، وإنهاء كافة الإجراءات بجميع المنافذ الجمركية. يمتلك فريقنا الخبرة والكفاءة التي تمكنه من إتمام إجراءات الاستيراد والتصدير والتخليص الجمركي في وقت قياسي داخل جميع موانئ الجمهورية." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "فريق عمل ASN مُدرب على أعلى مستوى من المهارة والاحترافية، لتوفير أقصى درجات الالتزام بمعايير الخدمة. نهتم دائمًا بإعداد المستندات اللازمة لضمان إتمام عمليات العملاء، دون استنزاف الوقت والمال نتيجة أي تأخير." })]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: team_default,
							alt: "عمليات التخليص الجمركي",
							className: "w-full h-auto",
							width: 1200,
							height: 900,
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				dir: "up",
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-center text-2xl font-black text-navy mb-12",
					children: ["مراحل عمل ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "ASN"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-8 right-8 left-8 h-0.5 bg-divider hidden md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-8 right-8 h-0.5 gradient-primary hidden md:block",
							style: { width: "calc(100% - 4rem)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
							children: timeline.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								dir: "up",
								delay: idx * .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mx-auto grid place-items-center size-16 rounded-2xl gradient-primary text-white shadow-elevated transition group-hover:scale-110",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
											className: "size-7",
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-2 -right-2 grid place-items-center size-6 rounded-full bg-white text-secondary text-[11px] font-black shadow-soft",
											children: idx + 1
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm font-bold text-navy",
										children: step.label
									})]
								})
							}, step.label))
						})
					]
				})]
			})]
		})
	});
}
var services$1 = [
	{
		icon: ShieldCheck,
		title: "تخليص جمركي في وقت قياسي",
		desc: "مكتب تخليص جمركي متخصص في إعداد المستندات اللازمة، لتخليص الشحنات في الجُمرك الصادر أو الوارد أو الترانزيت، وإخراجها في أسرع وقت."
	},
	{
		icon: Plane,
		title: "الشحن الجوي والبحري والبري",
		desc: "نتعاقد مع أفضل وأسرع شركات الشحن العالمية مع تتبع الشحنات بدقة عالية، حتى تسليمها بأمان."
	},
	{
		icon: FileCheck,
		title: "استيراد وتصدير لحساب الغير بعقود قانونية",
		desc: "ترغب بالاستيراد من الصين أو دولة أخرى؟ نوفر لك هذه الخدمة بعقود قانونية، وطُرق آمنة. تواصل معنا للتعرف على الشروط والأوراق المطلوبة."
	},
	{
		icon: Calculator,
		title: "حساب ضريبة جمركية",
		desc: "يتم احتساب القيمة الجمركية على حسب الشحنة. يمكنك طلب استشارة مجانية لحساب الضريبة قبل الاستيراد أو التصدير."
	},
	{
		icon: MessageCircle,
		title: "استشارات مجانية في الاستيراد والتصدير والتخليص الجمركي",
		desc: "نمتلك كوادر متخصصة للإجابة عن كافة الأسئلة والاستفسارات الخاصة بإجراءات الاستيراد والتصدير والتخليص الجمركي."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative py-24 lg:py-32 bg-section overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 opacity-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 right-10 size-72 rounded-full bg-accent/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-20 left-10 size-72 rounded-full bg-secondary/20 blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					dir: "up",
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block text-xs font-black tracking-widest text-secondary uppercase",
							children: "Our Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy",
							children: ["خدمات", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "نا"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-navy-light leading-loose",
							children: "تقدم شركة ASN خدمات الاستيراد والتصدير والتخليص الجمركي، بكافة موانئ جمهورية مصر العربية، في وقت قياسي، بأفضل جودة، وأقل تكلفة."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: services$1.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						dir: "up",
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated hover:border-secondary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -left-16 size-40 rounded-full gradient-primary opacity-0 blur-2xl transition group-hover:opacity-20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative grid place-items-center size-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/20 text-secondary transition group-hover:scale-110 group-hover:from-secondary group-hover:to-primary group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "size-8",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-black text-navy leading-snug",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-navy-light leading-loose",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SITE.whatsapp.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary",
									children: ["استشارة مجانية", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 transition group-hover:-translate-x-1" })]
								})
							]
						})
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "up",
					className: "mt-14 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-bold text-white shadow-elevated transition hover:-translate-y-0.5",
						children: "تواصل معنا الآن"
					})
				})
			]
		})]
	});
}
var world_map_default = "/assets/world-map-DVUbJhvP.jpg";
var features = [
	"ترخيص واعتماد IATA الدولي",
	"إجراءات أمان عالية لسلامة البضائع والشحنات",
	"فريق عمل مُدرَّب ومحترف",
	"سهولة وسرعة إنهاء الإجراءات الجمركية",
	"تقديم أفضل خدمات الشحن الدولي والتخليص الجمركي",
	"الاهتمام بتوفير أفضل أسعار الشحن والتخليص الجمركي",
	"نضمن لعملائنا السرعة والدقة في التنفيذ",
	"استلام الشحنة من مكان العميل، وتجهيزها، وشحنها إلى محطة الوصول",
	"توفير خدمة عملاء مميزة على مدار الساعة",
	"نقدم استشارات جمركية وفنية مجانية"
];
function WhyASN() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "why-asn",
		className: "relative py-24 lg:py-32 bg-navy text-white overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				style: {
					backgroundImage: `url(${world_map_default})`,
					backgroundSize: "cover",
					backgroundPosition: "center"
				},
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-asn relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						dir: "right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block text-xs font-black tracking-widest text-accent uppercase",
								children: "Why ASN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white",
								children: ["لماذا ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "ASN؟"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-white/80 leading-loose",
								children: "تمتلك ASN العديد من الميزات التنافسية، التي جعلتها تتربع على قمة مجال الاستيراد والتصدير والتخليص الجمركي في سنوات معدودة."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 relative overflow-hidden rounded-3xl glass-dark p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-8 -left-8 grid place-items-center size-28 rounded-full bg-accent/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid place-items-center size-20 rounded-2xl bg-white text-primary shadow-glow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
											className: "size-10",
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-accent tracking-wider uppercase",
											children: "اعتماد دولي"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-2xl font-black",
											children: "IATA"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-white/70",
											children: "International Air Transport Association"
										})
									] })]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							dir: "left",
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group h-full flex items-start gap-3 rounded-2xl glass-dark p-5 transition hover:bg-white/10 hover:border-accent/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid place-items-center size-9 shrink-0 rounded-lg bg-accent/20 text-accent transition group-hover:bg-accent group-hover:text-navy",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-5",
										strokeWidth: 2.5
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-white/95 font-medium",
									children: f
								})]
							})
						}, f))
					})]
				})
			})
		]
	});
}
var cards = [
	{
		icon: TrendingUp,
		title: "تشجيع الاستثمار",
		desc: "تعمل ASN على تشجيع الاستثمار لكافة القطاعات الاقتصادية، من خلال تقديم الحلول المتكاملة للشحن الدولي والتخليص الجمركي والخدمات اللوجستية."
	},
	{
		icon: Info,
		title: "تقديم المعلومات الدقيقة",
		desc: "نؤهل العميل بمنحه المعلومات الدقيقة والصحيحة، التى يحتاجها قبل الشروع في عملية الاستيراد والتصدير."
	},
	{
		icon: Target,
		title: "تنمية أعمال العملاء",
		desc: "نساعد عملائنا على تنمية وتطوير أعمالهم، وتحقيق أهدافهم، دون الوقوع في أي خطأ يتعلق بتطبيق القوانين والأنظمة، حتى نضمن استمرارية أعمالهم."
	}
];
function OurMessage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "our-message",
		className: "relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-section to-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-[0.04]",
			style: {
				backgroundImage: "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
				backgroundSize: "60px 60px"
			},
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				dir: "up",
				className: "text-center max-w-3xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block text-xs font-black tracking-widest text-secondary uppercase",
					children: "Our Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy",
					children: ["رسالت", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "نا"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid md:grid-cols-3 gap-6",
				children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "up",
					delay: i * .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-3xl bg-white border border-border p-8 shadow-soft transition hover:-translate-y-2 hover:shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 h-1.5 w-full gradient-primary scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid place-items-center size-16 rounded-2xl gradient-primary text-white shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
									className: "size-8",
									strokeWidth: 1.75
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-black text-navy",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-navy-light leading-loose",
								children: c.desc
							})
						]
					})
				}, c.title))
			})]
		})]
	});
}
function ConversionCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-20 lg:py-24 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-asn",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				dir: "up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl gradient-primary p-8 sm:p-12 lg:p-16 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 size-72 rounded-full bg-white/10 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-24 size-72 rounded-full bg-accent/30 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "absolute inset-0 w-full h-full opacity-20",
							viewBox: "0 0 800 400",
							fill: "none",
							"aria-hidden": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,300 Q200,200 400,250 T800,200",
								stroke: "white",
								strokeWidth: "1",
								strokeDasharray: "4 6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,350 Q300,150 600,250 T800,300",
								stroke: "white",
								strokeWidth: "1",
								strokeDasharray: "4 6"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col lg:flex-row items-center justify-between gap-8 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center lg:text-right max-w-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl sm:text-4xl lg:text-5xl font-black leading-tight",
									children: "جاهز لبدء عملية الاستيراد أو التصدير؟"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-white/90 text-base sm:text-lg leading-loose",
									children: "تواصل معنا الآن واحصل على استشارة مجانية من فريق ASN."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SITE.whatsapp.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-primary shadow-soft transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), "استشارة مجانية"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-5" }), "تواصل معنا"]
								})]
							})]
						})
					]
				})
			})
		})
	});
}
var items = [
	{
		icon: Zap,
		label: "سرعة التنفيذ"
	},
	{
		icon: ShieldCheck,
		label: "الالتزام"
	},
	{
		icon: Lock,
		label: "الأمان"
	},
	{
		icon: Target,
		label: "الدقة"
	},
	{
		icon: Award,
		label: "الخبرة"
	},
	{
		icon: Headphones,
		label: "الدعم المستمر"
	}
];
function Trust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 lg:py-20 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-asn",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "up",
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-white p-6 transition hover:border-secondary/40 hover:shadow-soft hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center size-14 rounded-2xl bg-section text-secondary transition group-hover:gradient-primary group-hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
								className: "size-7",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-navy",
							children: it.label
						})]
					})
				}, it.label))
			})
		})
	});
}
var faqs = [
	{
		q: "ما هي خطة الأسعار داخل شركة ASN؟",
		a: "تختلف الأسعار حسب تفاصيل الشحنة، ومتطلبات العميل. لكننا نضمن لعملائنا توفير أفضل خدمة، بأسعار تنافسية."
	},
	{
		q: "هل السعر يشمل الشحن والتخليص الجمركي؟",
		a: "نعم، في شركة ASN نضمن لعملائنا شمول السعر لتكاليف الشحن وإجراءات التخليص الجمركي."
	},
	{
		q: "ما هي خطة الحجز وتفاصيل الشحن؟",
		a: "شركة ASN تتعاقد مع أفضل شركات شحن دولي لتوفير كافة الاختيارات لعملائنا، ليتمكن العميل من اختيار خطة الحجز والشحن المناسبة له."
	},
	{
		q: "هل يوجد تتبع للشحنة؟",
		a: "نحرص في شركة ASN على توفير مسار تتبع للشحنة خطوة بخطوة، ليطمئن العميل على شحنته في أي وقت، حتى محطة الوصول بأمان."
	},
	{
		q: "هل تتوفر خدمة استلام الشحنة من مكان العميل؟",
		a: "سواء كنت داخل القاهرة أو خارجها، نوفر لكم خدمة استلام الشحنة من مكان العميل، وتجهيزها بإحكام، وشحنها إلى جهة الوصول."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "relative py-24 lg:py-32 bg-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				dir: "up",
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-xs font-black tracking-widest text-secondary uppercase",
						children: "FAQs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy",
						children: ["أهم ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "الأسئلة"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-navy-light",
						children: "إجابات على أكثر الأسئلة شيوعًا حول خدمات ASN."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-4",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						dir: "up",
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `overflow-hidden rounded-2xl border bg-white shadow-soft transition ${isOpen ? "border-secondary/50 shadow-elevated" : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								className: "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right",
								"aria-expanded": isOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base sm:text-lg font-bold text-navy leading-relaxed",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid place-items-center size-9 shrink-0 rounded-full transition ${isOpen ? "gradient-primary text-white rotate-45" : "bg-section text-secondary"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .3,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-5 sm:px-6 pb-6 text-navy-light leading-loose text-[15px] border-t border-border pt-4",
										children: f.a
									})
								})
							})]
						})
					}, f.q);
				})
			})]
		})
	});
}
var egPhone = /^(?:\+?20|0)?1[0125]\d{8}$/;
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = {
			name: String(fd.get("name") || "").trim(),
			phone: String(fd.get("phone") || "").trim(),
			email: String(fd.get("email") || "").trim(),
			subject: String(fd.get("subject") || "").trim(),
			message: String(fd.get("message") || "").trim()
		};
		const newErrors = {};
		if (!data.name) newErrors.name = "الرجاء إدخال الاسم";
		if (!data.phone) newErrors.phone = "الرجاء إدخال رقم الهاتف";
		else if (!egPhone.test(data.phone.replace(/\s/g, ""))) newErrors.phone = "رقم هاتف مصري غير صحيح";
		if (!data.email) newErrors.email = "الرجاء إدخال البريد الإلكتروني";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "بريد إلكتروني غير صحيح";
		if (!data.subject) newErrors.subject = "الرجاء إدخال عنوان الرسالة";
		if (!data.message) newErrors.message = "الرجاء إدخال تفاصيل الرسالة";
		setErrors(newErrors);
		if (Object.keys(newErrors).length) return;
		setStatus("loading");
		try {
			const { serviceId, templateId, publicKey } = SITE.emailjs;
			if (serviceId.startsWith("YOUR_")) await new Promise((r) => setTimeout(r, 900));
			else await es_default.send(serviceId, templateId, data, { publicKey });
			setStatus("success");
			e.target.reset();
			setTimeout(() => setStatus("idle"), 6e3);
		} catch (err) {
			console.error(err);
			setStatus("error");
			setTimeout(() => setStatus("idle"), 6e3);
		}
	};
	const inputCls = (name) => `w-full rounded-xl border ${errors[name] ? "border-destructive" : "border-border"} bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 lg:py-32 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					dir: "up",
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block text-xs font-black tracking-widest text-secondary uppercase",
							children: "Contact Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-navy",
							children: ["تواصل ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "معنا"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-navy-light leading-loose",
							children: "نسعد بالاستماع إليكم، ونُجيب على جميع أسئلتكم واستفساراتكم."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid lg:grid-cols-5 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								dir: "right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-3xl border border-border bg-white p-6 shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid place-items-center size-12 rounded-xl gradient-primary text-white shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-black text-navy",
												children: "اتصل بنا"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 flex flex-col gap-1",
												children: SITE.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: p.href,
													dir: "ltr",
													className: "ltr-num text-sm font-bold text-navy hover:text-secondary transition",
													children: p.display
												}, p.href))
											})]
										})]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								dir: "right",
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-3xl border border-border bg-white p-6 shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid place-items-center size-12 rounded-xl gradient-primary text-white shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-black text-navy",
												children: "البريد الإلكتروني"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${SITE.email}`,
												className: "mt-2 block text-sm font-bold text-navy hover:text-secondary transition break-all",
												children: SITE.email
											})]
										})]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								dir: "right",
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-3xl border border-border bg-white p-6 shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid place-items-center size-12 rounded-xl gradient-primary text-white shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-base font-black text-navy",
													children: "العنوان"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-navy-light",
													children: "جمهورية مصر العربية — القاهرة"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: SITE.mapsUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary",
													children: ["فتح في خرائط جوجل", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
												})
											]
										})]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						dir: "left",
						className: "lg:col-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							noValidate: true,
							className: "rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "name",
												className: "block text-sm font-bold text-navy mb-2",
												children: "الاسم"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "name",
												name: "name",
												type: "text",
												className: inputCls("name"),
												placeholder: "الاسم الكامل"
											}),
											errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.name
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "phone",
												className: "block text-sm font-bold text-navy mb-2",
												children: "رقم الهاتف"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "phone",
												name: "phone",
												type: "tel",
												dir: "ltr",
												className: inputCls("phone") + " ltr-num text-right",
												placeholder: "01xxxxxxxxx"
											}),
											errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-destructive",
												children: errors.phone
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "email",
													className: "block text-sm font-bold text-navy mb-2",
													children: "البريد الإلكتروني"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "email",
													name: "email",
													type: "email",
													dir: "ltr",
													className: inputCls("email") + " text-right",
													placeholder: "you@example.com"
												}),
												errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-destructive",
													children: errors.email
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "subject",
													className: "block text-sm font-bold text-navy mb-2",
													children: "عنوان الرسالة"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "subject",
													name: "subject",
													type: "text",
													className: inputCls("subject"),
													placeholder: "بخصوص..."
												}),
												errors.subject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-destructive",
													children: errors.subject
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "message",
													className: "block text-sm font-bold text-navy mb-2",
													children: "تفاصيل الرسالة"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "message",
													name: "message",
													rows: 5,
													className: inputCls("message") + " resize-none",
													placeholder: "اكتب رسالتك هنا..."
												}),
												errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-destructive",
													children: errors.message
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: status === "loading",
									className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated disabled:opacity-70 disabled:hover:translate-y-0",
									children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }), " جارٍ الإرسال..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-5" }), " إرسال الرسالة"] })
								}),
								status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 shrink-0 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تم إرسال رسالتك بنجاح، وسيقوم فريق ASN بالتواصل معك في أقرب وقت." })]
								}),
								status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5 shrink-0 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تعذر إرسال الرسالة، يرجى المحاولة مرة أخرى." })]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					dir: "up",
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl border border-border shadow-elevated bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "موقع ASN على خرائط جوجل",
							src: SITE.mapsEmbed,
							width: "100%",
							height: "420",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							className: "w-full block"
						})
					})
				})
			]
		})
	});
}
var services = [
	"تخليص جمركي في وقت قياسي",
	"الشحن الجوي والبحري والبري",
	"استيراد وتصدير لحساب الغير",
	"حساب ضريبة جمركية",
	"استشارات مجانية"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-navy text-white pt-20 pb-8 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 opacity-10",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 size-96 rounded-full bg-secondary blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 size-96 rounded-full bg-accent blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-asn relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-4 md:grid-cols-2 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid place-items-center size-14 rounded-2xl bg-white p-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: asn_logo_default,
									alt: "شعار ASN",
									className: "size-full object-contain",
									width: 56,
									height: 56
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-black",
								children: "ASN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/70",
								children: "للاستيراد والتصدير والتخليص الجمركي"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-white/75 leading-loose",
							children: "شركة رائدة في الشحن الدولي والتخليص الجمركي، حاصلة على ترخيص IATA."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-base font-black mb-5",
						children: "روابط سريعة"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5",
						children: NAV_ITEMS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "text-sm text-white/75 hover:text-accent transition",
							children: n.label
						}) }, n.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-base font-black mb-5",
						children: "خدماتنا"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2.5",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "text-sm text-white/75 hover:text-accent transition",
							children: s
						}) }, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-base font-black mb-5",
						children: "بيانات التواصل"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [
							SITE.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: p.href,
									dir: "ltr",
									className: "ltr-num text-sm text-white/85 hover:text-accent transition",
									children: p.display
								})]
							}, p.href)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${SITE.email}`,
									className: "text-sm text-white/85 hover:text-accent transition break-all",
									children: SITE.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-white/85",
									children: "جمهورية مصر العربية"
								})]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-white/60 text-center sm:text-right",
					children: "© ASN Import, Export & Customs Clearance. All Rights Reserved."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-bold text-white hover:bg-white/15 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" }), "العودة للأعلى"]
				})]
			})]
		})]
	});
}
function FloatingButtons() {
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShowTop(window.scrollY > 500);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 left-5 z-40 flex flex-col items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: SITE.whatsapp.url,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "واتساب",
				className: "relative grid place-items-center size-14 rounded-full bg-[#25D366] text-white shadow-elevated transition hover:scale-110 animate-pulse-ring",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 32 32",
					className: "size-7",
					fill: "currentColor",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.53 2.478-1.318.115-.302.187-.65.187-1.02 0-.545-1.435-1.02-1.65-1.02Zm-3.048 4.115a9.63 9.63 0 0 1-5.522-1.734l-3.859 1.24 1.259-3.732a9.579 9.579 0 0 1-1.87-5.687C6.07 6.28 10.53 1.82 16.062 1.82c5.532 0 9.987 4.46 9.987 9.987 0 5.532-4.455 9.987-9.987 9.987Zm0-21.32C9.582 0 4.242 5.34 4.242 11.888c0 2.113.545 4.111 1.605 5.906L4 24l6.32-1.834c1.735.945 3.687 1.447 5.71 1.447 6.548 0 11.888-5.34 11.888-11.887 0-3.19-1.246-6.19-3.503-8.446C22.253 1.246 19.252 0 16.062 0Z" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${SITE.email}`,
				"aria-label": "البريد الإلكتروني",
				className: "grid place-items-center size-14 rounded-full gradient-primary text-white shadow-elevated transition hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-6" })
			}),
			showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#home",
				"aria-label": "العودة للأعلى",
				className: "grid place-items-center size-11 rounded-full bg-navy text-white shadow-soft transition hover:scale-110",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyASN, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurMessage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversionCTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingButtons, {})
		]
	});
}
//#endregion
export { HomePage as component };
