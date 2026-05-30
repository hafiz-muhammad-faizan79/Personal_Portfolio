import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { Icon: FaGithub,    href: "https://github.com/hafiz-muhammad-faizan79", label: "GitHub",    hoverColor: "#a78bfa" },
  { Icon: FaLinkedinIn,href: "https://linkedin.com",                        label: "LinkedIn",  hoverColor: "#38bdf8" },
  { Icon: FaInstagram, href: "https://instagram.com/faizan.i07",            label: "Instagram", hoverColor: "#f472b6" },
  { Icon: FaTwitter,   href: "https://twitter.com/@mfaizisby",              label: "Twitter",   hoverColor: "#22d3ee" },
  { Icon: FaFacebookF, href: "https://facebook.com",                        label: "Facebook",  hoverColor: "#60a5fa" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 2rem 0 2.5rem;
          position: relative;
        }
        .footer-root::before {
          content: '';
          position: absolute;
          top: 0; left: 50%; transform: translateX(-50%);
          width: 200px; height: 1px;
          background: linear-gradient(90deg, transparent, #22d3ee66, transparent);
        }
        .footer-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 0.875rem;
          background: linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-copy {
          font-size: 0.75rem;
          color: rgb(100 116 139);
        }
        .social-btn {
          width: 32px; height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s, transform 0.2s, color 0.2s;
          color: rgb(100 116 139);
          text-decoration: none;
        }
        .social-btn:hover { transform: translateY(-2px); }
      `}</style>

      <footer className="footer-root">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>
            <p className="footer-name">Hafiz Muhammad Faizan</p>
            <p className="footer-copy mt-0.5">
              © {new Date().getFullYear()} · CS Graduate · Lahore, Pakistan
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${hoverColor}50`;
                  e.currentTarget.style.background = `${hoverColor}12`;
                  e.currentTarget.style.color = hoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.color = "rgb(100 116 139)";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}